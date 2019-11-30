const { getUserId } = require('../../utils')

const foodItem = {
  async createFoodItem (parent, {name, description, cost, calories, protein, vegan, mealsPartOfIds}, context) {
    const userId = getUserId(context)
    return context.prisma.createFoodItem({
      name, description, cost, calories, protein, vegan,
      createdBy: {
        connect: {
          id: userId
        }
      }
    })
  },
  async deleteFoodItem(parent, args, context) {
    const userId = getUserId(context)

    const foodItemExistsForUser = await context.prisma.$exists.foodItem({
      id: args.id,
      createdBy: {
        connect: {
          id: userId
        }
      }
    })

    if (!foodItemExistsForUser) {
      throw new Error(`Food item ${args.id} does not exist for user: ${userId}`)
    }

    return await context.prisma.deleteFoodItem({
      id: args.id
    })
  }
}

module.exports = { foodItem }