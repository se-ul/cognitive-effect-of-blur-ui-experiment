import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Modal, Target } from "../components";
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
        {expData1.backgroundValues
          .slice(page * 20, (page + 1) * 20)
          .map((value, index) => (
            <Target key={index} value={value} width="25%" height="20vh" />
          ))}
      </Content>
      <Modal values={expData1.modalValues} />
    </>
  );
};

export default Home;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  user-select: none;
  font-size: 32px;
  background-color: white;
`;
