import { getUserId, Context } from "../../utils";

export const User = {
  usersHauls: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).hauls();
  },
  me(parent, args, ctx: Context) {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
    }

    return ctx.prisma.user({ id: userId });
  }
};
