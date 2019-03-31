import { getUserId, Context } from "../../utils";

export const ItemQueries = {
  /**
   * Returns an array of Item object types
   *
   * @param ctx - request context allows access to http headers
   */
  items(ctx: Context) {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
      // TODO: Wrap this in method somewhere - too much duplication
    }
    return ctx.prisma.items();
  },

  /**
   * Returns an Item object type by the primary ID passed in
   *
   * @param id - the ID of the item
   * @param ctx - request context allows access to http headers
   */
  item({ id }, ctx: Context) {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
      // TODO: Wrap this in method somewhere - too much duplication
    }

    return ctx.prisma.item({ id });
  }
};
