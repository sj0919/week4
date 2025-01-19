import styled from "styled-components";
import { ReactComponent as Game4Page } from "../../../assets/game/game4/game4_background.svg";
import { ReactComponent as Nabbamon } from "../../../assets/common/nabbamon.svg";
import { ReactComponent as Monkey } from "../../../assets/game/game2/monkey.svg";
import { ReactComponent as Banana } from "../../../assets/game/game2/banana.svg";
import { useNavigate } from "react-router";

const Game4Intro = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <StyledGame4Page />
      <TextContainer>
        <Text>
          나빠몬의 유혹을 이겨내고 <br />
          <OText>알빠야? </OText>라고 말하세요
        </Text>
      </TextContainer>
      <StyledNabbamon />
      <Button onClick={() => navigate("/game4")}>유혹 이겨내러가기</Button>
    </Layout>
  );
};

export default Game4Intro;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledGame4Page = styled(Game4Page)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  z-index: -1; /* 뒤로 보내기 */
`;

const TextContainer = styled.div`
  width: 820px;
  height: 140px;
  margin: 80px;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
`;

const Text = styled.div`
  font-size: 35px;
  display: inline;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-size: 42px;
`;
const OText = styled(Text)`
  color: var(--orange-pri);
`;
const Button = styled.button`
  background-color: var(--white);
  width: 170px;
  height: 50px;
  font-size: 20px;
  border: 0px;
  border-radius: 10px;
`;
const StyledNabbamon = styled(Nabbamon)`
  height: 300px;
`;
