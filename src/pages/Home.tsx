import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Modal, TargetGroup } from "../components";
import {
  expData1,
  numberOfBackgroundTargetsPerPage,
  numberOfModalTargetsPerPage,
  numberOfSets,
} from "../data/exp";
import { useTargetsPerPage } from "../hooks";

const Home: NextPage = () => {
  const [rest, setRest] = useState(true);
  const [page, setPage] = useState(0);

  const {
    currentTargets: currentBackgroundTargets,
    targetCount,
    remainedTargetCount,
    setCurrentTarget: setCurrentBackgroundTargets,
  } = useTargetsPerPage(
    expData1.backgroundValues,
    page,
    numberOfBackgroundTargetsPerPage
  );
  const {
    currentTargets: currentModalTargets,
    remainedTargetCount: remainedModalTargetCount,
    setCurrentTarget: setCurrentModalTargets,
  } = useTargetsPerPage(
    expData1.modalValues,
    page,
    numberOfModalTargetsPerPage
  );

  useEffect(() => {
    if (remainedTargetCount === 0) {
      setRest(true);
      setPage((page) => page + 1);
    }
  }, [remainedTargetCount]);

  return (
    <>
      <Head>
        <title>Blur Effect 실험</title>
        <meta name="description" content="Blur Effect 실험" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {rest ? (
        <RestContainer>
          현재 단계: {page + 1} / 총 단계: {numberOfSets}
          <StartButton onClick={() => setRest(false)}>시작하기</StartButton>
        </RestContainer>
      ) : (
        <>
          <StatusBar>
            <span style={{ backgroundColor: "white", fontSize: 20 }}>
              {remainedTargetCount} / {targetCount}
            </span>
          </StatusBar>

          <Content>
            <TargetGroup
              values={currentBackgroundTargets}
              numberOfColumns={4}
              numberOfRows={5}
              onChange={setCurrentBackgroundTargets}
            />
          </Content>

          {remainedTargetCount <= targetCount / 2 &&
            remainedModalTargetCount > 0 && (
              <Modal
                values={currentModalTargets}
                onChange={setCurrentModalTargets}
              />
            )}
        </>
      )}
    </>
  );
};

export default Home;

const StatusBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  background-color: white;
  font-size: 32px;
  height: 100%;
`;

const RestContainer = styled.div`
  background-color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StartButton = styled.button`
  padding: 8px 12px;
  margin-top: 20px;
`;
