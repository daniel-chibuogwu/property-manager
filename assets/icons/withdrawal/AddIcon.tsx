import React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

export default function AddIcon() {
  return (
    <Svg width={14} height={14} fill="none">
      <G clipPath="url(#a)" fill="#1293A9">
        <Path d="M7 1.75c2.888 0 5.25 2.362 5.25 5.25S9.887 12.25 7 12.25 1.75 9.887 1.75 7 4.112 1.75 7 1.75zm0-.875C3.631.875.875 3.631.875 7S3.631 13.125 7 13.125 13.125 10.369 13.125 7 10.369.875 7 .875z" />
        <Path d="M10.5 6.563H7.437V3.5h-.875v3.063H3.5v.875h3.063V10.5h.875V7.437H10.5v-.875z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h14v14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
