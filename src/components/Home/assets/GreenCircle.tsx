import * as React from 'react';
import Svg, {G, Circle, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
export const GreenCircle = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={62}
    height={62}
    fill="none"
    {...props}>
    <G filter="url(#a)">
      <Circle cx={31.198} cy={30.689} r={13.146} fill="#fff" />
      <Circle cx={31.199} cy={30.69} r={8.355} fill="#5ABB81" />
    </G>
    <Defs></Defs>
  </Svg>
);
