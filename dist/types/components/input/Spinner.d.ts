import React from 'react';
type SpinnerControlProps = {
    intervalTime?: number;
    onStep: (dir: 'up' | 'down') => void;
    disabled?: boolean;
};
export declare const SpinnerControl: React.FC<SpinnerControlProps>;
export {};
