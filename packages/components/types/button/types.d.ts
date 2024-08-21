import { ExtractPropTypes, DefineComponent, AnchorHTMLAttributes, ButtonHTMLAttributes, PropType } from 'vue';
export declare const ButtonType: readonly ["default", "primary", "success", "warning", "danger"];
export declare const ButtonSize: readonly ["large", "medium", "small"];
export declare const buttonProps: {
    readonly type: {
        readonly type: PropType<"default" | "primary" | "success" | "warning" | "danger">;
        readonly default: "default";
    };
    readonly size: {
        readonly type: PropType<"large" | "medium" | "small">;
        readonly values: readonly ["large", "medium", "small"];
    };
    readonly icon: {
        readonly type: StringConstructor;
    };
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonComponent = DefineComponent<Omit<ButtonHTMLAttributes | AnchorHTMLAttributes, keyof ButtonProps> & ButtonProps>;
