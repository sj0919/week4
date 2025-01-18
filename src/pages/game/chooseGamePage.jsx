import styled from "styled-components";
import { ReactComponent as IntroPage1 } from "../../assets/intro/introimage1.svg";
import { ReactComponent as Albbamon } from "../../assets/common/albbamon.svg";
import { ReactComponent as Babbamon } from "../../assets/common/babbamon.svg";
import { ReactComponent as Abbamon } from "../../assets/common/abbamon.svg";
import { ReactComponent as Yeppomon } from "../../assets/common/yeppomon.svg";
import { ReactComponent as Nabbamon } from "../../assets/common/nabbamon.svg";
import { useNavigate } from "react-router";
const ChooseGamePage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <StyledIntroPage1 />
      <ButtonContainer>
        <Button onClick={() => navigate("/")}>game1 예뻐몬을 달래라</Button>
        <Button onClick={() => navigate("/")}>game2 바빠몬을 구출하라</Button>
        <Button onClick={() => navigate("/")}>game3 아빠몬을 퇴근시켜라</Button>
        <Button onClick={() => navigate("/")}>
          game4 나빠몬의 유혹을 이겨내라
        </Button>
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
export default ChooseGamePage;

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
  width: 515px;
  height: 362px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  margin-top: 60px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 160px;
`;
const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.6);
  width: 400px;
  height: 71px;
  font-size: 30px;
  border: 0px;
  border-radius: 10px;
  color: var(--ㅠㅣㅁ차);
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
