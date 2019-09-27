const { getUserId } = require('../utils')

const Query = {
  me(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.user({ id })
  },
  allFoods(parent, args, context) {
    getUserId(context)
    return context.prisma.foodItems()
  },
  food(parent, { id }, context) {
    getUserId(context)
    return context.prisma.foodItem({ id })
  },
  myFoods(parent, args, context) {
    const id = getUserId(context)
    const where = {
      createdBy: {
        id
      }
    }
    return context.prisma.foodItems({ where })
  },
  allMeals(parent, args, context) {
    getUserId(context)
    return context.prisma.meals()
  },
  meal(parent, { id }, context) {
    getUserId(context)
    return context.prisma.meal({ id })
  },
  myMeals(parent, args, context) {
    const id = getUserId(context)
    const where = {
      createdBy: {
        id
      }
    }
    return context.prisma.meals({ where })
  }
}

module.exports = { Query }
