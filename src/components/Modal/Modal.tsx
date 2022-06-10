import styled from "@emotion/styled";
import { Target } from "../Target";

const values = [...new Array(9)].map(() => Math.floor(Math.random() * 4));

export const Modal: React.FC = () => {
  return (
    <Overlay>
      <Content>
        {values.map((value, index) => (
          <Target key={index} value={value} width="33.333%" />
        ))}
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
  user-select: none;

  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 24px;
  padding: 12px;
`;
