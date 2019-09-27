const { Query } = require('./Query')
const { auth } = require('./Mutation/auth')
const { foodItem } = require('./Mutation/food_item')
const { meal } = require('./Mutation/meal')
const { Subscription } = require('./Subscription')
const { User } = require('./User')
const { FoodItem } = require('./FoodItem')
const { Meal } = require('./Meal')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...foodItem,
    ...meal
  },
  Subscription,
  User,
  FoodItem,
  Meal
}
