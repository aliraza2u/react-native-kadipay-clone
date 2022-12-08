import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

// interface IIconProps {
//   color?: string;
//   width?: string;
//   height?: string;
// }

export const SearchIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke={'#f4b6b5'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.0004 20.9999L16.6504 16.6499"
        stroke={'#f4b6b5'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
