import styled from "@emotion/styled";
import { Target } from "../Target";

interface TargetGroupProps {
  values: number[];
  numberOfColumns: number;
  numberOfRows: number;
}

export const TargetGroup: React.FC<TargetGroupProps> = ({
  values,
  numberOfColumns,
  numberOfRows,
}) => {
  return (
    <Content>
      {values.map((value, index) => (
        <Target
          key={index}
          value={value}
          width={`${100 / numberOfColumns}%`}
          height={`${100 / numberOfRows}%`}
        />
      ))}
    </Content>
  );
};

const Content = styled.div`
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  user-select: none;
`;
