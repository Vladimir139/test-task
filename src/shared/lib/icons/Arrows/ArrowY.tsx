import React, { FC } from "react";

export const ArrowYIcon: FC<{ width?: string; height?: string; rotate?: number }> = ({
  width = "15",
  height = "9",
  rotate = 0,
}) => (
  <svg
    width={width}
    height={height}
    style={{ transition: "0.2s ease-in-out", transform: `rotate(${rotate}deg)` }}
    viewBox="0 0 15 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      y="1.41406"
      width="2"
      height="10"
      rx="1"
      transform="rotate(-45 0 1.41406)"
      fill="currentColor "
    />
    <rect
      x="13.0713"
      width="2"
      height="10.2197"
      rx="1"
      transform="rotate(45 13.0713 0)"
      fill="currentColor"
    />
  </svg>
);
