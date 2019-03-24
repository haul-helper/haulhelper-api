import { HaulQueries } from "./Query/Haul";
import { Subscription } from "./Subscriptions/Subscription";
import { Auth } from "./Mutation/Auth";
import { HaulMutations } from "./Mutation/Haul";
import { User } from "./Query/User";

export default {
  Mutation: {
    ...Auth,
    ...HaulMutations
  },
  Query: {
    ...User,
    ...HaulQueries
  },
  Subscription
};
