import styled from "styled-components";
import { ReactComponent as Game1Page } from "../../../assets/game/game1/game1_background.svg";
import { ReactComponent as Yebbomon } from "../../../assets/game/game1/yebbomon.svg";
import { useNavigate } from "react-router";

const Game1IntroPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <StyledGame1Page />
      <TextContainer>
        <Text>
          예뻐몬이 어딘가 심기가 불편한가 봐요. <br />
          예뻐몬의 마음을 읽고 기분을 풀어주세요!
        </Text>
      </TextContainer>
      <Yebbomon />
      <Button onClick={() => navigate("/icecream")}>기분 풀어주러 가기</Button>
    </Layout>
  );
};

export default Game1IntroPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledGame1Page = styled(Game1Page)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  z-index: -1; /* 뒤로 보내기 */
`;

const TextContainer = styled.div`
  background-color: var(--white);
  width: 820px;
  height: 140px;
  margin: 80px;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
`;

const Text = styled.div`
  font-size: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: var(--white);
  width: 140px;
  height: 50px;
  font-size: 20px;
  border: 0px;
  border-radius: 10px;
`;
