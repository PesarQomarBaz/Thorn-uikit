import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 64" {...props}>
     <path d="M8.58 7.45c.07-1.49.7-3.82 2.06-5.64a33.37 33.37 0 00-5.72 6.18c-.11.13-.23.12-.39.11l.23.1c.3.1.58.1.86.05l1.05-1.54c-.27.47-.5.95-.69 1.45.86-.29 1.7-.93 2.6-.7zM7.42 8.55c-.07 1.49-.7 3.82-2.06 5.64a33.43 33.43 0 005.72-6.18c.11-.13.23-.12.39-.11a1.6 1.6 0 00-.23-.1c-.3-.1-.58-.1-.86-.05L9.33 9.29a9 9 0 00.69-1.45c-.87.29-1.7.93-2.6.7z" fill="black"/>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="25.691"
          y1="9.6549"
          x2="25.691"
          y2="40.2608"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9F4A08" />
          <stop offset="0.370494" stopColor="#7D3900" />
          <stop offset="1" stopColor="#8D4104" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
