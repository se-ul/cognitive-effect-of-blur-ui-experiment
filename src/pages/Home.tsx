import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Modal, TargetGroup } from "../components";
import { expData1 } from "../data/exp-1";

const Home: NextPage = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      <Head>
        <title>Blur Effect 실험</title>
        <meta name="description" content="Blur Effect 실험" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <TargetGroup
          values={expData1.backgroundValues.slice(page * 20, (page + 1) * 20)}
          numberOfColumns={4}
          numberOfRows={5}
        />
      </Content>

      <Modal values={expData1.modalValues} />
    </>
  );
};

export default Home;

const Content = styled.div`
  background-color: white;
  font-size: 32px;
  height: 100%;
`;
