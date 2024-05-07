import { createEvent, createStore, sample } from "effector";

export const $authRole = createStore<"common" | "enterprise" | "educationalEstablishments">(
  "enterprise",
);

export const handleRole = createEvent<"common" | "enterprise" | "educationalEstablishments">();

sample({
  clock: handleRole,
  target: $authRole,
});
