import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const Experiment: NextPage = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  return (
    <>
      <Head>
        <title>실험 애플리케이션</title>
        <meta name="description" content="실험 애플리케이션" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RestContainer>
        <CheckInForm>
          <input
            id="userName"
            type="text"
            placeholder="닉네임을 입력해주세요"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <StartButton
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              router.replace(
                `/experiment?userName=${userName}&group=${Math.floor(
                  Math.random() * 3
                )}&experimentPage=0`
              );
            }}
          >
            시작하기
          </StartButton>
        </CheckInForm>
      </RestContainer>
    </>
  );
};

export default Experiment;

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

const CheckInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  background-color: white;

  gap: 12px;
`;
