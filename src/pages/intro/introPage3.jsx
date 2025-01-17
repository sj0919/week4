import styled from "styled-components";
import { ReactComponent as Laptop } from "../../assets/intro/laptop.svg";
import { useEffect, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/common/arrow.svg";
import { useNavigate } from "react-router";

const IntroPage3Background = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const fullText = `아휴 지겨워, 또 알빠야?\n네가 쌓은 업보로 마을이 무너지고 있어.\n이제 너의 업보를 청산할 시간이야.`;

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
        setTimeout(typeText, 100);
      }
    };

    typeText();
  }, []);

  return (
    <Layout>
      <StyledLaptop />
      <Screen>
        <TypingText>{text}</TypingText>
      </Screen>
      <StyledArrow onClick={() => navigate("/intro4")} />
    </Layout>
  );
};

export default IntroPage3Background;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const StyledLaptop = styled(Laptop)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: auto;
  z-index: 1; /* 노트북 화면이 배경 위에 표시되도록 설정 */
`;

const Screen = styled.div`
  position: absolute;
  top: 13%; /* 노트북 화면 영역에 맞게 조정 */
  left: 30%; /* 노트북 화면 영역에 맞게 조정 */
  width: 38%; /* 노트북 화면 크기에 맞게 조정 */
  height: 47%; /* 노트북 화면 크기에 맞게 조정 */
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2); /* 화면 안쪽 그림자 */
  z-index: 2; /* 텍스트가 노트북 화면 위에 표시되도록 설정 */
`;

const TypingText = styled.p`
  font-size: 18px;
  font-family: "Courier New", Courier, monospace;
  line-height: 1.5;
  white-space: pre-wrap; /* 여러 줄 텍스트 표시 */
  color: black;
  font-size: 29px;
  text-align: center;
`;
const StyledArrow = styled(Arrow)`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
