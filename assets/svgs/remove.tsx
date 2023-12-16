import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Icon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <Path
        d="M9.768 8l6.187-6.187L14.187.045 8 6.232 1.813.045.045 1.813 6.232 8 .045 14.187l1.768 1.768L8 9.768l6.187 6.187 1.768-1.768L9.768 8z"
        fill="#FAFAFA"
      />
    </Svg>
  );
}

export default Icon;