import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { Context } from "../../utils";
import { UniqueConstraintViolationError } from "../../errorhandling/customerrors";

export const Auth = {
  /**
   * signup
   * description: register mutation for signing up users
   * params: email => String
   * params: password => String
   * params: username => String
   * returns: AuthPayload object type
   */
  async signup(parent, { email, password, username }, ctx: Context) {
    try {
      // make sure account doesn't exist before attempting
      // to create a new account
      const userExists = await ctx.prisma.$exists.user({ email: email });
      if (userExists) {
        throw new UniqueConstraintViolationError();
      }

      // hash the password and create the account
      password = await bcrypt.hash(password, 10);
      const user = await ctx.prisma.createUser({
        email: email,
        password: password,
        username: username,
        role: "USER"
      });

      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      };
    } catch (err) {
      throw err;
    }
  },

  /**
   * login
   * description: login mutation for existing users
   * params: email => String
   * params: password => String
   * returns: AuthPayload object type
   */
  async login(parent, { email, password }, ctx: Context) {
    try {
      // make sure the user exists first
      const user = await ctx.prisma.user({ email: email });
      if (!user) {
        throw new Error(`No such user found for email: ${email}`);
      }

      // then validate their credentials
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Invalid password");
      }

      // everything checks out, send them back some data
      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      };
    } catch (err) {
      throw err;
    }
  }
};
