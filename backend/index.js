var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const firebaseConfig = require('./apiKey.json'); // firebase token

// Initialize Firebase
const fire_app = initializeApp(firebaseConfig);

const db = getFirestore(fire_app);
console.log(db);

// firebase 取得資料範例
// const querySnapshot = await getDocs(collection(db, "meat"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//   console.log(`${doc.id} => ${doc.data()}`);
// });
// console.log(querySnapshot);


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!"
  },
}

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

// Construct a schema, using GraphQL schema language
var schema_1 = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
`)

// The root provides a resolver function for each API endpoint
var root_1 = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? "Take it easy" : "Salvation lies within"
  },
  random: () => {
    return Math.random()
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6))
  },
}
app.use(
  "/graphql_1",
  graphqlHTTP({
    schema: schema_1,
    rootValue: root_1,
    graphiql: true,
  })
);

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");