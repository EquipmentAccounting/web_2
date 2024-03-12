import { SelectItem } from '@/shared/types/select-item';
import { createEffect, createEvent, createStore, sample } from 'effector';

export const setActiveCategory = createEvent<SelectItem>();

export const $categories = createStore<SelectItem[]>([]);
export const $activeCategory = createStore<SelectItem | null>(null).on(
  setActiveCategory,
  (_, payload) => payload,
);

export const fetchCategoriesFx = createEffect(async () => {
  return new Promise<SelectItem[]>((resolve) => {
    setTimeout(() => {
      resolve(
        ['Все оборудование', 'Роутеры', 'Сервера'].map((category, i) => {
          return { label: category, id: i };
        }),
      );
    }, 500);
  });
});

sample({
  clock: fetchCategoriesFx.doneData,
  target: $categories,
});

sample({
  clock: fetchCategoriesFx.doneData,
  fn: (data: SelectItem[]) => data[0],
  target: $activeCategory,
});
