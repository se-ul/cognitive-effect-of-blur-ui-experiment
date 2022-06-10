import styled from "@emotion/styled";
import React from "react";

interface TargetProps {
  value: number;
  width: string;
}

export const Target: React.FC<TargetProps> = ({ value, width }) => {
  return (
    <Container style={{ transform: `rotate(${value * 90}deg)`, width }}>
      C
    </Container>
  );
};

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  height: 100px;
`;
