import React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

export function WalletIcon() {
  return (
    <Svg width={35} height={32} fill="none">
      <G clipPath="url(#a)">
        <Path
          d="M32 8H22c-2.3 0-4.6.8-6.2 2.3A7.7 7.7 0 0013 16c0 2.1 1 4.2 2.6 5.7a9.2 9.2 0 006.2 2.3H32v2.7c0 .3-.2.7-.4 1-.3.2-.7.3-1 .3H4.3c-.4 0-.8-.1-1-.4-.3-.2-.5-.6-.5-1V5.4c0-.3.2-.7.4-1 .3-.2.7-.3 1-.3h26.3c.4 0 .8.1 1 .4.3.2.5.6.5 1V8zm-10 2.7h11.6v10.6H22c-1.6 0-3-.5-4.1-1.5-1.1-1-1.8-2.4-1.8-3.8s.7-2.8 1.8-3.8c1-1 2.5-1.5 4-1.5zm0 4v2.6h4.4v-2.6H22z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h35v32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
