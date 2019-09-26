const { Query } = require('./Query')
const { auth } = require('./Mutation/auth')
const { foodItem } = require('./Mutation/food_item')
const { Subscription } = require('./Subscription')
const { User } = require('./User')
const { FoodItem } = require('./FoodItem')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...foodItem
  },
  Subscription,
  User,
  FoodItem
}
