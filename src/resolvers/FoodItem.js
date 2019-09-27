const FoodItem = {
  createdBy: ({ id }, args, context) => {
    return context.prisma.foodItem({ id }).createdBy()
  },
  mealsPartOf: ({ id }, args, context) => {
    return context.prisma.foodItem({ id }).mealsPartOf()
  }
}

module.exports = {
  FoodItem
}
