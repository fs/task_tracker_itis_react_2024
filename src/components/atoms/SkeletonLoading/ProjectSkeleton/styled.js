import styled, { keyframes } from "styled-components";

const wave = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const SkeletonWrapper = styled.div`
  .skeleton-line {
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 4px;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
  }

  .skeleton-line:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.7) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: ${wave} 3.5s infinite;
  }
`;
