export type ProductLine = 'essential' | 'classic' | 'atelier';
export type ProductForm = 'rectangular' | 'square' | 'tall' | 'flat' | 'round';
export type ProductSize = 'S' | 'M' | 'L' | 'XL';
export type OrganizerType = 'counter' | 'drawer' | 'shelf' | 'pullout';

export interface Product {
  id: string;
  name: string;
  line: ProductLine;
  form: ProductForm;
  size: ProductSize;
  price: number;
  image: string;
  description: string;
  features: string[];
  isSmart?: boolean;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
}

export interface CartItem {
  productId: string;
  quantity: number;
  configuration?: {
    line: ProductLine;
    form: ProductForm;
    size: ProductSize;
    isSmart: boolean;
  };
}

export interface ConfiguratorState {
  line: ProductLine;
  form: ProductForm;
  size: ProductSize;
  isSmart: boolean;
  quantity: number;
  organizer?: OrganizerType;
  totalPrice: number;
}