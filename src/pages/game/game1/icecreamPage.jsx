// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import styled from "styled-components";
// import { ReactComponent as BackgroundImage } from "../../../assets/game/game1/game1_background.svg";
// import { ReactComponent as VanillaIcecream } from "../../../assets/game/game1/vanilla_icecream.svg";
// import { ReactComponent as GreenteaIcecream } from "../../../assets/game/game1/greentea_icecream.svg";

// const IcecreamPage = () => {
//   const [selected, setSelected] = useState(null);
//   const [showHint, setShowHint] = useState(false);
//   const navigate = useNavigate();

//   const handleSelection = (choice) => {
//     setSelected(choice);
//     setTimeout(() => navigate("/bagPage"), 1000); // 선택 후 1초 후 페이지 이동
//   };

//   return (
//     <Layout backgroundImage={BackgroundImage}>
//       <StyledBackgroundImage>
//         <HintButton onClick={() => setShowHint(!showHint)}>힌트</HintButton>
//       </StyledBackgroundImage>
      
//       {showHint && !selected && (
//         <HintMessage>
//           아이스크림을 잘 골라보세요!
//         </HintMessage>
//       )}
      
//       <IcecreamContainer>
//         <IcecreamChoice onClick={() => handleSelection("vanilla")}>
//           <VanillaIcecream width="100" />
//           {selected === "vanilla" && (
//             <ResultText>나 유기농 제주 녹차 아이스크림만 먹는 거 몰라?</ResultText>
//           )}
//         </IcecreamChoice>

//         <IcecreamChoice onClick={() => handleSelection("greenTea")}>
//           <GreenteaIcecream width="100" />
//           {selected === "greenTea" && (
//             <ResultText>나 녹차 알레르기 있는 거 몰라?</ResultText>
//           )}
//         </IcecreamChoice>
//       </IcecreamContainer>
//     </Layout>
//   );
// };

// export default IcecreamPage;

// const Layout = styled.div`
//   text-align: center;
//   padding: 20px;
//   background-image: url(${(props) => props.backgroundImage});
//   background-size: cover;
//   background-position: center;
//   min-height: 100vh;
//   position: relative;
// `;

// const StyledBackgroundImage = styled(BackgroundImage)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100svh;
//   z-index: -1; /* 뒤로 보내기 */
//   opacity: 0.8;
// `;

// const HintButton = styled.button`
//   padding: 10px 20px;
//   font-size: 16px;
//   background-color: #FFA500;
//   border: none;
//   cursor: pointer;
//   border-radius: 5px;
//   z-index: 1; /* 버튼을 위로 가져오기 */
//   position: absolute;
//   top: 20px;
//   left: 50%;
//   transform: translateX(-50%); /* 버튼을 상단 가운데로 정렬 */
// `;

// const HintMessage = styled.div`
//   margin-top: 10px;
//   padding: 10px;
//   background-color: #eee;
//   border-radius: 5px;
// `;

// const IcecreamContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
// `;

// const IcecreamChoice = styled.div`
//   margin: 10px;
//   text-align: center;
//   cursor: pointer;
// `;

// const ResultText = styled.p`
//   margin-top: 10px;
//   font-size: 16px;
//   color: #000;
// `;
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { ReactComponent as BackgroundImage } from "../../../assets/game/game1/game1_background.svg";
import { ReactComponent as VanillaIcecream } from "../../../assets/game/game1/vanilla_icecream.svg";
import { ReactComponent as GreenteaIcecream } from "../../../assets/game/game1/greentea_icecream.svg";

const IcecreamPage = () => {
  const [selected, setSelected] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const navigate = useNavigate();

  const handleSelection = (choice) => {
    setSelected(choice);
    setTimeout(() => navigate("/bagPage"), 1000); // 선택 후 1초 후 페이지 이동
  };

  return (
    <Layout>
      {/* 배경 이미지 스타일 */}
      <StyledBackgroundImage />

      {/* 힌트 버튼 */}
      <HintButton onClick={() => setShowHint(!showHint)}>힌트</HintButton>

      {/* 힌트 메시지 표시 */}
      {showHint && !selected && (
        <HintMessage>
          아이스크림을 잘 골라보세요!
        </HintMessage>
      )}

      {/* 아이스크림 선택 영역 */}
      <IcecreamContainer>
        <IcecreamChoice onClick={() => handleSelection("vanilla")}>
          <VanillaIcecream width="100" />
          {selected === "vanilla" && (
            <ResultText>나 녹차 알레르기 있는 거 몰라?</ResultText>
          )}
        </IcecreamChoice>

        <IcecreamChoice onClick={() => handleSelection("greenTea")}>
          <GreenteaIcecream width="100" />
          {selected === "greenTea" && (
            <ResultText>나 유기농 제주 녹차 아이스크림만 먹는 거 몰라?</ResultText>
          )}
        </IcecreamChoice>
      </IcecreamContainer>
    </Layout>
  );
};

export default IcecreamPage;

const Layout = styled.div`
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* 배경 이미지는 뒤로 보내기 */
  opacity: 0.8;
`;

const HintButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #FFA500;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  z-index: 1; /* 버튼을 가장 위로 */
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%); /* 버튼을 상단 가운데로 정렬 */
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

const ResultText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #000;
`;
