// Code generated by Prisma (prisma@1.29.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `
  type AggregateHaul {
    count: Int!
  }

  type AggregateImage {
    count: Int!
  }

  type AggregateItem {
    count: Int!
  }

  type AggregateTag {
    count: Int!
  }

  type AggregateUser {
    count: Int!
  }

  type BatchPayload {
    count: Long!
  }

  enum ClothingType {
    ACCESSORIES
    UPPERBODY
    LOWERBODY
    SHOES
    HEADWEAR
    ARMWEAR
  }

  type Haul {
    id: ID!
    item(
      where: ItemWhereInput
      orderBy: ItemOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Item!]
  }

  type HaulConnection {
    pageInfo: PageInfo!
    edges: [HaulEdge]!
    aggregate: AggregateHaul!
  }

  input HaulCreateInput {
    item: ItemCreateManyInput
  }

  input HaulCreateManyInput {
    create: [HaulCreateInput!]
    connect: [HaulWhereUniqueInput!]
  }

  type HaulEdge {
    node: Haul!
    cursor: String!
  }

  enum HaulOrderByInput {
    id_ASC
    id_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type HaulPreviousValues {
    id: ID!
  }

  input HaulScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    AND: [HaulScalarWhereInput!]
    OR: [HaulScalarWhereInput!]
    NOT: [HaulScalarWhereInput!]
  }

  type HaulSubscriptionPayload {
    mutation: MutationType!
    node: Haul
    updatedFields: [String!]
    previousValues: HaulPreviousValues
  }

  input HaulSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: HaulWhereInput
    AND: [HaulSubscriptionWhereInput!]
    OR: [HaulSubscriptionWhereInput!]
    NOT: [HaulSubscriptionWhereInput!]
  }

  input HaulUpdateDataInput {
    item: ItemUpdateManyInput
  }

  input HaulUpdateInput {
    item: ItemUpdateManyInput
  }

  input HaulUpdateManyInput {
    create: [HaulCreateInput!]
    update: [HaulUpdateWithWhereUniqueNestedInput!]
    upsert: [HaulUpsertWithWhereUniqueNestedInput!]
    delete: [HaulWhereUniqueInput!]
    connect: [HaulWhereUniqueInput!]
    set: [HaulWhereUniqueInput!]
    disconnect: [HaulWhereUniqueInput!]
    deleteMany: [HaulScalarWhereInput!]
  }

  input HaulUpdateWithWhereUniqueNestedInput {
    where: HaulWhereUniqueInput!
    data: HaulUpdateDataInput!
  }

  input HaulUpsertWithWhereUniqueNestedInput {
    where: HaulWhereUniqueInput!
    update: HaulUpdateDataInput!
    create: HaulCreateInput!
  }

  input HaulWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    item_every: ItemWhereInput
    item_some: ItemWhereInput
    item_none: ItemWhereInput
    AND: [HaulWhereInput!]
    OR: [HaulWhereInput!]
    NOT: [HaulWhereInput!]
  }

  input HaulWhereUniqueInput {
    id: ID
  }

  type Image {
    id: ID!
    imageUrl: String!
    imageAltTitle: String!
  }

  type ImageConnection {
    pageInfo: PageInfo!
    edges: [ImageEdge]!
    aggregate: AggregateImage!
  }

  input ImageCreateInput {
    imageUrl: String!
    imageAltTitle: String!
  }

  input ImageCreateManyInput {
    create: [ImageCreateInput!]
    connect: [ImageWhereUniqueInput!]
  }

  type ImageEdge {
    node: Image!
    cursor: String!
  }

  enum ImageOrderByInput {
    id_ASC
    id_DESC
    imageUrl_ASC
    imageUrl_DESC
    imageAltTitle_ASC
    imageAltTitle_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type ImagePreviousValues {
    id: ID!
    imageUrl: String!
    imageAltTitle: String!
  }

  input ImageScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    imageUrl: String
    imageUrl_not: String
    imageUrl_in: [String!]
    imageUrl_not_in: [String!]
    imageUrl_lt: String
    imageUrl_lte: String
    imageUrl_gt: String
    imageUrl_gte: String
    imageUrl_contains: String
    imageUrl_not_contains: String
    imageUrl_starts_with: String
    imageUrl_not_starts_with: String
    imageUrl_ends_with: String
    imageUrl_not_ends_with: String
    imageAltTitle: String
    imageAltTitle_not: String
    imageAltTitle_in: [String!]
    imageAltTitle_not_in: [String!]
    imageAltTitle_lt: String
    imageAltTitle_lte: String
    imageAltTitle_gt: String
    imageAltTitle_gte: String
    imageAltTitle_contains: String
    imageAltTitle_not_contains: String
    imageAltTitle_starts_with: String
    imageAltTitle_not_starts_with: String
    imageAltTitle_ends_with: String
    imageAltTitle_not_ends_with: String
    AND: [ImageScalarWhereInput!]
    OR: [ImageScalarWhereInput!]
    NOT: [ImageScalarWhereInput!]
  }

  type ImageSubscriptionPayload {
    mutation: MutationType!
    node: Image
    updatedFields: [String!]
    previousValues: ImagePreviousValues
  }

  input ImageSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: ImageWhereInput
    AND: [ImageSubscriptionWhereInput!]
    OR: [ImageSubscriptionWhereInput!]
    NOT: [ImageSubscriptionWhereInput!]
  }

  input ImageUpdateDataInput {
    imageUrl: String
    imageAltTitle: String
  }

  input ImageUpdateInput {
    imageUrl: String
    imageAltTitle: String
  }

  input ImageUpdateManyDataInput {
    imageUrl: String
    imageAltTitle: String
  }

  input ImageUpdateManyInput {
    create: [ImageCreateInput!]
    update: [ImageUpdateWithWhereUniqueNestedInput!]
    upsert: [ImageUpsertWithWhereUniqueNestedInput!]
    delete: [ImageWhereUniqueInput!]
    connect: [ImageWhereUniqueInput!]
    set: [ImageWhereUniqueInput!]
    disconnect: [ImageWhereUniqueInput!]
    deleteMany: [ImageScalarWhereInput!]
    updateMany: [ImageUpdateManyWithWhereNestedInput!]
  }

  input ImageUpdateManyMutationInput {
    imageUrl: String
    imageAltTitle: String
  }

  input ImageUpdateManyWithWhereNestedInput {
    where: ImageScalarWhereInput!
    data: ImageUpdateManyDataInput!
  }

  input ImageUpdateWithWhereUniqueNestedInput {
    where: ImageWhereUniqueInput!
    data: ImageUpdateDataInput!
  }

  input ImageUpsertWithWhereUniqueNestedInput {
    where: ImageWhereUniqueInput!
    update: ImageUpdateDataInput!
    create: ImageCreateInput!
  }

  input ImageWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    imageUrl: String
    imageUrl_not: String
    imageUrl_in: [String!]
    imageUrl_not_in: [String!]
    imageUrl_lt: String
    imageUrl_lte: String
    imageUrl_gt: String
    imageUrl_gte: String
    imageUrl_contains: String
    imageUrl_not_contains: String
    imageUrl_starts_with: String
    imageUrl_not_starts_with: String
    imageUrl_ends_with: String
    imageUrl_not_ends_with: String
    imageAltTitle: String
    imageAltTitle_not: String
    imageAltTitle_in: [String!]
    imageAltTitle_not_in: [String!]
    imageAltTitle_lt: String
    imageAltTitle_lte: String
    imageAltTitle_gt: String
    imageAltTitle_gte: String
    imageAltTitle_contains: String
    imageAltTitle_not_contains: String
    imageAltTitle_starts_with: String
    imageAltTitle_not_starts_with: String
    imageAltTitle_ends_with: String
    imageAltTitle_not_ends_with: String
    AND: [ImageWhereInput!]
    OR: [ImageWhereInput!]
    NOT: [ImageWhereInput!]
  }

  input ImageWhereUniqueInput {
    id: ID
  }

  type Item {
    id: ID!
    name: String!
    brand: String!
    clothingType: ClothingType!
    wtc: String!
    price: Float!
    tags(
      where: TagWhereInput
      orderBy: TagOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Tag!]
    images(
      where: ImageWhereInput
      orderBy: ImageOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Image!]
    rating: String!
    greenLightVotes: Int
    redLightVots: Int
    deadLinkVotes: Int
  }

  type ItemConnection {
    pageInfo: PageInfo!
    edges: [ItemEdge]!
    aggregate: AggregateItem!
  }

  input ItemCreateInput {
    name: String!
    brand: String!
    clothingType: ClothingType!
    wtc: String!
    price: Float!
    tags: TagCreateManyInput
    images: ImageCreateManyInput
    rating: String!
    greenLightVotes: Int
    redLightVots: Int
    deadLinkVotes: Int
  }

  input ItemCreateManyInput {
    create: [ItemCreateInput!]
    connect: [ItemWhereUniqueInput!]
  }

  type ItemEdge {
    node: Item!
    cursor: String!
  }

  enum ItemOrderByInput {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    brand_ASC
    brand_DESC
    clothingType_ASC
    clothingType_DESC
    wtc_ASC
    wtc_DESC
    price_ASC
    price_DESC
    rating_ASC
    rating_DESC
    greenLightVotes_ASC
    greenLightVotes_DESC
    redLightVots_ASC
    redLightVots_DESC
    deadLinkVotes_ASC
    deadLinkVotes_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type ItemPreviousValues {
    id: ID!
    name: String!
    brand: String!
    clothingType: ClothingType!
    wtc: String!
    price: Float!
    rating: String!
    greenLightVotes: Int
    redLightVots: Int
    deadLinkVotes: Int
  }

  input ItemScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    brand: String
    brand_not: String
    brand_in: [String!]
    brand_not_in: [String!]
    brand_lt: String
    brand_lte: String
    brand_gt: String
    brand_gte: String
    brand_contains: String
    brand_not_contains: String
    brand_starts_with: String
    brand_not_starts_with: String
    brand_ends_with: String
    brand_not_ends_with: String
    clothingType: ClothingType
    clothingType_not: ClothingType
    clothingType_in: [ClothingType!]
    clothingType_not_in: [ClothingType!]
    wtc: String
    wtc_not: String
    wtc_in: [String!]
    wtc_not_in: [String!]
    wtc_lt: String
    wtc_lte: String
    wtc_gt: String
    wtc_gte: String
    wtc_contains: String
    wtc_not_contains: String
    wtc_starts_with: String
    wtc_not_starts_with: String
    wtc_ends_with: String
    wtc_not_ends_with: String
    price: Float
    price_not: Float
    price_in: [Float!]
    price_not_in: [Float!]
    price_lt: Float
    price_lte: Float
    price_gt: Float
    price_gte: Float
    rating: String
    rating_not: String
    rating_in: [String!]
    rating_not_in: [String!]
    rating_lt: String
    rating_lte: String
    rating_gt: String
    rating_gte: String
    rating_contains: String
    rating_not_contains: String
    rating_starts_with: String
    rating_not_starts_with: String
    rating_ends_with: String
    rating_not_ends_with: String
    greenLightVotes: Int
    greenLightVotes_not: Int
    greenLightVotes_in: [Int!]
    greenLightVotes_not_in: [Int!]
    greenLightVotes_lt: Int
    greenLightVotes_lte: Int
    greenLightVotes_gt: Int
    greenLightVotes_gte: Int
    redLightVots: Int
    redLightVots_not: Int
    redLightVots_in: [Int!]
    redLightVots_not_in: [Int!]
    redLightVots_lt: Int
    redLightVots_lte: Int
    redLightVots_gt: Int
    redLightVots_gte: Int
    deadLinkVotes: Int
    deadLinkVotes_not: Int
    deadLinkVotes_in: [Int!]
    deadLinkVotes_not_in: [Int!]
    deadLinkVotes_lt: Int
    deadLinkVotes_lte: Int
    deadLinkVotes_gt: Int
    deadLinkVotes_gte: Int
    AND: [ItemScalarWhereInput!]
    OR: [ItemScalarWhereInput!]
    NOT: [ItemScalarWhereInput!]
  }

  type ItemSubscriptionPayload {
    mutation: MutationType!
    node: Item
    updatedFields: [String!]
    previousValues: ItemPreviousValues
  }

  input ItemSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: ItemWhereInput
    AND: [ItemSubscriptionWhereInput!]
    OR: [ItemSubscriptionWhereInput!]
    NOT: [ItemSubscriptionWhereInput!]
  }

  input ItemUpdateDataInput {
    name: String
    brand: String
    clothingType: ClothingType
    wtc: String
    price: Float
    tags: TagUpdateManyInput
    images: ImageUpdateManyInput
    rating: String
    greenLightVotes: Int
    redLightVots: Int
    deadLinkVotes: Int
  }

  input ItemUpdateInput {
    name: String
    brand: String
    clothingType: ClothingType
    wtc: String
    price: Float
    tags: TagUpdateManyInput
    images: ImageUpdateManyInput
    rating: String
    greenLightVotes: Int
    redLightVots: Int
    deadLinkVotes: Int
  }

  input ItemUpdateManyDataInput {
    name: String
    brand: String
    clothingType: ClothingType
    wtc: String
    price: Float
    rating: String
    greenLightVotes: Int
    redLightVots: Int
    deadLinkVotes: Int
  }

  input ItemUpdateManyInput {
    create: [ItemCreateInput!]
    update: [ItemUpdateWithWhereUniqueNestedInput!]
    upsert: [ItemUpsertWithWhereUniqueNestedInput!]
    delete: [ItemWhereUniqueInput!]
    connect: [ItemWhereUniqueInput!]
    set: [ItemWhereUniqueInput!]
    disconnect: [ItemWhereUniqueInput!]
    deleteMany: [ItemScalarWhereInput!]
    updateMany: [ItemUpdateManyWithWhereNestedInput!]
  }

  input ItemUpdateManyMutationInput {
    name: String
    brand: String
    clothingType: ClothingType
    wtc: String
    price: Float
    rating: String
    greenLightVotes: Int
    redLightVots: Int
    deadLinkVotes: Int
  }

  input ItemUpdateManyWithWhereNestedInput {
    where: ItemScalarWhereInput!
    data: ItemUpdateManyDataInput!
  }

  input ItemUpdateWithWhereUniqueNestedInput {
    where: ItemWhereUniqueInput!
    data: ItemUpdateDataInput!
  }

  input ItemUpsertWithWhereUniqueNestedInput {
    where: ItemWhereUniqueInput!
    update: ItemUpdateDataInput!
    create: ItemCreateInput!
  }

  input ItemWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    brand: String
    brand_not: String
    brand_in: [String!]
    brand_not_in: [String!]
    brand_lt: String
    brand_lte: String
    brand_gt: String
    brand_gte: String
    brand_contains: String
    brand_not_contains: String
    brand_starts_with: String
    brand_not_starts_with: String
    brand_ends_with: String
    brand_not_ends_with: String
    clothingType: ClothingType
    clothingType_not: ClothingType
    clothingType_in: [ClothingType!]
    clothingType_not_in: [ClothingType!]
    wtc: String
    wtc_not: String
    wtc_in: [String!]
    wtc_not_in: [String!]
    wtc_lt: String
    wtc_lte: String
    wtc_gt: String
    wtc_gte: String
    wtc_contains: String
    wtc_not_contains: String
    wtc_starts_with: String
    wtc_not_starts_with: String
    wtc_ends_with: String
    wtc_not_ends_with: String
    price: Float
    price_not: Float
    price_in: [Float!]
    price_not_in: [Float!]
    price_lt: Float
    price_lte: Float
    price_gt: Float
    price_gte: Float
    tags_every: TagWhereInput
    tags_some: TagWhereInput
    tags_none: TagWhereInput
    images_every: ImageWhereInput
    images_some: ImageWhereInput
    images_none: ImageWhereInput
    rating: String
    rating_not: String
    rating_in: [String!]
    rating_not_in: [String!]
    rating_lt: String
    rating_lte: String
    rating_gt: String
    rating_gte: String
    rating_contains: String
    rating_not_contains: String
    rating_starts_with: String
    rating_not_starts_with: String
    rating_ends_with: String
    rating_not_ends_with: String
    greenLightVotes: Int
    greenLightVotes_not: Int
    greenLightVotes_in: [Int!]
    greenLightVotes_not_in: [Int!]
    greenLightVotes_lt: Int
    greenLightVotes_lte: Int
    greenLightVotes_gt: Int
    greenLightVotes_gte: Int
    redLightVots: Int
    redLightVots_not: Int
    redLightVots_in: [Int!]
    redLightVots_not_in: [Int!]
    redLightVots_lt: Int
    redLightVots_lte: Int
    redLightVots_gt: Int
    redLightVots_gte: Int
    deadLinkVotes: Int
    deadLinkVotes_not: Int
    deadLinkVotes_in: [Int!]
    deadLinkVotes_not_in: [Int!]
    deadLinkVotes_lt: Int
    deadLinkVotes_lte: Int
    deadLinkVotes_gt: Int
    deadLinkVotes_gte: Int
    AND: [ItemWhereInput!]
    OR: [ItemWhereInput!]
    NOT: [ItemWhereInput!]
  }

  input ItemWhereUniqueInput {
    id: ID
  }

  scalar Long

  type Mutation {
    createHaul(data: HaulCreateInput!): Haul!
    updateHaul(data: HaulUpdateInput!, where: HaulWhereUniqueInput!): Haul
    upsertHaul(
      where: HaulWhereUniqueInput!
      create: HaulCreateInput!
      update: HaulUpdateInput!
    ): Haul!
    deleteHaul(where: HaulWhereUniqueInput!): Haul
    deleteManyHauls(where: HaulWhereInput): BatchPayload!
    createImage(data: ImageCreateInput!): Image!
    updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
    updateManyImages(
      data: ImageUpdateManyMutationInput!
      where: ImageWhereInput
    ): BatchPayload!
    upsertImage(
      where: ImageWhereUniqueInput!
      create: ImageCreateInput!
      update: ImageUpdateInput!
    ): Image!
    deleteImage(where: ImageWhereUniqueInput!): Image
    deleteManyImages(where: ImageWhereInput): BatchPayload!
    createItem(data: ItemCreateInput!): Item!
    updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
    updateManyItems(
      data: ItemUpdateManyMutationInput!
      where: ItemWhereInput
    ): BatchPayload!
    upsertItem(
      where: ItemWhereUniqueInput!
      create: ItemCreateInput!
      update: ItemUpdateInput!
    ): Item!
    deleteItem(where: ItemWhereUniqueInput!): Item
    deleteManyItems(where: ItemWhereInput): BatchPayload!
    createTag(data: TagCreateInput!): Tag!
    updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
    updateManyTags(
      data: TagUpdateManyMutationInput!
      where: TagWhereInput
    ): BatchPayload!
    upsertTag(
      where: TagWhereUniqueInput!
      create: TagCreateInput!
      update: TagUpdateInput!
    ): Tag!
    deleteTag(where: TagWhereUniqueInput!): Tag
    deleteManyTags(where: TagWhereInput): BatchPayload!
    createUser(data: UserCreateInput!): User!
    updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
    updateManyUsers(
      data: UserUpdateManyMutationInput!
      where: UserWhereInput
    ): BatchPayload!
    upsertUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User!
    deleteUser(where: UserWhereUniqueInput!): User
    deleteManyUsers(where: UserWhereInput): BatchPayload!
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }

  interface Node {
    id: ID!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type Query {
    haul(where: HaulWhereUniqueInput!): Haul
    hauls(
      where: HaulWhereInput
      orderBy: HaulOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Haul]!
    haulsConnection(
      where: HaulWhereInput
      orderBy: HaulOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): HaulConnection!
    image(where: ImageWhereUniqueInput!): Image
    images(
      where: ImageWhereInput
      orderBy: ImageOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Image]!
    imagesConnection(
      where: ImageWhereInput
      orderBy: ImageOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): ImageConnection!
    item(where: ItemWhereUniqueInput!): Item
    items(
      where: ItemWhereInput
      orderBy: ItemOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Item]!
    itemsConnection(
      where: ItemWhereInput
      orderBy: ItemOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): ItemConnection!
    tag(where: TagWhereUniqueInput!): Tag
    tags(
      where: TagWhereInput
      orderBy: TagOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Tag]!
    tagsConnection(
      where: TagWhereInput
      orderBy: TagOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): TagConnection!
    user(where: UserWhereUniqueInput!): User
    users(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User]!
    usersConnection(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): UserConnection!
    node(id: ID!): Node
  }

  type Subscription {
    haul(where: HaulSubscriptionWhereInput): HaulSubscriptionPayload
    image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
    item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
    tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
    user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  }

  type Tag {
    id: ID!
    tagName: String!
  }

  type TagConnection {
    pageInfo: PageInfo!
    edges: [TagEdge]!
    aggregate: AggregateTag!
  }

  input TagCreateInput {
    tagName: String!
  }

  input TagCreateManyInput {
    create: [TagCreateInput!]
    connect: [TagWhereUniqueInput!]
  }

  type TagEdge {
    node: Tag!
    cursor: String!
  }

  enum TagOrderByInput {
    id_ASC
    id_DESC
    tagName_ASC
    tagName_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type TagPreviousValues {
    id: ID!
    tagName: String!
  }

  input TagScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    tagName: String
    tagName_not: String
    tagName_in: [String!]
    tagName_not_in: [String!]
    tagName_lt: String
    tagName_lte: String
    tagName_gt: String
    tagName_gte: String
    tagName_contains: String
    tagName_not_contains: String
    tagName_starts_with: String
    tagName_not_starts_with: String
    tagName_ends_with: String
    tagName_not_ends_with: String
    AND: [TagScalarWhereInput!]
    OR: [TagScalarWhereInput!]
    NOT: [TagScalarWhereInput!]
  }

  type TagSubscriptionPayload {
    mutation: MutationType!
    node: Tag
    updatedFields: [String!]
    previousValues: TagPreviousValues
  }

  input TagSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: TagWhereInput
    AND: [TagSubscriptionWhereInput!]
    OR: [TagSubscriptionWhereInput!]
    NOT: [TagSubscriptionWhereInput!]
  }

  input TagUpdateDataInput {
    tagName: String
  }

  input TagUpdateInput {
    tagName: String
  }

  input TagUpdateManyDataInput {
    tagName: String
  }

  input TagUpdateManyInput {
    create: [TagCreateInput!]
    update: [TagUpdateWithWhereUniqueNestedInput!]
    upsert: [TagUpsertWithWhereUniqueNestedInput!]
    delete: [TagWhereUniqueInput!]
    connect: [TagWhereUniqueInput!]
    set: [TagWhereUniqueInput!]
    disconnect: [TagWhereUniqueInput!]
    deleteMany: [TagScalarWhereInput!]
    updateMany: [TagUpdateManyWithWhereNestedInput!]
  }

  input TagUpdateManyMutationInput {
    tagName: String
  }

  input TagUpdateManyWithWhereNestedInput {
    where: TagScalarWhereInput!
    data: TagUpdateManyDataInput!
  }

  input TagUpdateWithWhereUniqueNestedInput {
    where: TagWhereUniqueInput!
    data: TagUpdateDataInput!
  }

  input TagUpsertWithWhereUniqueNestedInput {
    where: TagWhereUniqueInput!
    update: TagUpdateDataInput!
    create: TagCreateInput!
  }

  input TagWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    tagName: String
    tagName_not: String
    tagName_in: [String!]
    tagName_not_in: [String!]
    tagName_lt: String
    tagName_lte: String
    tagName_gt: String
    tagName_gte: String
    tagName_contains: String
    tagName_not_contains: String
    tagName_starts_with: String
    tagName_not_starts_with: String
    tagName_ends_with: String
    tagName_not_ends_with: String
    AND: [TagWhereInput!]
    OR: [TagWhereInput!]
    NOT: [TagWhereInput!]
  }

  input TagWhereUniqueInput {
    id: ID
  }

  type User {
    id: ID!
    username: String!
    password: String!
    specialCode: String!
    email: String!
    role: String!
    hauls(
      where: HaulWhereInput
      orderBy: HaulOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Haul!]
  }

  type UserConnection {
    pageInfo: PageInfo!
    edges: [UserEdge]!
    aggregate: AggregateUser!
  }

  input UserCreateInput {
    username: String!
    password: String!
    specialCode: String!
    email: String!
    role: String!
    hauls: HaulCreateManyInput
  }

  type UserEdge {
    node: User!
    cursor: String!
  }

  enum UserOrderByInput {
    id_ASC
    id_DESC
    username_ASC
    username_DESC
    password_ASC
    password_DESC
    specialCode_ASC
    specialCode_DESC
    email_ASC
    email_DESC
    role_ASC
    role_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type UserPreviousValues {
    id: ID!
    username: String!
    password: String!
    specialCode: String!
    email: String!
    role: String!
  }

  type UserSubscriptionPayload {
    mutation: MutationType!
    node: User
    updatedFields: [String!]
    previousValues: UserPreviousValues
  }

  input UserSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: UserWhereInput
    AND: [UserSubscriptionWhereInput!]
    OR: [UserSubscriptionWhereInput!]
    NOT: [UserSubscriptionWhereInput!]
  }

  input UserUpdateInput {
    username: String
    password: String
    specialCode: String
    email: String
    role: String
    hauls: HaulUpdateManyInput
  }

  input UserUpdateManyMutationInput {
    username: String
    password: String
    specialCode: String
    email: String
    role: String
  }

  input UserWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    username: String
    username_not: String
    username_in: [String!]
    username_not_in: [String!]
    username_lt: String
    username_lte: String
    username_gt: String
    username_gte: String
    username_contains: String
    username_not_contains: String
    username_starts_with: String
    username_not_starts_with: String
    username_ends_with: String
    username_not_ends_with: String
    password: String
    password_not: String
    password_in: [String!]
    password_not_in: [String!]
    password_lt: String
    password_lte: String
    password_gt: String
    password_gte: String
    password_contains: String
    password_not_contains: String
    password_starts_with: String
    password_not_starts_with: String
    password_ends_with: String
    password_not_ends_with: String
    specialCode: String
    specialCode_not: String
    specialCode_in: [String!]
    specialCode_not_in: [String!]
    specialCode_lt: String
    specialCode_lte: String
    specialCode_gt: String
    specialCode_gte: String
    specialCode_contains: String
    specialCode_not_contains: String
    specialCode_starts_with: String
    specialCode_not_starts_with: String
    specialCode_ends_with: String
    specialCode_not_ends_with: String
    email: String
    email_not: String
    email_in: [String!]
    email_not_in: [String!]
    email_lt: String
    email_lte: String
    email_gt: String
    email_gte: String
    email_contains: String
    email_not_contains: String
    email_starts_with: String
    email_not_starts_with: String
    email_ends_with: String
    email_not_ends_with: String
    role: String
    role_not: String
    role_in: [String!]
    role_not_in: [String!]
    role_lt: String
    role_lte: String
    role_gt: String
    role_gte: String
    role_contains: String
    role_not_contains: String
    role_starts_with: String
    role_not_starts_with: String
    role_ends_with: String
    role_not_ends_with: String
    hauls_every: HaulWhereInput
    hauls_some: HaulWhereInput
    hauls_none: HaulWhereInput
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
  }

  input UserWhereUniqueInput {
    id: ID
    email: String
  }
`;
