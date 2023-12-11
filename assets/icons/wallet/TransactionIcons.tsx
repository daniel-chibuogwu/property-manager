import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function TopUpTransactionIcon() {
  return (
    <Svg width={38} height={38} fill="none">
      <Path
        d="M24 5.5a1.6 1.6 0 00.6 2.2 12.7 12.7 0 11-11.2 0A1.6 1.6 0 1012 4.8a15.8 15.8 0 1014 0 1.6 1.6 0 00-2 .7zm-6.6-.7v15.1l-3.6-3.6a1.6 1.6 0 00-2.3 2.2L18 25l.5.3c.4.2.8.2 1.2 0 .2 0 .4-.2.5-.3l6.4-6.4a1.6 1.6 0 00-1.2-2.7 1.6 1.6 0 00-1 .5L20.7 20V4.8a1.6 1.6 0 10-3.2 0z"
        fill="#49BA62"
      />
    </Svg>
  );
}

export function WithdrawTransactionIcon() {
  return (
    <Svg width={38} height={38} fill="none">
      <Path
        d="M14 32.5a1.6 1.6 0 00-.6-2.2 12.7 12.7 0 1111.2 0 1.6 1.6 0 101.4 2.9 15.8 15.8 0 10-14 0 1.6 1.6 0 002-.7zm6.6.8V18l3.6 3.6a1.6 1.6 0 002.3-2.2L20 13l-.5-.3c-.4-.2-.8-.2-1.2 0-.2 0-.4.2-.5.3l-6.4 6.4a1.6 1.6 0 001.2 2.7 1.6 1.6 0 001-.5l3.7-3.6v15.1a1.6 1.6 0 003.2 0z"
        fill="#E83030"
      />
    </Svg>
  );
}
