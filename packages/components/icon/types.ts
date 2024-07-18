import { AnchorHTMLAttributes, DefineComponent, ExtractPropTypes } from 'vue'
export const iconProps = {
  name: {
    type: String
  },
  color: {
    type: String
  },
  size: {
    type: Number
  }

}
export type IconProps = ExtractPropTypes<typeof iconProps>

export type IconComponent = DefineComponent<
  Omit<AnchorHTMLAttributes, keyof IconProps> & IconProps
>