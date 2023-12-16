import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Icon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.828.765a2.618 2.618 0 013.915.245l2.693 3.459c.493.634.667 1.46.472 2.24l-.82 3.286a1.017 1.017 0 00.267.964l3.685 3.686a1.017 1.017 0 00.966.267l3.284-.82a2.617 2.617 0 012.241.472l3.46 2.691a2.617 2.617 0 01.244 3.917l-1.552 1.55c-1.11 1.11-2.768 1.598-4.315 1.054a27.951 27.951 0 01-10.515-6.63A27.951 27.951 0 01.223 6.631C-.32 5.087.167 3.426 1.277 2.316L2.828.766z"
        fill="#FAFAFA"
      />
    </Svg>
  );
}

export default Icon;