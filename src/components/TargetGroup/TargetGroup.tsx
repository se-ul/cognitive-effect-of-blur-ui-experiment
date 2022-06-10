import styled from "@emotion/styled";
import { TargetModel } from "../../models";
import { Target } from "../Target";

interface TargetGroupProps {
  values: TargetModel[];
  numberOfColumns: number;
  numberOfRows: number;
  onChange: (values: TargetModel[], correctness: boolean) => void;
}

export const TargetGroup: React.FC<TargetGroupProps> = ({
  values,
  numberOfColumns,
  numberOfRows,
  onChange,
}) => {
  return (
    <Content>
      {values.map(({ value, checked }, index) => (
        <Target
          key={index}
          value={value}
          width={`${100 / numberOfColumns}%`}
          height={`${100 / numberOfRows}%`}
          checked={checked}
          onCheck={() =>
            onChange(
              [
                ...values.slice(0, index),
                {
                  value: value,
                  checked: true,
                },
                ...values.slice(index + 1),
              ],
              value === 3
            )
          }
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
