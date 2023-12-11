import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function UsernameIcon() {
  return (
    <Svg width={18} height={18} fill="none">
      <Path
        d="M9.6 11.8l.9-.4a4 4 0 001.1-.7c.6-.6-1.1-.6-1.1-3.4 0-1.9.7-2.8 2.3-2.8 1.5 0 2.2 1 2.2 2.8 0 2.8-1.7 2.8-1.1 3.4 1.1 1.1 3.3 1.1 3.3 2.8m-16.4 0c0-1.7 2.2-1.7 3.3-2.8C4.7 10 3 10 3 7.3c0-1.9.7-2.8 2.3-2.8 1.5 0 2.2 1 2.2 2.8 0 2.8-1.7 2.8-1.1 3.4 1.1 1.1 3.3 1.1 3.3 2.8h-9z"
        stroke="#1293A9"
        strokeLinecap="square"
      />
      <Path d="M9 12l.6-.2" stroke="#1293A9" strokeLinecap="round" />
    </Svg>
  );
}
