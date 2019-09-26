const { getUserId } = require('../../utils')

const foodItem = {
  async createFoodItem (parent, {name, description, cost, calories, protein, vegan}, context) {
    const userId = getUserId(context)
    return context.prisma.createFoodItem({
      name, description, cost, calories, protein, vegan,
      createdBy: {
        connect: {
          id: userId
        }
      }
    })
  }
}

module.exports = { foodItem }