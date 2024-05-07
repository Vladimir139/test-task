import React, { FC } from "react";

export const SaveIcon: FC<{ isSaved?: boolean }> = ({ isSaved }) => (
  <svg
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill={isSaved ? "red" : "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.3115 2.46071C16.9773 0.0803204 14.2743 1.08425 12.6007 2.14593C11.655 2.74582 10.345 2.74582 9.39929 2.14593C7.72564 1.08427 5.02272 0.0803466 2.68853 2.46072C-2.85249 8.11136 6.64988 19 11 19C15.3502 19 24.8525 8.11136 19.3115 2.46071Z"
      stroke={isSaved ? "red" : "#2D264B"}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
