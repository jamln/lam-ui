import { AnchorHTMLAttributes, DefineComponent, ExtractPropTypes } from 'vue';
export declare const iconProps: {
    name: {
        type: StringConstructor;
    };
    color: {
        type: StringConstructor;
    };
    size: {
        type: NumberConstructor;
    };
};
export type IconProps = ExtractPropTypes<typeof iconProps>;
export type IconComponent = DefineComponent<Omit<AnchorHTMLAttributes, keyof IconProps> & IconProps>;
