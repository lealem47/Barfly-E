/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMixer = /* GraphQL */ `
  query GetMixer($id: ID!) {
    getMixer(id: $id) {
      id
      name
      price
      brand
      img
      specialID
      cocktailID
      shotID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      MixerCocktails {
        nextToken
        startedAt
      }
      MixerSpecials {
        nextToken
        startedAt
      }
    }
  }
`;
export const listMixers = /* GraphQL */ `
  query ListMixers(
    $filter: ModelMixerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMixers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMixers = /* GraphQL */ `
  query SyncMixers(
    $filter: ModelMixerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMixers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        price
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLiquorType = /* GraphQL */ `
  query GetLiquorType($id: ID!) {
    getLiquorType(id: $id) {
      id
      name
      type
      price
      brand
      img
      specialID
      cocktailID
      shotID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LiquorTypeShots {
        nextToken
        startedAt
      }
      LiquorTypeCocktails {
        nextToken
        startedAt
      }
      LiquorTypeSpecials {
        nextToken
        startedAt
      }
    }
  }
`;
export const listLiquorTypes = /* GraphQL */ `
  query ListLiquorTypes(
    $filter: ModelLiquorTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLiquorTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        price
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLiquorTypes = /* GraphQL */ `
  query SyncLiquorTypes(
    $filter: ModelLiquorTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLiquorTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        type
        price
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSpecial = /* GraphQL */ `
  query GetSpecial($id: ID!) {
    getSpecial(id: $id) {
      id
      name
      price
      img
      description
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Mixers {
        nextToken
        startedAt
      }
      LiquorTypes {
        nextToken
        startedAt
      }
      liquortypes {
        nextToken
        startedAt
      }
      mixers {
        nextToken
        startedAt
      }
    }
  }
`;
export const listSpecials = /* GraphQL */ `
  query ListSpecials(
    $filter: ModelSpecialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        img
        description
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSpecials = /* GraphQL */ `
  query SyncSpecials(
    $filter: ModelSpecialFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSpecials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        price
        img
        description
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getWine = /* GraphQL */ `
  query GetWine($id: ID!) {
    getWine(id: $id) {
      id
      name
      price
      description
      img
      brand
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listWines = /* GraphQL */ `
  query ListWines(
    $filter: ModelWineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        description
        img
        brand
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWines = /* GraphQL */ `
  query SyncWines(
    $filter: ModelWineFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        price
        description
        img
        brand
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBeer = /* GraphQL */ `
  query GetBeer($id: ID!) {
    getBeer(id: $id) {
      id
      name
      price
      request
      img
      brand
      menuID
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listBeers = /* GraphQL */ `
  query ListBeers(
    $filter: ModelBeerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        request
        img
        brand
        menuID
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBeers = /* GraphQL */ `
  query SyncBeers(
    $filter: ModelBeerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBeers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        price
        request
        img
        brand
        menuID
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCocktail = /* GraphQL */ `
  query GetCocktail($id: ID!) {
    getCocktail(id: $id) {
      id
      name
      price
      description
      img
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Mixers {
        nextToken
        startedAt
      }
      LiquorTypes {
        nextToken
        startedAt
      }
      liquortypes {
        nextToken
        startedAt
      }
      mixers {
        nextToken
        startedAt
      }
    }
  }
`;
export const listCocktails = /* GraphQL */ `
  query ListCocktails(
    $filter: ModelCocktailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCocktails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        description
        img
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCocktails = /* GraphQL */ `
  query SyncCocktails(
    $filter: ModelCocktailFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCocktails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        price
        description
        img
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getShot = /* GraphQL */ `
  query GetShot($id: ID!) {
    getShot(id: $id) {
      id
      name
      price
      description
      img
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Mixers {
        nextToken
        startedAt
      }
      LiquorTypes {
        nextToken
        startedAt
      }
      liquortypes {
        nextToken
        startedAt
      }
    }
  }
`;
export const listShots = /* GraphQL */ `
  query ListShots(
    $filter: ModelShotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        description
        img
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncShots = /* GraphQL */ `
  query SyncShots(
    $filter: ModelShotFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        price
        description
        img
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFood = /* GraphQL */ `
  query GetFood($id: ID!) {
    getFood(id: $id) {
      id
      name
      price
      type
      img
      description
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listFoods = /* GraphQL */ `
  query ListFoods(
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        type
        img
        description
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFoods = /* GraphQL */ `
  query SyncFoods(
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFoods(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        price
        type
        img
        description
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
      id
      barID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Specials {
        nextToken
        startedAt
      }
      Wines {
        nextToken
        startedAt
      }
      Beers {
        nextToken
        startedAt
      }
      Cocktails {
        nextToken
        startedAt
      }
      Shots {
        nextToken
        startedAt
      }
      Foods {
        nextToken
        startedAt
      }
    }
  }
`;
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        barID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMenus = /* GraphQL */ `
  query SyncMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMenus(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        barID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      name
      barID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Bar {
        id
        name
        email
        phone
        profileImg
        location
        payment
        event
        address
        nightSummary
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Orders {
        nextToken
        startedAt
      }
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        barID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEmployees = /* GraphQL */ `
  query SyncEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEmployees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        barID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBar = /* GraphQL */ `
  query GetBar($id: ID!) {
    getBar(id: $id) {
      id
      name
      email
      phone
      profileImg
      location
      payment
      event
      address
      bio
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Menu {
        nextToken
        startedAt
      }
      Employees {
        nextToken
        startedAt
      }
      Orders {
        nextToken
        startedAt
      }
    }
  }
`;
export const listBars = /* GraphQL */ `
  query ListBars(
    $filter: ModelBarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        profileImg
        location
        payment
        event
        address
        nightSummary
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBars = /* GraphQL */ `
  query SyncBars(
    $filter: ModelBarFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBars(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        phone
        profileImg
        location
        payment
        event
        address
        nightSummary
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      timestamp
      items
      completed
      userID
      barID
      employeeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      User {
        id
        email
        phone
        profileImg
        location
        age
        createdAt
        name
        address
        order
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items
        orderStatus
        completed
        userID
        barID
        employeeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        timestamp
        items
        completed
        userID
        barID
        employeeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      phone
      profileImg
      location
      age
      createdAt
      name
      address
      _version
      _deleted
      _lastChangedAt
      updatedAt
      Orders {
        nextToken
        startedAt
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        phone
        profileImg
        location
        age
        createdAt
        name
        address
        order
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        phone
        profileImg
        location
        age
        createdAt
        name
        address
        order
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLiquorTypeShots = /* GraphQL */ `
  query SyncLiquorTypeShots(
    $filter: ModelLiquorTypeShotFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLiquorTypeShots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        liquortypeID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLiquorTypeCocktails = /* GraphQL */ `
  query SyncLiquorTypeCocktails(
    $filter: ModelLiquorTypeCocktailFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLiquorTypeCocktails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        liquortypeID
        cocktailID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLiquorTypeSpecials = /* GraphQL */ `
  query SyncLiquorTypeSpecials(
    $filter: ModelLiquorTypeSpecialFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLiquorTypeSpecials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        liquortypeID
        specialID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMixerCocktails = /* GraphQL */ `
  query SyncMixerCocktails(
    $filter: ModelMixerCocktailFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMixerCocktails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        mixerID
        cocktailID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMixerSpecials = /* GraphQL */ `
  query SyncMixerSpecials(
    $filter: ModelMixerSpecialFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMixerSpecials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        mixerID
        specialID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
