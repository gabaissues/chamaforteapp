import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Icon(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <Path
        d="M11.25 8.75V0h-2.5v8.75H0v2.5h8.75V20h2.5v-8.75H20v-2.5h-8.75z"
        fill="#FAFAFA"
      />
    </Svg>
  );
}

export default Icon;