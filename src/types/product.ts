export interface CartItem {
  productId: string
  quantity: number
  configuration: ProductConfiguration
}

export interface ProductConfiguration {
  line: ProductLine
  form: string
  size: string
  isSmart: boolean
}

export type ProductLine = 'essential' | 'classic' | 'atelier'

export interface Product {
  id: string
  name: string
  line: ProductLine
  form: string
  size: string
  price: number
  image: string
  description: string
  features: string[]
  dimensions?: {
    width: number
    height: number
    depth: number
  }
  isSmart?: boolean
}

export interface ConfiguratorState {
  line: ProductLine
  form: string
  size: string
  isSmart: boolean
  quantity: number
  organizer?: string
  totalPrice: number
}
