import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Icon(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        d="M9.75 0a9.75 9.75 0 019.75 9.75c0 4.12-2.895 8.61-8.61 13.518a1.75 1.75 0 01-2.283-.002l-.378-.328C2.767 18.158 0 13.778 0 9.75A9.75 9.75 0 019.75 0zm0 6a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
        fill="#FAFAFA"
      />
    </Svg>
  );
}

export default Icon;