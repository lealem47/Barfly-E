import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {API, graphqlOperation} from 'aws-amplify';
import {onCreateOrder} from '../src/graphql/subscriptions';
import { listOrders } from '../src/graphql/queries';
import OrderQueue from '../src/components/orderqueue/OrderQueue';

export default function TabOneScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Queue</Text>
      

      <OrderQueue />
      
  
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
