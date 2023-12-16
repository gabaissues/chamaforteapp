import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Icon(props: SvgProps) {
  return (
    <Svg
      width={103}
      height={103}
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.75 0A25.75 25.75 0 000 25.75v51.5A25.75 25.75 0 0025.75 103h51.5A25.75 25.75 0 00103 77.25v-51.5A25.75 25.75 0 0077.25 0h-51.5zm44.96 44.723a5.153 5.153 0 00-7.52-7.046L47.313 54.621l-7.843-6.968a5.15 5.15 0 00-6.84 7.694l11.588 10.3a5.15 5.15 0 007.174-.324l19.312-20.6h.006z"
        fill="#2D2D2D"
      />
    </Svg>
  );
}

export default Icon;