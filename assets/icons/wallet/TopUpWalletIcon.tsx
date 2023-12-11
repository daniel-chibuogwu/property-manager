import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function TopUpWalletIcon({ size = 19 }) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M9.5 2.4c4 0 7.1 3.2 7.1 7.1 0 4-3.2 7.1-7.1 7.1-4 0-7.1-3.2-7.1-7.1 0-4 3.2-7.1 7.1-7.1zm0-1.2a8.3 8.3 0 00-8.3 8.3c0 4.6 3.7 8.3 8.3 8.3 4.6 0 8.3-3.7 8.3-8.3 0-4.6-3.7-8.3-8.3-8.3z"
        fill="#1293A9"
      />
      <Path
        d="M14.3 9H10V4.6H8.9V9H4.7v1.2H9v4.2h1.2V10h4.2V8.9z"
        fill="#1293A9"
      />
    </Svg>
  );
}
