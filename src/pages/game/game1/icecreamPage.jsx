import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Game1Page } from "../../../assets/game/game1/game1_background.svg";
import { ReactComponent as YebboMon } from "../../../assets/game/game1/yebbomon.svg";
import { ReactComponent as VanillaIcecream } from "../../../assets/game/game1/vanilla_icecream.svg";
import { ReactComponent as GreenteaIcecream } from "../../../assets/game/game1/greentea_icecream.svg";

const IcecreamPage = () => {
  const [showHint, setShowHint] = useState(false);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleNext = () => {
    navigate("/bag", { 
      state: { 
        icecreamResult: selected === "greenTea" 
      } 
    }); 
  };

  return (
    <Layout>
      <StyledGame1Page />
      <TimerBox>{timeLeft > 0 ? `타이머: ${timeLeft}s` : "Time Over"}</TimerBox>
      <HintButton onClick={() => setShowHint(!showHint)}>아이스크림힌트</HintButton>
      {showHint && <HintDialog>I love 유.제.아.</HintDialog>}
      <CenteredYebboMon />
      {selected && <ResultText>{selected === "vanilla" ? "틀렸어! 나 유기농 제주녹차 아이스크림만 먹는 것도 몰라?" : "정답! I love 유기농 제주녹차 아이스크림💚"}</ResultText>}
      <IcecreamContainer>
        <IcecreamChoice onClick={() => setSelected("vanilla")}>
          <VanillaIcecream width="100" />
        </IcecreamChoice>
        <IcecreamChoice onClick={() => setSelected("greenTea")}>
          <GreenteaIcecream width="100" />
        </IcecreamChoice>
      </IcecreamContainer>

      {selected && (
        <NextButton onClick={handleNext}>다음문제</NextButton>
      )}

    </Layout>
  );
};

export default IcecreamPage;

const Layout = styled.div`
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  position: fixed;  // relative → fixed 변경
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  overflow: hidden;
`;


const StyledGame1Page = styled(Game1Page)`
  position: fixed;  // absolute → fixed
  top: 0;
  left: 0;
  width: 100;  // 100% → auto 변경
  height: auto;  // 100% → auto 변경
  min-width: 100%;
  min-height: 100%;
  z-index: -9999;
  opacity: 0.8;
`;


const TimerBox = styled.div`
  position: absolute;
  top: 20px;
  right: 100px;
  font-size: 24px;
  font-weight: bold;
  z-index: 10; /* 다른 요소에 영향을 주지 않도록 z-index 추가 */
`;

const HintButton = styled.button`
position: absolute;
top: 5%;
left: 50%;
transform: translateX(-50%);
width: 200px; /* 버튼 너비 증가 */
height: 60px; /* 버튼 높이 증가 */
font-size: 20px; /* 텍스트 크기 증가 */
background-color: white;
color: #ff6300;
border: none;
border-radius: 10px; /* 모서리를 더 둥글게 */
cursor: pointer;
transition: background-color 0.2s ease-in-out;

&:hover {
  background-color: #e55a00;
}

&:active {
  background-color: #cc4f00;
}
`;


const HintDialog = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px 20px;
  border-radius: 10px;
  z-index: 100;
`;


const CenteredYebboMon = styled(YebboMon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
`;

const IcecreamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  width: 100%;
  position: relative;
  gap: 12%; /* 아이스크림 이미지 사이의 간격 조정 */
`;


const IcecreamChoice = styled.div`
  text-align: center;
  cursor: pointer;
  margin: 0 50px;
`;

const ResultText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.8);
  padding: 10px 20px;
  border-radius: 10px;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px; /* 버튼 너비 증가 */
  height: 60px; /* 버튼 높이 증가 */
  font-size: 20px; /* 텍스트 크기 증가 */
  background-color: white;
  color: #ff6300;
  border: none;
  border-radius: 10px; /* 모서리를 더 둥글게 */
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e55a00;
  }

  &:active {
    background-color: #cc4f00;
  }
`;
