const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    greetings: String
    welcome(name: String!): String
    getStudentById(id: Int!): Student
    getAllStudents: [Student]
  }

  type Student {
    id: ID
    firstName: String
    lastName: String
    age: Int
  }

  type Mutation {
    createStudent(data: createStudentInput!): Student
    updateStudent(firstName: String!, lastName: String!, age: Int!): Student
    deleteByAge(age: Int!): String
  }

  input createStudentInput {
    firstName: String!
    lastName: String!
    age: Int!
  }
`;

module.exports = { typeDefs };
