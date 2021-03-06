// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      username
      icon
      roomId
      createdAt
      updatedAt
      fromRelations {
        items {
          id
          fromUserId
          toUserId
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      toRelations {
        items {
          id
          fromUserId
          toUserId
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
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
        username
        icon
        roomId
        createdAt
        updatedAt
        fromRelations {
          nextToken
        }
        toRelations {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUserRelation = /* GraphQL */ `
  query GetUserRelation($id: ID!) {
    getUserRelation(id: $id) {
      id
      fromUserId
      toUserId
      status
      createdAt
      updatedAt
      fromUser {
        id
        email
        username
        icon
        roomId
        createdAt
        updatedAt
        fromRelations {
          nextToken
        }
        toRelations {
          nextToken
        }
      }
      toUser {
        id
        email
        username
        icon
        roomId
        createdAt
        updatedAt
        fromRelations {
          nextToken
        }
        toRelations {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listUserRelations = /* GraphQL */ `
  query ListUserRelations(
    $filter: ModelUserRelationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserRelations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fromUserId
        toUserId
        status
        createdAt
        updatedAt
        fromUser {
          id
          email
          username
          icon
          roomId
          createdAt
          updatedAt
        }
        toUser {
          id
          email
          username
          icon
          roomId
          createdAt
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      name
      password
      ownerId
      owner {
        id
        email
        username
        icon
        roomId
        createdAt
        updatedAt
        fromRelations {
          nextToken
        }
        toRelations {
          nextToken
        }
      }
      users {
        items {
          id
          email
          username
          icon
          roomId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        password
        ownerId
        owner {
          id
          email
          username
          icon
          roomId
          createdAt
          updatedAt
        }
        users {
          nextToken
        }
      }
      nextToken
    }
  }
`;
