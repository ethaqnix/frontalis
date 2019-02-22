export type User = {
    name: String
};

export type Location = {
  adress: String,
};

export type Travel = {
  driver: User,
  locations: [Location],
  startAt: Date,
  endAt: Date,
  members: [User],
};

export type Group = {
  members: [User],
  isPrivate: Boolean,
  travels: [Travel],
};
