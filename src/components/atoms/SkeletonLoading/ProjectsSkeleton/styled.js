import styled, { keyframes } from "styled-components";

/* Wave Animation for Skeletons(from Yt Tutorial mixed with original table) */
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

  .skeleton-button {
    width: 100px;
    height: 35px;
    background-color: #f0f0f0;
    border-radius: 4px;
    margin-right: 10px;
    display: inline-block;
    position: relative;
    overflow: hidden;
  }

  .skeleton-button:before {
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

export const Table = styled.table`
  margin: 1rem 0;
  text-align: left;
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.th`
  padding 1rem;
  border-bottom: 1px solid grey;
`;

export const TableCol = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
`;

export const TableColActions = styled(TableCol)`
  width: 20rem;
`;

export default SkeletonWrapper;
