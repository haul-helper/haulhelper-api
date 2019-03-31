import { getUserId, Context } from "../../utils";

export const HaulQueries = {
  /**
   * Returns an array of Haul object types
   *
   * @param ctx - request context allows access to http headers
   */
  hauls(ctx: Context) {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
      // TODO: Wrap this in method somewhere - too much duplication
    }

    return ctx.prisma.hauls;
  },

  /**
   * Returns a Haul object type by it's primary ID
   *
   * @param id - the ID of the Haul
   * @param ctx - request context allows access to http headers
   */
  haul(parent, { id }, ctx: Context) {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
      // TODO: Wrap this in method somewhere - too much duplication
    }
    const where = {
      id: id
    };

    return ctx.prisma.haul(where);
  }
};
