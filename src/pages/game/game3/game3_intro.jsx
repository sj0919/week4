import styled from "styled-components";
import { ReactComponent as Game3Page } from "../../../assets/game/game3/game3_background.svg";
import { ReactComponent as Abbamon } from "../../../assets/common/abbamon.svg";
import { ReactComponent as Monkey } from "../../../assets/game/game2/monkey.svg";
import { ReactComponent as Banana } from "../../../assets/game/game2/banana.svg";
import { useNavigate } from "react-router";

const Game3Intro = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <StyledGame3Page />
      <TextContainer>
        <Text>
          아빠몬이 퇴근길에 Traffic Jam에 갇혔어요! <br />
          자동차들을 앞뒤로 밀어 아빠몬을 데려오세요!
        </Text>
      </TextContainer>
      <Abbamon />
      <Button onClick={() => navigate("/game2")}>구출하러가기</Button>
    </Layout>
  );
};

export default Game3Intro;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledGame3Page = styled(Game3Page)`
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
  width: 140px;
  height: 50px;
  font-size: 20px;
  border: 0px;
  border-radius: 10px;
`;
