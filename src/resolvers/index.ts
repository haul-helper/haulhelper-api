// Queries
import { HaulQueries } from "./Query/Haul";
import { User } from "./Query/User";
import { ImageQueries } from "./Query/Image";
import { ItemQueries } from "./Query/Item";
// Subscriptions
import { Subscription } from "./Subscriptions/Subscription";
//Mutations
import { Auth } from "./Mutation/auth";
import { HaulMutations } from "./Mutation/haul";

export default {
  Mutation: {
    ...Auth,
    ...HaulMutations
  },
  Query: {
    ...User,
    ...HaulQueries,
    ...ImageQueries,
    ...ItemQueries
  },
  Subscription
};
