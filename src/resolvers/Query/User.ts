import { getUserId, Context } from "../../utils";

export const User = {
  /**
   * Retrieves a user by their ID
   * @param id - the ID of the user
   */
  user: async ({ id }, args, ctx: Context) => {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
      // TODO: Wrap this in method somewhere - too much duplication
    }

    return await ctx.prisma.user({ id }).hauls();
  },
  /**
   * Returns all users within the database
   */
  users: async (parent, args, ctx: Context) => {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
      // TODO: Wrap this in method somewhere - too much duplication
    }

    return await ctx.prisma.users();
  },

  /**
   * Get the users own data
   * @param ctx -request context allows access to http headers
   */
  me(ctx: Context) {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
      // TODO: Wrap this in method somewhere - too much duplication
    }

    return ctx.prisma.user({ id: userId }).hauls();
  }
};
