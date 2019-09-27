module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateFoodItem {
  count: Int!
}

type AggregateMeal {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type FoodItem {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  createdBy: User!
  mealsPartOf(where: MealWhereInput, orderBy: MealOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meal!]
}

type FoodItemConnection {
  pageInfo: PageInfo!
  edges: [FoodItemEdge]!
  aggregate: AggregateFoodItem!
}

input FoodItemCreateInput {
  id: ID
  name: String!
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  createdBy: UserCreateOneWithoutFoodsInput!
  mealsPartOf: MealCreateManyWithoutFoodsInput
}

input FoodItemCreateManyWithoutCreatedByInput {
  create: [FoodItemCreateWithoutCreatedByInput!]
  connect: [FoodItemWhereUniqueInput!]
}

input FoodItemCreateManyWithoutMealsPartOfInput {
  create: [FoodItemCreateWithoutMealsPartOfInput!]
  connect: [FoodItemWhereUniqueInput!]
}

input FoodItemCreateWithoutCreatedByInput {
  id: ID
  name: String!
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  mealsPartOf: MealCreateManyWithoutFoodsInput
}

input FoodItemCreateWithoutMealsPartOfInput {
  id: ID
  name: String!
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  createdBy: UserCreateOneWithoutFoodsInput!
}

type FoodItemEdge {
  node: FoodItem!
  cursor: String!
}

enum FoodItemOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  cost_ASC
  cost_DESC
  calories_ASC
  calories_DESC
  protein_ASC
  protein_DESC
  vegan_ASC
  vegan_DESC
}

type FoodItemPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
}

input FoodItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  cost: Float
  cost_not: Float
  cost_in: [Float!]
  cost_not_in: [Float!]
  cost_lt: Float
  cost_lte: Float
  cost_gt: Float
  cost_gte: Float
  calories: Int
  calories_not: Int
  calories_in: [Int!]
  calories_not_in: [Int!]
  calories_lt: Int
  calories_lte: Int
  calories_gt: Int
  calories_gte: Int
  protein: Int
  protein_not: Int
  protein_in: [Int!]
  protein_not_in: [Int!]
  protein_lt: Int
  protein_lte: Int
  protein_gt: Int
  protein_gte: Int
  vegan: Boolean
  vegan_not: Boolean
  AND: [FoodItemScalarWhereInput!]
  OR: [FoodItemScalarWhereInput!]
  NOT: [FoodItemScalarWhereInput!]
}

type FoodItemSubscriptionPayload {
  mutation: MutationType!
  node: FoodItem
  updatedFields: [String!]
  previousValues: FoodItemPreviousValues
}

input FoodItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FoodItemWhereInput
  AND: [FoodItemSubscriptionWhereInput!]
  OR: [FoodItemSubscriptionWhereInput!]
  NOT: [FoodItemSubscriptionWhereInput!]
}

input FoodItemUpdateInput {
  name: String
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  createdBy: UserUpdateOneRequiredWithoutFoodsInput
  mealsPartOf: MealUpdateManyWithoutFoodsInput
}

input FoodItemUpdateManyDataInput {
  name: String
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
}

input FoodItemUpdateManyMutationInput {
  name: String
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
}

input FoodItemUpdateManyWithoutCreatedByInput {
  create: [FoodItemCreateWithoutCreatedByInput!]
  delete: [FoodItemWhereUniqueInput!]
  connect: [FoodItemWhereUniqueInput!]
  set: [FoodItemWhereUniqueInput!]
  disconnect: [FoodItemWhereUniqueInput!]
  update: [FoodItemUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [FoodItemUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [FoodItemScalarWhereInput!]
  updateMany: [FoodItemUpdateManyWithWhereNestedInput!]
}

input FoodItemUpdateManyWithoutMealsPartOfInput {
  create: [FoodItemCreateWithoutMealsPartOfInput!]
  delete: [FoodItemWhereUniqueInput!]
  connect: [FoodItemWhereUniqueInput!]
  set: [FoodItemWhereUniqueInput!]
  disconnect: [FoodItemWhereUniqueInput!]
  update: [FoodItemUpdateWithWhereUniqueWithoutMealsPartOfInput!]
  upsert: [FoodItemUpsertWithWhereUniqueWithoutMealsPartOfInput!]
  deleteMany: [FoodItemScalarWhereInput!]
  updateMany: [FoodItemUpdateManyWithWhereNestedInput!]
}

input FoodItemUpdateManyWithWhereNestedInput {
  where: FoodItemScalarWhereInput!
  data: FoodItemUpdateManyDataInput!
}

input FoodItemUpdateWithoutCreatedByDataInput {
  name: String
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  mealsPartOf: MealUpdateManyWithoutFoodsInput
}

input FoodItemUpdateWithoutMealsPartOfDataInput {
  name: String
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  createdBy: UserUpdateOneRequiredWithoutFoodsInput
}

input FoodItemUpdateWithWhereUniqueWithoutCreatedByInput {
  where: FoodItemWhereUniqueInput!
  data: FoodItemUpdateWithoutCreatedByDataInput!
}

input FoodItemUpdateWithWhereUniqueWithoutMealsPartOfInput {
  where: FoodItemWhereUniqueInput!
  data: FoodItemUpdateWithoutMealsPartOfDataInput!
}

input FoodItemUpsertWithWhereUniqueWithoutCreatedByInput {
  where: FoodItemWhereUniqueInput!
  update: FoodItemUpdateWithoutCreatedByDataInput!
  create: FoodItemCreateWithoutCreatedByInput!
}

input FoodItemUpsertWithWhereUniqueWithoutMealsPartOfInput {
  where: FoodItemWhereUniqueInput!
  update: FoodItemUpdateWithoutMealsPartOfDataInput!
  create: FoodItemCreateWithoutMealsPartOfInput!
}

input FoodItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  cost: Float
  cost_not: Float
  cost_in: [Float!]
  cost_not_in: [Float!]
  cost_lt: Float
  cost_lte: Float
  cost_gt: Float
  cost_gte: Float
  calories: Int
  calories_not: Int
  calories_in: [Int!]
  calories_not_in: [Int!]
  calories_lt: Int
  calories_lte: Int
  calories_gt: Int
  calories_gte: Int
  protein: Int
  protein_not: Int
  protein_in: [Int!]
  protein_not_in: [Int!]
  protein_lt: Int
  protein_lte: Int
  protein_gt: Int
  protein_gte: Int
  vegan: Boolean
  vegan_not: Boolean
  createdBy: UserWhereInput
  mealsPartOf_every: MealWhereInput
  mealsPartOf_some: MealWhereInput
  mealsPartOf_none: MealWhereInput
  AND: [FoodItemWhereInput!]
  OR: [FoodItemWhereInput!]
  NOT: [FoodItemWhereInput!]
}

input FoodItemWhereUniqueInput {
  id: ID
}

scalar Long

type Meal {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  Location: String
  createdBy: User!
  foods(where: FoodItemWhereInput, orderBy: FoodItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FoodItem!]
}

type MealConnection {
  pageInfo: PageInfo!
  edges: [MealEdge]!
  aggregate: AggregateMeal!
}

input MealCreateInput {
  id: ID
  name: String!
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  Location: String
  createdBy: UserCreateOneWithoutMealsInput!
  foods: FoodItemCreateManyWithoutMealsPartOfInput
}

input MealCreateManyWithoutCreatedByInput {
  create: [MealCreateWithoutCreatedByInput!]
  connect: [MealWhereUniqueInput!]
}

input MealCreateManyWithoutFoodsInput {
  create: [MealCreateWithoutFoodsInput!]
  connect: [MealWhereUniqueInput!]
}

input MealCreateWithoutCreatedByInput {
  id: ID
  name: String!
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  Location: String
  foods: FoodItemCreateManyWithoutMealsPartOfInput
}

input MealCreateWithoutFoodsInput {
  id: ID
  name: String!
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  Location: String
  createdBy: UserCreateOneWithoutMealsInput!
}

type MealEdge {
  node: Meal!
  cursor: String!
}

enum MealOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  cost_ASC
  cost_DESC
  calories_ASC
  calories_DESC
  protein_ASC
  protein_DESC
  vegan_ASC
  vegan_DESC
  Location_ASC
  Location_DESC
}

type MealPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  Location: String
}

input MealScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  cost: Float
  cost_not: Float
  cost_in: [Float!]
  cost_not_in: [Float!]
  cost_lt: Float
  cost_lte: Float
  cost_gt: Float
  cost_gte: Float
  calories: Int
  calories_not: Int
  calories_in: [Int!]
  calories_not_in: [Int!]
  calories_lt: Int
  calories_lte: Int
  calories_gt: Int
  calories_gte: Int
  protein: Int
  protein_not: Int
  protein_in: [Int!]
  protein_not_in: [Int!]
  protein_lt: Int
  protein_lte: Int
  protein_gt: Int
  protein_gte: Int
  vegan: Boolean
  vegan_not: Boolean
  Location: String
  Location_not: String
  Location_in: [String!]
  Location_not_in: [String!]
  Location_lt: String
  Location_lte: String
  Location_gt: String
  Location_gte: String
  Location_contains: String
  Location_not_contains: String
  Location_starts_with: String
  Location_not_starts_with: String
  Location_ends_with: String
  Location_not_ends_with: String
  AND: [MealScalarWhereInput!]
  OR: [MealScalarWhereInput!]
  NOT: [MealScalarWhereInput!]
}

type MealSubscriptionPayload {
  mutation: MutationType!
  node: Meal
  updatedFields: [String!]
  previousValues: MealPreviousValues
}

input MealSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MealWhereInput
  AND: [MealSubscriptionWhereInput!]
  OR: [MealSubscriptionWhereInput!]
  NOT: [MealSubscriptionWhereInput!]
}

input MealUpdateInput {
  name: String
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  Location: String
  createdBy: UserUpdateOneRequiredWithoutMealsInput
  foods: FoodItemUpdateManyWithoutMealsPartOfInput
}

input MealUpdateManyDataInput {
  name: String
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  Location: String
}

input MealUpdateManyMutationInput {
  name: String
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  Location: String
}

input MealUpdateManyWithoutCreatedByInput {
  create: [MealCreateWithoutCreatedByInput!]
  delete: [MealWhereUniqueInput!]
  connect: [MealWhereUniqueInput!]
  set: [MealWhereUniqueInput!]
  disconnect: [MealWhereUniqueInput!]
  update: [MealUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [MealUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [MealScalarWhereInput!]
  updateMany: [MealUpdateManyWithWhereNestedInput!]
}

input MealUpdateManyWithoutFoodsInput {
  create: [MealCreateWithoutFoodsInput!]
  delete: [MealWhereUniqueInput!]
  connect: [MealWhereUniqueInput!]
  set: [MealWhereUniqueInput!]
  disconnect: [MealWhereUniqueInput!]
  update: [MealUpdateWithWhereUniqueWithoutFoodsInput!]
  upsert: [MealUpsertWithWhereUniqueWithoutFoodsInput!]
  deleteMany: [MealScalarWhereInput!]
  updateMany: [MealUpdateManyWithWhereNestedInput!]
}

input MealUpdateManyWithWhereNestedInput {
  where: MealScalarWhereInput!
  data: MealUpdateManyDataInput!
}

input MealUpdateWithoutCreatedByDataInput {
  name: String
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  Location: String
  foods: FoodItemUpdateManyWithoutMealsPartOfInput
}

input MealUpdateWithoutFoodsDataInput {
  name: String
  description: String
  cost: Float
  calories: Int
  protein: Int
  vegan: Boolean
  Location: String
  createdBy: UserUpdateOneRequiredWithoutMealsInput
}

input MealUpdateWithWhereUniqueWithoutCreatedByInput {
  where: MealWhereUniqueInput!
  data: MealUpdateWithoutCreatedByDataInput!
}

input MealUpdateWithWhereUniqueWithoutFoodsInput {
  where: MealWhereUniqueInput!
  data: MealUpdateWithoutFoodsDataInput!
}

input MealUpsertWithWhereUniqueWithoutCreatedByInput {
  where: MealWhereUniqueInput!
  update: MealUpdateWithoutCreatedByDataInput!
  create: MealCreateWithoutCreatedByInput!
}

input MealUpsertWithWhereUniqueWithoutFoodsInput {
  where: MealWhereUniqueInput!
  update: MealUpdateWithoutFoodsDataInput!
  create: MealCreateWithoutFoodsInput!
}

input MealWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  cost: Float
  cost_not: Float
  cost_in: [Float!]
  cost_not_in: [Float!]
  cost_lt: Float
  cost_lte: Float
  cost_gt: Float
  cost_gte: Float
  calories: Int
  calories_not: Int
  calories_in: [Int!]
  calories_not_in: [Int!]
  calories_lt: Int
  calories_lte: Int
  calories_gt: Int
  calories_gte: Int
  protein: Int
  protein_not: Int
  protein_in: [Int!]
  protein_not_in: [Int!]
  protein_lt: Int
  protein_lte: Int
  protein_gt: Int
  protein_gte: Int
  vegan: Boolean
  vegan_not: Boolean
  Location: String
  Location_not: String
  Location_in: [String!]
  Location_not_in: [String!]
  Location_lt: String
  Location_lte: String
  Location_gt: String
  Location_gte: String
  Location_contains: String
  Location_not_contains: String
  Location_starts_with: String
  Location_not_starts_with: String
  Location_ends_with: String
  Location_not_ends_with: String
  createdBy: UserWhereInput
  foods_every: FoodItemWhereInput
  foods_some: FoodItemWhereInput
  foods_none: FoodItemWhereInput
  AND: [MealWhereInput!]
  OR: [MealWhereInput!]
  NOT: [MealWhereInput!]
}

input MealWhereUniqueInput {
  id: ID
}

type Mutation {
  createFoodItem(data: FoodItemCreateInput!): FoodItem!
  updateFoodItem(data: FoodItemUpdateInput!, where: FoodItemWhereUniqueInput!): FoodItem
  updateManyFoodItems(data: FoodItemUpdateManyMutationInput!, where: FoodItemWhereInput): BatchPayload!
  upsertFoodItem(where: FoodItemWhereUniqueInput!, create: FoodItemCreateInput!, update: FoodItemUpdateInput!): FoodItem!
  deleteFoodItem(where: FoodItemWhereUniqueInput!): FoodItem
  deleteManyFoodItems(where: FoodItemWhereInput): BatchPayload!
  createMeal(data: MealCreateInput!): Meal!
  updateMeal(data: MealUpdateInput!, where: MealWhereUniqueInput!): Meal
  updateManyMeals(data: MealUpdateManyMutationInput!, where: MealWhereInput): BatchPayload!
  upsertMeal(where: MealWhereUniqueInput!, create: MealCreateInput!, update: MealUpdateInput!): Meal!
  deleteMeal(where: MealWhereUniqueInput!): Meal
  deleteManyMeals(where: MealWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  foodItem(where: FoodItemWhereUniqueInput!): FoodItem
  foodItems(where: FoodItemWhereInput, orderBy: FoodItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FoodItem]!
  foodItemsConnection(where: FoodItemWhereInput, orderBy: FoodItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FoodItemConnection!
  meal(where: MealWhereUniqueInput!): Meal
  meals(where: MealWhereInput, orderBy: MealOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meal]!
  mealsConnection(where: MealWhereInput, orderBy: MealOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MealConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  foodItem(where: FoodItemSubscriptionWhereInput): FoodItemSubscriptionPayload
  meal(where: MealSubscriptionWhereInput): MealSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  foods(where: FoodItemWhereInput, orderBy: FoodItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FoodItem!]
  meals(where: MealWhereInput, orderBy: MealOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meal!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  name: String!
  foods: FoodItemCreateManyWithoutCreatedByInput
  meals: MealCreateManyWithoutCreatedByInput
}

input UserCreateOneWithoutFoodsInput {
  create: UserCreateWithoutFoodsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMealsInput {
  create: UserCreateWithoutMealsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFoodsInput {
  id: ID
  email: String!
  password: String!
  name: String!
  meals: MealCreateManyWithoutCreatedByInput
}

input UserCreateWithoutMealsInput {
  id: ID
  email: String!
  password: String!
  name: String!
  foods: FoodItemCreateManyWithoutCreatedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  foods: FoodItemUpdateManyWithoutCreatedByInput
  meals: MealUpdateManyWithoutCreatedByInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneRequiredWithoutFoodsInput {
  create: UserCreateWithoutFoodsInput
  update: UserUpdateWithoutFoodsDataInput
  upsert: UserUpsertWithoutFoodsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutMealsInput {
  create: UserCreateWithoutMealsInput
  update: UserUpdateWithoutMealsDataInput
  upsert: UserUpsertWithoutMealsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFoodsDataInput {
  email: String
  password: String
  name: String
  meals: MealUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutMealsDataInput {
  email: String
  password: String
  name: String
  foods: FoodItemUpdateManyWithoutCreatedByInput
}

input UserUpsertWithoutFoodsInput {
  update: UserUpdateWithoutFoodsDataInput!
  create: UserCreateWithoutFoodsInput!
}

input UserUpsertWithoutMealsInput {
  update: UserUpdateWithoutMealsDataInput!
  create: UserCreateWithoutMealsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  foods_every: FoodItemWhereInput
  foods_some: FoodItemWhereInput
  foods_none: FoodItemWhereInput
  meals_every: MealWhereInput
  meals_some: MealWhereInput
  meals_none: MealWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    