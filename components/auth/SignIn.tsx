import React from "react";
import { View, Text } from "../Themed";
import { Button, Headline, TextInput } from "react-native-paper";
import { Auth, graphqlOperation, API } from "aws-amplify";
import { listEmployees, getBar } from "../../src/graphql/queries";
import { useStateValue } from "../../src/state/StateProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [notAdded, setNotAdded] = React.useState(false);
  const [{ bar }, dispatch] = useStateValue();

  const storeBar = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("bar", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  async function signIn() {
    const response_promise = API.graphql(
      graphqlOperation(listEmployees, {
        filter: { email: { eq: email } },
      })
    );

    const response = await response_promise;
    if (response.data.listEmployees.items[0]) {
      try {
        const res = API.graphql(
          graphqlOperation(getBar, {
            id: String(response.data.listEmployees.items[0].barID),
          })
        );
        const barPromise = await res;

        storeBar(barPromise.data.getBar)

      } catch (e) {
        console.log(e);
      }

      console.log(bar);
      const data = Auth.signIn(email, password)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      setNotAdded(true);
    }
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Headline style={{ margin: 10 }}>Sign In</Headline>
      <TextInput
        autoComplete={null}
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ width: "50%", margin: 10 }}
      />
      <TextInput
        autoComplete={null}
        secureTextEntry={true}
        value={password}
        label="Password"
        placeholder="Password"
        style={{ width: "50%" }}
        onChangeText={(text) => setPassword(text)}
      />
      {notAdded ? (
        <Text>
          {" "}
          You have not been added as an employee with Barfly
        </Text>
      ) : null}
      <Button
        style={{ width: "50%", margin: 20 }}
        mode="contained"
        disabled={password === "" || email === ""}
        onPress={signIn}
      >
        Sign In
      </Button>
    </View>
  );
};

export default SignIn;
