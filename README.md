# Documentation

## Commands

* `yarn start` starts GraphQL server on `http://localhost:4000`
* `yarn prisma deploy` deploys and generates prisma db
* `yarn prisma seed` adds data defined in `food-graph-api/prisma/seed.graphql` to your database
* `yarn prisma info` gets information about db, including url for viewing

## Project structure

![](https://imgur.com/95faUsa.png)

| File name 　　　　　　　　　　　　　　| Description 　　　　　　　　<br><br>|
| :--  | :--         |
| `├── .env` | Defines environment variables |
| `└── database ` (_directory_) | _Contains all files that are related to the Prisma database service_ |\
| `　　├── prisma.yml` | The root configuration file for your Prisma database service ([docs](https://www.prismagraphql.com/docs/reference/prisma.yml/overview-and-example-foatho8aip)) |
| `　　└── datamodel.prisma` | Defines your data model (written in [GraphQL SDL](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51)) |
| `└── src ` (_directory_) | _Contains the source files for your GraphQL server_ |
| `　　├── index.js` | The entry point for your GraphQL server |
| `　　├── schema.graphql` | The **application schema** defining the API exposed to client applications  |
| `　　├── resolvers` (_directory_) | _Contains the implementation of the resolvers for the application schema_ |
| `　　└── generated` (_directory_) | _Contains generated files_ |
| `　　　　└── prisma-client` (_directory_) | The generated Prisma client |


## To use

After running 

1. Go to localhost:4000
2. Enter one of the following queries or mutations in the playground

```
# If you name queries, you can keep multiple in one playground

# Sign up a new user
mutation SignUp {
  signup(
    name: "Alice"
    email: "alice@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      id
    }
  }
}

#Login with user 
mutation LogIn {
  login(
    email: "alice@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      email
      links {
        url
        description
      }
    }
  }
}

# Set token in header (all below requests need a token)
# {
#   "Authorization": "Bearer __TOKEN__"
# }

# Simple get all information about the food items
query FoodItemsQuery {
  allFoods {
    links {
      id,
      name,
      description,
      cost,
      calories,
      protein,
      vegan,
      createdBy {
        id,
        email,
        name
      }
    }
  }
}

# Add a new food item
mutation AddNewFoodItem {
  createFoodItem(
    name:"new-one",
    description:"description",
    cost:12,
    calories:10,
    protein: 10,
    vegan: true
  ) {
    id,
    name,
    description
  }
}

# Get an individual food item
query GetSingleFood {
  food(id:"cjz1o0aw5xzaz0b53am7cjsv5") {
    id,
    name,
    description
  }
}

# Get my food items (related to logged in user)
query GetMyFoods {
  myFoods {
    id,
    name,
    description
  }
}

# Subscription to inform when a new food item is created 
subscription FoodSubscription {
  foodSubscription {
      id
      name
      description
      createdBy {
        id
        name
        email
      }
  }
}
```