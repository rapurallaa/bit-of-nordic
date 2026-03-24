import { Item, Category, CategoryMeta } from './types';
import rawItems from '../data/items.json';

export const items: Item[] = rawItems.map((item) => ({
  ...item,
  category: item.category as Category,
  images: item.image ? [`/images/${item.image}`] : [],
}));

export const categoryMeta: Record<Category, CategoryMeta> = {
  watches: {
    label: 'Watches',
    plural: 'Watches',
    description: 'Mechanical timepieces from the golden age of Nordic and Swiss watchmaking.',
  },
  coins: {
    label: 'Coins',
    plural: 'Coins',
    description: 'Silver and copper coins spanning centuries of Nordic history.',
  },
  glass: {
    label: 'Design Glass',
    plural: 'Glass pieces',
    description: 'Iconic Scandinavian art glass from the mid-20th century.',
  },
  jewellery: {
    label: 'Jewellery',
    plural: 'Jewellery pieces',
    description: 'Handcrafted Nordic silver jewellery from the early and mid-20th century.',
  },
};

export function getItemsByCategory(category: Category): Item[] {
  return items.filter((i) => i.category === category);
}

export function getItemById(id: string): Item | undefined {
  return items.find((i) => i.id === id);
}

export function getFeaturedItems(limit = 4): Item[] {
  return items.filter((i) => i.featured && !i.sold).slice(0, limit);
}
