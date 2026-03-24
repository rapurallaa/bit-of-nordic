export type Category = 'watches' | 'coins' | 'glass' | 'other';

export interface Item {
  id: string;
  name: string;
  category: Category;
  era: string;
  origin: string;
  description: string;
  price?: number;
  images: string[];
  featured?: boolean;
  sold?: boolean;
}
