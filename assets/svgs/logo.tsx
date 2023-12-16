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
      width={45}
      height={78}
      fill="none"
      {...props}
    >
      <Path
        d="M44.591 33.565c2.627-8.614-8.02-15.885-14.416-22.057C26.027 7.505 17.32 2.018 11.915 0c1.323 6.691 7.09 14.407 5.767 21.098-2.28 11.532-13.894 13.43-16.313 24.934-1.541 7.33-2.421 13.44.936 20.14 2.373 4.737 5.008 6.951 9.61 9.59 8.787 5.036 25.949 0 25.949 0s-17.538-1.378-22.105-9.59c-3.642-6.55-1.726-11.891 0-19.18 2.324-9.815 13.455-22.058 13.455-22.058s4.108 3.683 5.767 6.713c4.142 7.567 2.883 23.975 2.883 23.975l6.727-22.057z"
        fill="url(#prefix__paint0_linear_1202_4)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_1202_4"
          x1={22.5}
          y1={0}
          x2={22.5}
          y2={78}
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