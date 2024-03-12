import { Equipment } from '@/shared/types';
import { SelectItem } from '@/shared/types/select-item';
import { createEvent, createStore } from 'effector';

const items: SelectItem[] = [
  {
    label: 'Все',
    id: 1,
  },
  {
    label: 'Устаревающие',
    id: 2,
  },
  {
    label: 'Устаревшие',
    id: 3,
  },
];

export const setFilter = createEvent<SelectItem>();

export const $items = createStore<Equipment[]>([
  {
    id: 1,
    name: 'Router AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    category: 'Networking',
    releaseDate: '2022-01-01',
    sowftwareStartDate: '2022-02-01',
    sowftwareEndDate: '2025-12-31',
    manufacturer: 'https://www.google.co.uk/',
    place: 'Server Room',
    xCoord: 20,
    yCoord: 30,
    waveRadius: 50,
  },
  {
    id: 2,
    name: 'Server B',
    category: 'Server',
    releaseDate: '2021-05-15',
    sowftwareStartDate: '2021-06-01',
    sowftwareEndDate: '2024-03-12',
    manufacturer: 'https://www.google.co.uk/',
    place: 'Data Center',
    xCoord: 50,
    yCoord: 70,
  },
  {
    id: 3,
    name: 'Server C',
    category: 'Server',
    releaseDate: '2021-05-15',
    sowftwareStartDate: '2021-06-01',
    sowftwareEndDate: '2023-05-31',
    manufacturer: 'https://www.google.co.uk/',
    place: 'Data Center',
    xCoord: 50,
    yCoord: 70,
  },
]);

export const $filterSelect = createStore<SelectItem[]>(items);
export const $chosenFilter = createStore<SelectItem>(
  $filterSelect.getState()[0],
).on(setFilter, (_, filter) => filter);
