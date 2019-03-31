import { getUserId, Context } from "../../utils";
export const ImageQueries = {
  /**
   * Returns an array of Image object types
   *
   * @param ctx - request context allows access to http headers
   */
  images(ctx: Context) {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
      // TODO: Wrap this in method somewhere - too much duplication
    }

    return ctx.prisma.images();
  },

  /**
   * Returns an Item object type by the primary ID passed in
   *
   * @param id - the ID of the item
   * @param ctx - request context allows access to http headers
   */
  image({ id }, ctx: Context) {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
      // TODO: Wrap this in method somewhere - too much duplication
    }

    return ctx.prisma.image({ id });
  }
};
