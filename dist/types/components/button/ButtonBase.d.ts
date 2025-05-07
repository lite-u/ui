type ButtonBaseProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
    type?: 'button' | 'reset' | 'submit';
};
export declare const ButtonBase: React.FC<ButtonBaseProps>;
export default ButtonBase;
