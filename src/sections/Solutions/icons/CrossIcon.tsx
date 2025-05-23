import React from "react";

import { IconProps } from "@/assets/icons/IconProps";

const CrossIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="none" {...props}>
      <g clipPath="url(#clip0_488_4545)">
        <path
          d="M4.15545 15.7176C4.36968 15.9209 4.71026 15.9209 4.919 15.7176L9.55523 11.0759L14.1969 15.7176C14.4002 15.9209 14.7518 15.9264 14.955 15.7176C15.1638 15.5034 15.1638 15.1628 14.955 14.9595L10.3188 10.3178L14.955 5.67611C15.1638 5.47286 15.1692 5.12679 14.955 4.91805C14.7463 4.7148 14.4002 4.7148 14.1969 4.91805L9.55523 9.55978L4.919 4.91805C4.71026 4.7148 4.36419 4.70931 4.15545 4.91805C3.9522 5.13229 3.9522 5.47286 4.15545 5.67611L8.79717 10.3178L4.15545 14.9595C3.9522 15.1628 3.94671 15.5089 4.15545 15.7176Z"
          fill="#111111"
          fillOpacity="0.7"
        />
      </g>
      <defs>
        <clipPath id="clip0_488_4545">
          <rect width="20" height="20" fill="white" transform="translate(0 0.3125)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CrossIcon;
