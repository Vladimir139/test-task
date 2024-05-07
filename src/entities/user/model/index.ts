import { createEvent, createStore, sample } from "effector";

import {
  commonUser,
  educationalEstablishmentsUserInfo,
  enterpriseUser,
} from "@/shared/lib/constants/users";
import { IUser } from "@/shared/lib/types";

// ------------------------------------------------------------------------------------

export const setEditUser = createEvent<IUser>();
export const resetEditUser = createEvent();

export const $editUser = createStore<IUser | null>(commonUser)
  .on(setEditUser, (_, editedUser) => editedUser)
  .reset(resetEditUser);

export const editFormSubmitted = createEvent<IUser>();

// ------------------------------------------------------------------------------------

export const $isUserUpdated = createStore(false)
  .on(setEditUser, () => true)
  .reset(resetEditUser);

// ------------------------------------------------------------------------------------

export const $user = createStore<IUser | null>(commonUser);

sample({
  clock: editFormSubmitted,
  source: $editUser,
  target: $user,
});
