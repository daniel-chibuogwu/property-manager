import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

type SelectedProps = {
  selected: boolean;
};

export function RadioButton({ selected }: SelectedProps) {
  const color = selected ? '#1293A9' : '#767E80';
  return (
    <Svg width={15} height={15} fill="none">
      <G fill={color}>
        <Path d="M7.5.938A6.562 6.562 0 001.064 8.78a6.563 6.563 0 001.796 3.36 6.562 6.562 0 003.36 1.796 6.563 6.563 0 003.791-.373 6.563 6.563 0 002.946-2.417A6.562 6.562 0 0014.062 7.5 6.563 6.563 0 007.5.937zm0 12.187a5.625 5.625 0 01-3.125-.948 5.625 5.625 0 01-2.392-5.774 5.625 5.625 0 0110.194-2.028 5.625 5.625 0 01.948 3.125A5.625 5.625 0 017.5 13.125z" />
        {selected && (
          <Path d="M7.5 4.688a2.813 2.813 0 00-1.989 4.8 2.813 2.813 0 001.44.77 2.812 2.812 0 001.625-.16A2.812 2.812 0 009.84 9.063a2.812 2.812 0 00.473-1.563A2.812 2.812 0 007.5 4.687z" />
        )}
      </G>
    </Svg>
  );
}
