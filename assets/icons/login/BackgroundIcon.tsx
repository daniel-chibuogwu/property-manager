import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';

type Props = {
  className?: string;
};
export default function BackgroundIcon({ className, ...props }: Props) {
  return (
    <View className={className} {...props}>
      <Svg width={115} height={144} fill="none">
        <Path
          opacity={0.1}
          d="M21.2 144c11.7 0 21-16 21-35.8 0-19.8-9.3-35.9-21-35.9-11.6 0-21 16-21 35.9 0 19.7 9.4 35.8 21 35.8zm61.9-34.3c17.7 0 32-24.4 32-54.5 0-30-14.3-54.5-32-54.5s-32 24.4-32 54.5 14.3 54.5 32 54.5z"
          fill="#059684"
        />
        <Path
          opacity={0.1}
          d="M107 18.8c3 12 3.3 25.2 1 37.6-2.2 12.3-7 23-13.3 29.9-6.5 7-14.1 9.7-21.6 8-7.5-1.8-14.5-8.1-19.5-17.8a63.3 63.3 0 008 19c3.4 5.4 7.5 9.3 12 11.7 4.4 2.3 9 3 13.7 2 4.6-1.1 9-3.9 12.9-8 4-4.3 7.2-10 9.8-16.6a91.6 91.6 0 003.7-45.3 71.4 71.4 0 00-6.8-20.5z"
          fill="#065461"
        />
      </Svg>
    </View>
  );
}
