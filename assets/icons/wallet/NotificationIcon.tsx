import React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

export function NotificationIcon() {
  return (
    <Svg width={20} height={20} fill="none">
      <G clipPath="url(#a)">
        <Path
          d="M18.3 16.7H1.7V15h.8V9.2a7.5 7.5 0 1115 0V15h.8v1.7zM8 17.5h4.2a2 2 0 01-4.2 0z"
          fill="#1293A9"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
