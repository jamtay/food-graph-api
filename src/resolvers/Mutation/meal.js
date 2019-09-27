const { getUserId } = require('../../utils')

const meal = {
  async createMeal(parent, {name, description, cost, calories, protein, vegan, location}, context) {
    const userId = getUserId(context)
    return context.prisma.createMeal({
      name, description, cost, calories, protein, vegan, location,
      createdBy: {
        connect: {
          id: userId
        }
      }
    })
  }
}

module.exports = { meal }