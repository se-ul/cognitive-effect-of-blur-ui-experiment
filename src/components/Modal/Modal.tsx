import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { TargetModel } from "../../models";
import { TargetGroup } from "../TargetGroup";

interface ModalProps {
  modalType: number;
  values: TargetModel[];
  onChange: (values: TargetModel[], correctness: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({
  modalType,
  values,
  onChange,
}) => {
  return (
    <Overlay modalType={modalType}>
      <Content modalType={modalType}>
        <TargetGroup
          values={values}
          numberOfColumns={3}
          numberOfRows={3}
          onChange={onChange}
        />
      </Content>
    </Overlay>
  );
};

const overlayCSSByModalType: Record<number, SerializedStyles> = {
  0: css`
    background-color: rgba(0, 0, 0, 0.8);
  `,
  1: css`
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4px);
  `,
  2: css`
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
  `,
};

const contentCSSByModalType: Record<number, SerializedStyles> = {
  0: css`
    background-color: rgba(0, 0, 0, 0.3);
  `,
  1: css`
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
  `,
  2: css`
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
  `,
};

const Overlay = styled.div<{ modalType: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ modalType }) => overlayCSSByModalType[modalType]};
`;

const Content = styled.div<{ modalType: number }>`
  color: white;
  font-size: 40px;
  height: 312px;

  border-radius: 24px;
  padding: 12px;

  ${({ modalType }) => contentCSSByModalType[modalType]};
`;
