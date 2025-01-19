import styled from "styled-components";
import { ReactComponent as Laptop } from "../../assets/intro/laptop.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const IntroPage4Background = () => {
  const [text, setText] = useState("");
  const [showButton, setShowButton] = useState(false); // 버튼 표시 여부
  const navigate = useNavigate();
  const fullText =
    "알빠빌리지에는 알빠야? 라는 말을 \n입버릇처럼 하는 몬스터들이 살고 있었다.\n그 결과, 마을은 점점 더 큰 혼란에 빠지고 말았다. \n그리고 매번 “알빠야?”를 외치던 당신은 \n결국 몬스터 마을로 끌려가 알빠몬이 되고 만다. \n알빠몬이 된 당신, 이 혼란스러운 마을을 구출해야한다!!!";

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
        setTimeout(typeText, 100);
      } else {
        setShowButton(true); // 모든 텍스트가 타이핑되면 버튼 표시
      }
    };
    if (index < fullText.length - 1) {
      typeText();
    }
  }, []);

  return (
    <Layout>
      <StyledLaptop />
      <Screen>
        <TypingText>{text}</TypingText>
        {showButton && (
          <Button onCLick={() => navigate("/choosegame")}>시작하기</Button>
        )}{" "}
        {/* 버튼 표시 */}
      </Screen>
    </Layout>
  );
};

export default IntroPage4Background;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100svh;
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
  flex-direction: column; /* 텍스트와 버튼을 세로로 정렬 */
  align-items: center;
  justify-content: space-between; /* 텍스트와 버튼 사이 간격 */
  padding: 20px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2); /* 화면 안쪽 그림자 */
  z-index: 2; /* 텍스트가 노트북 화면 위에 표시되도록 설정 */
`;

const TypingText = styled.p`
  font-size: 24px;
  font-family: "Courier New", Courier, monospace;
  line-height: 1.5;
  white-space: pre-wrap; /* 여러 줄 텍스트 표시 */
  color: black;
  text-align: center;
  margin-bottom: auto; /* 텍스트와 버튼 간 간격 */
`;

const Button = styled.button`
  background-color: #ff6600; /* 버튼 색상 */
  width: 204px;
  height: 39px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: auto;

  &:hover {
    background-color: #ff4500; /* 호버 효과 */
  }
`;
