export enum PizzaCategory {
  SAVOURY = 'SAVOURY',
  SWEET = 'SWEET',
}

export interface IPizzaCategory {
  label: string
  category: PizzaCategory
}

export interface IPizzaFormSchema {
  title: string
  category: string
  small: string
  medium: string
  large: string
}
