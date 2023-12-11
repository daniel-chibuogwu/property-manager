import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function PasswordIcon() {
  return (
    <Svg width={18} height={18} fill="none">
      <Path
        d="M15.8 12V9H9m-3.7 3a3 3 0 100-6 3 3 0 000 6zm7.5-.7V9"
        stroke="#1293A9"
        strokeLinecap="square"
      />
    </Svg>
  );
}
