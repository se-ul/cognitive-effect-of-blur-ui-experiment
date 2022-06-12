import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Result: NextPage = () => {
  const router = useRouter();

  const { userName } = router.query;

  return (
    <Center>
      <Content>
        <h1>{userName}님, 감사합니다</h1>
        <p>실험이 종료되었습니다.</p>
        <p>실험 결과는 무사히 기록되었습니다.</p>
        <p>실험에 끝까지 참여해주셔서 감사합니다.</p>
        <p>좋은 하루 되세요.</p>
      </Content>
    </Center>
  );
};

export default Result;

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  color: white;
  padding: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
