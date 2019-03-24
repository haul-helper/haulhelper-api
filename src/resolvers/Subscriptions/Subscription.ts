import { Context } from "../../utils";

export const Subscription = {
  haulSubscription: {
    subscribe: async (parent, args, ctx: Context) => {
      return ctx.prisma.$subscribe
        .haul({
          mutation_in: ["CREATED", "UPDATED"]
        })
        .node();
    },
    resolve: payload => {
      return payload;
    }
  }
};
