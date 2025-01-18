import styled from "styled-components";
import { ReactComponent as Game2Page } from "../../../assets/game/game2/game2_background.svg";
import { ReactComponent as Babbamon } from "../../../assets/common/babbamon.svg";
import { ReactComponent as Monkey } from "../../../assets/game/game2/monkey.svg";
import { ReactComponent as Banana } from "../../../assets/game/game2/banana.svg";
import { useNavigate } from "react-router";

const Game2Fail = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <StyledGame2Page />
      <TextContainer>
        <Text>Game Over 비상 비상 바빠몬 구출실패</Text>
      </TextContainer>
      <Babbamon />
      <Button onClick={() => navigate("/choosegame")}>맵으로 돌아가기</Button>
    </Layout>
  );
};

export default Game2Fail;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100svh;
`;

const StyledGame2Page = styled(Game2Page)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  z-index: -1; /* 뒤로 보내기 */
`;

const TextContainer = styled.div`
  background-color: var(--white);
  width: 700px;
  height: 80px;
  margin-top: 150px;
  margin-bottom: 100px;
  padding-top: 20px;
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

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const StyledMonkey = styled(Monkey)`
  width: 90px;
  height: auto;
  margin: 0 10px; /* 텍스트와 간격 조정 */
`;

const StyledBanana = styled(Banana)`
  width: 80px;
  height: auto;
  margin: 0 10px; /* 텍스트와 간격 조정 */
`;

const Button = styled.button`
  background-color: var(--white);
  width: 170px;
  height: 50px;
  font-size: 20px;
  border: 0px;
  border-radius: 10px;
`;
