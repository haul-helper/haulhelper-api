import { Query } from "./Query";
import { Subscription } from "./Subscription";
import { auth } from "./Mutation/auth";
import { User } from "./User";

export default {
  Query,
  Mutation: {
    ...auth
  },
  Subscription,
  User
};
