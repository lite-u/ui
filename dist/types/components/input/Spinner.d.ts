import React from 'react';
type SpinnerControlProps = {
    intervalTime?: number;
    onStep: (dir: 'up' | 'down') => void;
};
export declare const SpinnerControl: React.FC<SpinnerControlProps>;
export {};
