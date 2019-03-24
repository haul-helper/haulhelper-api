import { getUserId, Context } from "../../utils";

export const HaulQueries = {
  hauls(parent, args, ctx: Context) {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
    }

    return ctx.prisma.hauls;
  },

  haulById(parent, { id }, ctx: Context) {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
    }
    const where = {
      id: id
    };

    return ctx.prisma.haul(where);
  },

  items(parent, { id }, ctx: Context) {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
    }
    return ctx.prisma.items();
  },

  itemById(parent, { id }, ctx: Context) {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
    }

    return ctx.prisma.item({ id });
  },

  images(parent, { id }, ctx: Context) {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
    }

    return ctx.prisma.images();
  },

  image(parent, { id }, ctx: Context) {
    const userId = getUserId(ctx);

    if (userId == null) {
      // TODO: do something after error is thrown
    }

    return ctx.prisma.image({ id });
  }
};
