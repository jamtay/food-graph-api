const { getUserId } = require('../utils')

const Query = {
  feed(parent, args, context) {
    return context.prisma.posts({ where: { published: true } })
  },
  drafts(parent, args, context) {
    const id = getUserId(context)
    const where = {
      published: false,
      author: {
        id
      }
    }
    return context.prisma.posts({ where })
  },
  post(parent, { id }, context) {
    return context.prisma.post({ id })
  },
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
  }
}

module.exports = { Query }
