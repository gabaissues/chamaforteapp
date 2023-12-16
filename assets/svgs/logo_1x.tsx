import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

function Icon(props: SvgProps) {
  return (
    <Svg
      width={25}
      height={43}
      fill="none"
      {...props}
    >
      <Path
        d="M24.773 18.504c1.46-4.749-4.456-8.758-8.009-12.16C14.459 4.138 9.622 1.112 6.62 0c.735 3.689 3.938 7.942 3.203 11.631-1.267 6.357-7.718 7.404-9.062 13.746-.857 4.041-1.346 7.409.52 11.102 1.318 2.612 2.782 3.832 5.339 5.287 4.881 2.777 14.415 0 14.415 0s-9.742-.76-12.28-5.287c-2.023-3.61-.959-6.555 0-10.574 1.291-5.41 7.475-12.16 7.475-12.16s2.282 2.031 3.204 3.702c2.301 4.17 1.601 13.217 1.601 13.217l3.738-12.16z"
        fill="url(#prefix__paint0_linear_1305_2)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_1305_2"
          x1={12.5}
          y1={0}
          x2={12.5}
          y2={43}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BF" />
          <Stop offset={1} stopColor="#28A1CD" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Icon;