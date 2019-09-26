const User = {
  foods: ({ id }, args, context) => {
    return context.prisma.user({ id }).foods()
  }
}

module.exports = {
  User
}