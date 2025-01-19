import styled from "styled-components";
import { ReactComponent as IntroPage1 } from "../../assets/intro/introimage1.svg";
import { ReactComponent as Albbamon } from "../../assets/common/albbamon.svg";
import { ReactComponent as Babbamon } from "../../assets/common/babbamon.svg";
import { ReactComponent as Abbamon } from "../../assets/common/abbamon.svg";
import { ReactComponent as Yeppomon } from "../../assets/common/yeppomon.svg";
import { ReactComponent as Nabbamon } from "../../assets/common/nabbamon.svg";
import { useNavigate } from "react-router";
const IntroPage1Background = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <StyledIntroPage1 />
      <TextContainer>
        <Text>
          알빠빌리지에 오신 여러분 환영합니다. <br />
          여러분은 납치되셨습니다. <br />
          매번 "알빠야?" 하는 당신의 이름은
          <br />
          <OText>"알빠몬"</OText>
        </Text>
      </TextContainer>
      <ButtonContainer>
        <Button onClick={() => navigate("/intro2")}>시작하기</Button>
        <Button>환경설정</Button>
      </ButtonContainer>
      <CharacterContainer>
        <Albbamon />
        <Babbamon />
        <Abbamon />
        <Yeppomon />
        <Nabbamon />
      </CharacterContainer>
    </Layout>
  );
};
export default IntroPage1Background;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;
  gap: 80px;
`;

const StyledIntroPage1 = styled(IntroPage1)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* 뒤로 보내기 */
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 590px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  margin-top: 100px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 170px;
`;
const Button = styled.button`
  background-color: rgba(255, 120, 31, 0.75);
  width: 280px;
  height: 71px;
  font-size: 40px;
  border: 0px;
  border-radius: 10px;
  color: var(--white);
  pointer: cursor;
  &:hover {
    background-color: var(--orange-pri);
  }
`;
const Text = styled.span`
  font-size: 30px;
  text-align: center;
`;
const OText = styled.span`
  font-size: 50px;
  color: var(--orange-pri);
`;
const CharacterContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  align-items: flex-end;
`;
