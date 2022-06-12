import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
          <h1>안녕하세요</h1>
          <p>실험 전 아래 내용을 잘 읽어주세요.</p>
          <h2 style={{ fontSize: 16, margin: 0 }}>유의사항</h2>
          <ul>
            <li>실험 방법을 충분히 숙지해주세요</li>
            <li>
              실험은 <b style={{ color: "red" }}>한 번만 참여해주세요</b>
            </li>
          </ul>
          <h2 style={{ fontSize: 16, margin: 0 }}>수집하는 정보</h2>
          <ul>
            <li>닉네임</li>
            <li>실험 과정의 정확도와 소요 시간</li>
          </ul>

          <label htmlFor="userName">
            *띄어쓰기, 특수문자는 사용하지 말아주세요
          </label>
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
                `/experiment?userName=${userName}&id=${uuidv4()}&group=${Math.floor(
                  Math.random() * 3
                )}&experimentPage=0`
              );
            }}
            disabled={userName.length === 0}
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
  flex-direction: column;
`;

const StartButton = styled.button`
  padding: 8px 12px;
  margin-top: 20px;
`;

const CheckInForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  overflow: scroll;
  padding: 20px 20px;

  gap: 12px;
`;
