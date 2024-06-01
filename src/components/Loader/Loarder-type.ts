declare module 'react-loader-spinner' {
  import React from 'react';

  interface RotatingLinesProps {
    visible: boolean;
    height: number;
    width: number;
    strokeWidth: number;
    animationDuration: number;
    ariaLabel: string;
    wrapperStyle?: React.CSSProperties;
    wrapperClass?: string;
    strokeColor?: string;
  }

  export const RotatingLines: React.FC<RotatingLinesProps>;
}
