import styled from "@emotion/styled";
import React from "react";

interface TargetProps {
  value: number;
  width: string;
  height: string;
  checked: boolean;
  onCheck: () => void;
}

export const Target: React.FC<TargetProps> = ({
  value,
  width,
  height,
  checked,
  onCheck,
}) => {
  const isCorrected = checked && value === 3;
  return (
    <Container
      style={{
        transform: `rotate(${value * 90}deg)`,
        width,
        height,
        color: isCorrected ? "green" : "inherit",
        opacity: checked && !isCorrected ? 0.3 : 1,
      }}
      onClick={() => {
        if (!checked) {
          onCheck();
        }
      }}
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
`;
