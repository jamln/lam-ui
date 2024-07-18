import { ExtractPropTypes, DefineComponent, AnchorHTMLAttributes, ButtonHTMLAttributes, PropType } from 'vue'

// type UnionArray<T extends unknown[]> = T extends [infer S, ...infer R]
//   ? T[number]
//   : unknown

export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger'] as const
export const ButtonSize = ['large', 'medium', 'small'] as const;
export const buttonProps = {
  type: {
    type: String as PropType<typeof ButtonType[number]>,
    default: 'default'
    //  values: ButtonType
  },
  size: {
    type: String as PropType<typeof ButtonSize[number]>,
    values: ButtonSize
  },
  icon: {
    type: String
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export type ButtonComponent = DefineComponent<
  Omit<ButtonHTMLAttributes | AnchorHTMLAttributes, keyof ButtonProps> & ButtonProps
>