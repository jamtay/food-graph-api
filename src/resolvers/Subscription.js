const Subscription = {
  foodSubscription: {
    subscribe: async (parent, args, context) => {
      return context.prisma.$subscribe
        .foodItem({
          mutation_in: ['CREATED', 'UPDATED'],
        })
        .node()
    },
    resolve: payload => {
      return payload
    }
  }
}

module.exports = { Subscription }
