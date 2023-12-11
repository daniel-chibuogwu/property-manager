import React from 'react';
import Svg, { Circle } from 'react-native-svg';

export function WalletTopBackgroundIcon() {
  return (
    <Svg width={143} height={132} fill="none">
      <Circle cx={52.5} cy={41.5} r={90.5} fill="#1CA1B8" />
    </Svg>
  );
}

export function WalletBottomBackgroundIcon() {
  return (
    <Svg width={94} height={55} fill="none">
      <Circle cx={76.5} cy={76.5} r={76.5} fill="#1CA1B8" />
    </Svg>
  );
}
