import { SlotSymbol } from '../../types/slot';

const BASE = import.meta.env.BASE_URL;

export const symbols: SlotSymbol[] = [
  {
    id: 'apple',
    name: 'Apple',
    image: `${BASE}assets/symbols/apple.png`,
    type: 'regular',
    weight: 1,
  },
  {
    id: 'cake',
    name: 'Cake',
    image: `${BASE}assets/symbols/cake.png`,
    type: 'regular',
    weight: 1,
  },
  {
    id: 'candy-cane',
    name: 'Candy-cane',
    image: `${BASE}assets/symbols/candy-cane.png`,
    type: 'regular',
    weight: 1,
  },
  {
    id: 'candy',
    name: 'Candy',
    image: `${BASE}assets/symbols/candy.png`,
    type: 'regular',
    weight: 1,
  },
  {
    id: 'croissant',
    name: 'Croissant',
    image: `${BASE}assets/symbols/croissant.png`,
    type: 'regular',
    weight: 1,
  },
  {
    id: 'diamond',
    name: 'Diamond',
    image: `${BASE}assets/symbols/diamond.png`,
    type: 'bonus',
    weight: 1,
  },
  {
    id: 'dollar',
    name: 'Dollar',
    image: `${BASE}assets/symbols/dollar.png`,
    type: 'wild',
    weight: 1,
  },
  {
    id: 'donut',
    name: 'Donut',
    image: `${BASE}assets/symbols/donut.png`,
    type: 'regular',
    weight: 1,
  },
  {
    id: 'lollipop',
    name: 'Lollipop',
    image: `${BASE}assets/symbols/lollipop.png`,
    type: 'regular',
    weight: 1,
  },
  {
    id: 'muffin',
    name: 'Muffin',
    image: `${BASE}assets/symbols/muffin.png`,
    type: 'regular',
    weight: 1,
  },
  {
    id: 'sweet',
    name: 'Sweet',
    image: `${BASE}assets/symbols/sweet.png`,
    type: 'regular',
    weight: 1,
  },
];
