import styled from "@emotion/styled";
import React, { useState } from "react";

interface TargetProps {
  value: number;
  width: string;
}

export const Target: React.FC<TargetProps> = ({ value, width }) => {
  const [checked, setChecked] = useState(false);
  const isCorrected = checked && value === 3;
  return (
    <Container
      style={{
        transform: `rotate(${value * 90}deg)`,
        width,
        color: isCorrected ? "green" : "inherit",
        opacity: checked && !isCorrected ? 0.3 : 1,
      }}
      onClick={() => setChecked(true)}
    >
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
