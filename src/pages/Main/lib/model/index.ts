import { createEvent, createStore } from "effector";

export const setAccount = createEvent();

export const $account = createStore(null).on(setAccount, (_, payload) => payload);
