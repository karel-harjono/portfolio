"use client";

import React from "react";
import styled, { keyframes, css } from "styled-components";

const slideUp = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: -600px;
  }
`;

const sideSway = keyframes`
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
`;

interface FloatingHeartsStyleProps {
  $isOpen: boolean;
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $zIndex?: number;
}

interface FloatingHeartsProps extends Omit<FloatingHeartsStyleProps, "$isOpen"> {
  isOpen: boolean;
  hearts?: Array<Omit<FloatingHeartProps, "$position">>;
}

const FloatingHeartsContainer = styled.div<FloatingHeartsStyleProps>`
  position: absolute;
  top: ${(props) => props.$top ?? "0"};
  left: ${(props) => props.$left ?? "0"};
  right: ${(props) => props.$right ?? "0"};
  bottom: ${(props) => props.$bottom ?? "0"};
  z-index: ${(props) => props.$zIndex ?? 2};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

interface FloatingHeartProps {
  $position: number;
  $size?: string;
  $color?: string;
  $scale?: number;
  $animationDuration?: {
    slideUp?: number;
    sideSway?: number;
  };
  $left?: string;
  $bottom?: string;
}

export const FloatingHeart = styled.div<FloatingHeartProps>`
  position: absolute;
  bottom: ${(props) => props.$bottom ?? "50%"};
  left: ${(props) => {
    if (props.$left) return props.$left;
    switch (props.$position) {
      case 1:
        return "20%";
      case 2:
        return "55%";
      case 3:
        return "10%";
      default:
        return "0";
    }
  }};
  width: ${(props) => props.$size ?? "30px"};
  height: ${(props) => props.$size ?? "30px"};
  transform: scale(
    ${(props) => {
      if (props.$scale) return props.$scale;
      switch (props.$position) {
        case 1:
          return "0.6";
        case 2:
          return "1";
        case 3:
          return "0.8";
        default:
          return "1";
      }
    }}
  );
  ${(props) => {
    switch (props.$position) {
      case 1:
        return css`
          animation: ${slideUp} 4s linear infinite, ${sideSway} 2s ease-in-out infinite alternate;
        `;
      case 2:
        return css`
          animation: ${slideUp} 5s linear infinite, ${sideSway} 4s ease-in-out infinite alternate;
        `;
      case 3:
        return css`
          animation: ${slideUp} 7s linear infinite, ${sideSway} 2s ease-in-out infinite alternate;
        `;
      default:
        return "";
    }
  }}
  animation-fill-mode: forwards;
  animation-delay: 0.7s;

  &:before,
  &:after {
    position: absolute;
    content: "";
    left: 50%;
    top: 0;
    width: ${(props) => `calc(${props.$size ?? "30px"} / 2)`};
    height: ${(props) => `calc(${props.$size ?? "30px"} * 0.8)`};
    background: ${(props) => props.$color ?? "#ff1744"};
    border-radius: ${(props) =>
      `calc(${props.$size ?? "30px"} / 2) ${props.$size ?? "30px"} / 2 0 0`};
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

const defaultHearts = [
  {}, // Position 1 with default values
  {}, // Position 2 with default values
  {}, // Position 3 with default values
];

export const FloatingHearts: React.FC<FloatingHeartsProps> = ({
  isOpen,
  hearts = defaultHearts,
  ...containerProps
}) => {
  return (
    <FloatingHeartsContainer $isOpen={isOpen} {...containerProps}>
      {hearts.map((heartProps, index) => (
        <FloatingHeart key={index} $position={index + 1} {...heartProps} />
      ))}
    </FloatingHeartsContainer>
  );
};

export type { FloatingHeartsProps, FloatingHeartProps };
