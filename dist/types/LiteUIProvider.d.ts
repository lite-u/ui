import { ThemeType } from './themes/type';
/**
 * List of LiteUIContext
 * @default []
 */
export declare const LiteUIContext: import("react").Context<{
    theme: ThemeType;
    setTheme: (mode: "lite") => void;
}>;
declare const LiteUIProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useLiteUIContext: () => {
    theme: ThemeType;
    setTheme: (mode: "lite") => void;
};
export default LiteUIProvider;
