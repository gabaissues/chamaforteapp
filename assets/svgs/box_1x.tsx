import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Icon(props: SvgProps) {
  return (
    <Svg
      width={31}
      height={33}
      fill="none"
      {...props}
    >
      <Path
        d="M13.564 1.394a3.13 3.13 0 013.04 0l11.76 6.531a1.566 1.566 0 01.804 1.368V22.18a3.13 3.13 0 01-1.61 2.735l-10.955 6.088a3.13 3.13 0 01-3.039 0L2.61 24.915A3.13 3.13 0 011 22.181V9.293a1.565 1.565 0 01.804-1.368l11.762-6.531h-.002z"
        stroke="#FAFAFA"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.084 16.197v15.649M1 8.373l14.084 7.824L1 8.373zm14.084 7.824l14.084-7.824-14.084 7.824z"
        stroke="#FAFAFA"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M8.042 12.285L22.126 4.46M5.695 16.71l4.694 2.617"
        stroke="#FAFAFA"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Icon;