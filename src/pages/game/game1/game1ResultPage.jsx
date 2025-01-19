import styled from "styled-components";
import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { ReactComponent as Game1Page } from "../../../assets/game/game1/game1_background.svg";
import { ReactComponent as Yebbomon } from "../../../assets/game/game1/yebbomon.svg";

const Game1ResultPage = () => {
  const location = useLocation();
  const results = location.state || {};
  const navigate = useNavigate();

  return (
    <Layout>
      {/* 배경을 최상위로 이동 */}
      <Background />
      
      {/* 결과 텍스트 컨테이너 */}
      <TextContainer>
        <Text>아이스크림 선택 결과: {results.icecreamResult ? "정답!" : "틀렸어!"}</Text>
        <Text>가방 선택 결과: {results.bagResult ? "정답!" : "틀렸어!"}</Text>
        <Text>퍼스널컬러 선택 결과: {results.personalResult ? "정답!" : "틀렸어!"}</Text>
        <Text>음식 선택 결과: {results.foodResult ? "정답!" : "틀렸어!"}</Text>
      </TextContainer>

      {/* 예뻐몬 이미지 */}
      <YebboMonImage />

      {/* 버튼 */}
      <Button onClick={() => navigate("/choosegame")}>맵으로 돌아가기</Button>
    </Layout>
  );
};

export default Game1ResultPage;

// 전체 페이지 레이아웃
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative; /* 요소들이 배경 위에 있도록 설정 */
`;

// 배경 이미지
const Background = styled(Game1Page)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;   // 뷰포트 너비 채우기
  height: 100vh;  // 뷰포트 높이 채우기
  object-fit: cover;
  z-index: -1;    // 다른 요소들이 배경 위에 보이도록 설정
  opacity: 0.8;
`;

// 결과 텍스트 컨테이너
const TextContainer = styled.div`
  background-color: white;
  width: 820px;
  height: 140px;
  margin: 80px;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  position: relative; /* 배경과 겹치지 않게 하기 위해 */
  z-index: 1;
`;

// 개별 텍스트 스타일
const Text = styled.div`
  font-size: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 예뻐몬 이미지 스타일
const YebboMonImage = styled(Yebbomon)`
  width: 200px;
  margin-top: 20px;
  z-index: 1;
`;

// 버튼 스타일
const Button = styled.button`
  background-color: white;
  width: 140px;
  height: 50px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  z-index: 1;
`;
