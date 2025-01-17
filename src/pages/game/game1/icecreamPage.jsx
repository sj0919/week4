import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as BackgroundImage } from "../../assets/game/game1/game1_background.svg";
import { ReactComponent as VanillaIcecream } from "../../assets/game/game1/vanilla_icecream.svg";
import { ReactComponent as GreenteaIcecream } from "../../assets/game/game1/greentea_icecream.svg";

const IcecreamPage = () => {
  const [selected, setSelected] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const navigate = useNavigate();

  const handleSelection = (choice) => {
    setSelected(choice);
    setTimeout(() => navigate("/bagPage"), 1000); // 선택 후 1초 후 페이지 이동
  };

  return (
    <Layout backgroundImage={BackgroundImage}>
      <HintButton onClick={() => setShowHint(!showHint)}>히트</HintButton>
      
      {showHint && (
        <HintMessage>
          아이스크림을 잘 골라보세요!
        </HintMessage>
      )}
      
      <IcecreamContainer>
        <IcecreamChoice onClick={() => handleSelection("vanilla")}>
          <VanillaIcecream width="100" />
          {selected === "vanilla" && <HintText>나 녹차 알레르기 있는 거 몰라?</HintText>}
        </IcecreamChoice>

        <IcecreamChoice onClick={() => handleSelection("greenTea")}>
          <GreenteaIcecream width="100" />
          {selected === "greentea" && <HintText>나 유기농 제주 녹차 아이스크림만 먹는 거 몰라?</HintText>}
        </IcecreamChoice>
      </IcecreamContainer>
    </Layout>
  );
};

export default IcecreamPage;

const Layout = styled.div`
  text-align: center;
  padding: 20px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  position: relative;
`;

const HintButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #FFA500;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const HintMessage = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #eee;
  border-radius: 5px;
`;

const IcecreamContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const IcecreamChoice = styled.div`
  margin: 10px;
  text-align: center;
  cursor: pointer;
`;

const HintText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #000;
`;
