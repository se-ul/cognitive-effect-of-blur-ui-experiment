import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { Modal, Target } from "../components";

const values = [...new Array(50)].map(() => Math.floor(Math.random() * 4));

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blur Effect 실험</title>
        <meta name="description" content="Blur Effect 실험" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        {values.map((value, index) => (
          <Target key={index} value={value} width="25%" />
        ))}
      </Content>
      <Modal />
    </>
  );
};

export default Home;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  user-select: none;

  font-size: 20px;
`;
