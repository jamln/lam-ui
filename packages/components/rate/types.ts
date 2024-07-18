import { ExtractPropTypes, DefineComponent, AnchorHTMLAttributes } from "vue"

export const rateProps = {
  score: {
    type: Number
  },
  half: {
    type: Boolean
  }
}

export type RateProps = ExtractPropTypes<typeof rateProps>

export type RateComponent = DefineComponent<
  Omit<AnchorHTMLAttributes, keyof RateProps>, RateProps 
>