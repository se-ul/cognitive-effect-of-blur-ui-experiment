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
        width,
        height,
        backgroundColor: isCorrected ? "green" : checked ? "grey" : "inherit",
        opacity: checked && !isCorrected ? 0.3 : 1,
      }}
      onClick={() => {
        if (!checked) {
          onCheck();
        }
      }}
    >
      <span style={{ transform: `rotate(${value * 90}deg)` }}>C</span>
    </Container>
  );
};

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
`;
