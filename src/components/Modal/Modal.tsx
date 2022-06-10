import styled from "@emotion/styled";
import { TargetModel } from "../../models";
import { TargetGroup } from "../TargetGroup";

interface ModalProps {
  values: TargetModel[];
  onChange: (values: TargetModel[]) => void;
}

export const Modal: React.FC<ModalProps> = ({ values, onChange }) => {
  return (
    <Overlay>
      <Content>
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
`;

const Content = styled.div`
  color: white;
  font-size: 40px;
  height: 312px;

  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 24px;
  padding: 12px;
`;
