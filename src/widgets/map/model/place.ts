import { Place } from '@/shared/types/place';
import { createEffect, createEvent, createStore, sample } from 'effector';

export const setPlace = createEvent<Place | null>();

export const $places = createStore<Place[]>([]);
export const $place = createStore<Place | null>(null).on(
  setPlace,
  (_, place) => place,
);

export const fetchPlacesFx = createEffect(async () => {
  return new Promise<Place[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          label: 'Room 1',
          mapUrl:
            'https://capstroi.com/wp-content/uploads/2017/09/%D0%BF%D0%BE%D0%B4%D1%8A%D0%B5%D0%B7%D0%B4-1-%D0%BE%D0%B1%D1%89%D0%B8%D0%B8%CC%86-%D0%BF%D0%BB%D0%B0%D0%BD-%D1%8D%D1%82%D0%B0%D0%B6%D0%B0.png',
        },
      ]);
    }, 100);
  });
});

sample({
  clock: fetchPlacesFx.doneData,
  target: $places,
});

sample({
  clock: fetchPlacesFx.doneData,
  fn: (places) => places[0],
  target: $place,
});
