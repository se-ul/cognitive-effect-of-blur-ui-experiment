import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Result: NextPage = () => {
  const router = useRouter();

  const { userName, group, experimentPage, correctness } = router.query;

  return (
    <Center>
      <Head>
        <title>실험 애플리케이션</title>
        <meta name="description" content="실험 애플리케이션" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <h1>결과</h1>
        <p>정확도: {Math.floor(Number(correctness))}%</p>
        <p>
          총 {3}개의 실험 중 {Number(experimentPage) + 1}번째 실험이 끝났습니다.
        </p>
        <button
          onClick={() => {
            if (Number(experimentPage) + 1 >= 3) {
              router.replace(`/finish?userName=${userName}`);
            } else {
              router.replace(
                `/experiment?userName=${userName}group=${group}&experimentPage=${
                  Number(experimentPage) + 1
                }`
              );
            }
          }}
        >
          다음 실험 시작하기
        </button>
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
