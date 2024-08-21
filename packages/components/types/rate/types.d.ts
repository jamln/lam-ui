import { ExtractPropTypes, DefineComponent, AnchorHTMLAttributes } from "vue";
export declare const rateProps: {
    score: {
        type: NumberConstructor;
    };
    half: {
        type: BooleanConstructor;
    };
};
export type RateProps = ExtractPropTypes<typeof rateProps>;
export type RateComponent = DefineComponent<Omit<AnchorHTMLAttributes, keyof RateProps>, RateProps>;
