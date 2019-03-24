import { getUserId, Context } from "../../utils";

export const HaulMutations = {
  async createHaul(parent, args, ctx: Context, info) {
    const userId = getUserId(ctx);
    return ctx.prisma.createHaul({
      weight: args.weight,
      user: {
        connect: { id: userId }
      },
      items: {
        connect: [
          {
            id: args.id
          }
        ]
      }
    });
  },
  async updateHaul(parent, args, ctx: Context, info) {
    const userId = getUserId(ctx);
    const haulExists = await ctx.prisma.$exists.haul({
      id: args.id,
      user: { id: userId }
    });
    if (!haulExists) {
      throw new Error(`Haul not found or you're not the owner`);
    }
    return ctx.prisma.updateHaul({
      where: { id: args.id },
      data: {
        weight: args.weight,
        items: {
          updateMany: [
            {
              where: {
                id: args.items.id
              },
              data: {
                ...args.items
              }
            }
          ]
        }
      }
    });
  },
  async deleteHaul(parent, args, ctx: Context, info) {
    const userId = getUserId(ctx);
    const haulExists = await ctx.prisma.$exists.haul({
      id: args.id,
      user: { id: userId }
    });
    if (!haulExists) {
      throw new Error(`Haul not found or you're not the author`);
    }
    return ctx.prisma.deleteHaul({ id: args.id });
  }
};
