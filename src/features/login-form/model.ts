import { createEffect, createEvent, createStore, sample } from 'effector';
import { FormEvent } from 'react';

export type LabelType = {
  [key: string]: string;
};

export type FieldUpdateType = {
  name: string;
  value: string;
};

export const $form = createStore<LabelType>({});

export const formSubmitted = createEvent<FormEvent<HTMLFormElement>>();
export const fieldUpdate = createEvent<LabelType>();

export const sendFormFx = createEffect(() => {
  console.log('SEND');
  return new Promise((rs) => setTimeout(rs, 1000, `Signed in`));
});

$form.on(fieldUpdate, (form, { key, value }: LabelType) => ({
  ...form,
  [key]: value,
}));

sample({
  clock: formSubmitted,
  source: $form,
  target: sendFormFx,
});

formSubmitted.watch((e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
});
