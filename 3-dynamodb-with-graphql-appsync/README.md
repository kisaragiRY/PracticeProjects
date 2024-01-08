# A full stack CRUD simple website 

- frontend: react
- backend: amplify: appsync & graphql
- db: dynamodb

## setup from empty project
```bash
cd [root-path]

# setup react
npx create-react-app ./
npm install react-router-dom # react router

# setup amplify
amplify init
amplify add api # choose graphql
amplify add auth # choose default for user identity pool

# for amplify library
npm install aws-amplify

# for amplify hosting
amplify add hosting # Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment) -> Manual deployment
```

## setup frontend
in `index.js`
```js
...
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports'
Amplify.configure(awsmobile)
...
```

## setup model
in `schema.graphql`
```graphql
type Todo 
  @model 
  @auth(rules: [{ allow: public }]){
  id: ID!
  name: String!
  description: String
  type: String! # a secondary index for sorting when listing
      @index(
      name: "todosByDate"
      queryField: "todosByDate"
      sortKeyFields: ["createdAt"]
    )
  createdAt: String!
}
```

