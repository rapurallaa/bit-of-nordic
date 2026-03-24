export type Category = 'watches' | 'coins' | 'glass' | 'jewellery';

export interface Item {
  id: string;
  name: string;
  category: Category;
  era: string;
  origin: string;
  price?: number;
  condition?: string;
  featured: boolean;
  sold: boolean;
  image?: string;
  images?: string[];
  description?: string;
  provenance?: string;
}

export interface CategoryMeta {
  label: string;
  description: string;
  plural: string;
}
