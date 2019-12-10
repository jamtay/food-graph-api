const { getUserId } = require('../utils')


const FoodItem = {
  createdBy: ({ id }, args, context) => {
    return context.prisma.foodItem({ id }).createdBy()
  },
  mealsPartOf: ({ id }, args, context) => {
    return context.prisma.foodItem({ id }).mealsPartOf()
  },
  createdByLoggedInUser: async ({ id }, args, context) => {
    const userId = getUserId(context)
    const createdByUser = await context.prisma.foodItem({ id }).createdBy()
    if (createdByUser !== undefined && createdByUser !== null) {
      return createdByUser.id === userId
    }
    return false
  }
}

module.exports = {
  FoodItem
}
