const FoodItem = {
  createdBy: ({ id }, args, context) => {
    return context.prisma.foodItem({ id }).createdBy()
  }
}

module.exports = {
  FoodItem
}
