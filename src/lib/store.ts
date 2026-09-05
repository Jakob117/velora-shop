import { create } from 'zustand';
import { CartItem, ConfiguratorState, ProductLine } from '@/types/product';

const PRICES = {
  essential: { S: 9.99, M: 14.99, L: 19.99, XL: 24.99 },
  classic: { S: 24.99, M: 34.99, L: 44.99, XL: 54.99 },
  atelier: { S: 79.99, M: 99.99, L: 129.99, XL: 159.99 },
};

const SMART_ADDON = 49.99;

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    })),
  clearCart: () => set({ items: [] }),
  getTotal: () => {
    const items = get().items;
    return items.reduce((total, item) => {
      const config = item.configuration;
      if (!config) return total;
      const basePrice = PRICES[config.line as ProductLine][config.size];
      const smartPrice = config.isSmart ? SMART_ADDON : 0;
      return total + (basePrice + smartPrice) * item.quantity;
    }, 0);
  },
}));

interface ConfiguratorStore extends ConfiguratorState {
  setLine: (line: ProductLine) => void;
  setForm: (form: string) => void;
  setSize: (size: string) => void;
  setSmart: (smart: boolean) => void;
  setQuantity: (qty: number) => void;
  setOrganizer: (org?: string) => void;
  updatePrice: () => void;
  reset: () => void;
}

const DEFAULT_CONFIG: ConfiguratorState = {
  line: 'classic',
  form: 'rectangular',
  size: 'M',
  isSmart: false,
  quantity: 1,
  totalPrice: 34.99,
};

export const useConfigurator = create<ConfiguratorStore>((set) => ({
  ...DEFAULT_CONFIG,
  setLine: (line) => set({ line }),
  setForm: (form) => set({ form: form as any }),
  setSize: (size) => set({ size: size as any }),
  setSmart: (isSmart) => set({ isSmart }),
  setQuantity: (quantity) => set({ quantity }),
  setOrganizer: (organizer) => set({ organizer: organizer as any }),
  updatePrice: () =>
    set((state) => {
      const basePrice = PRICES[state.line][state.size];
      const smartPrice = state.isSmart ? SMART_ADDON : 0;
      return { totalPrice: (basePrice + smartPrice) * state.quantity };
    }),
  reset: () => set(DEFAULT_CONFIG),
}));
