const User = {
  foods: ({ id }, args, context) => {
    return context.prisma.user({ id }).foods()
  },
  meals: ({ id }, args, context) => {
    return context.prisma.user({ id }).meals()
  }
}

module.exports = {
  User
}