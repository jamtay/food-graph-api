const Meal = {
  createdBy: ({ id }, args, context) => {
    return context.prisma.meal({ id }).createdBy()
  }
}

module.exports = {
  Meal
}
