import styled from "styled-components";
import { ReactComponent as Game2Page } from "../../../assets/game/game2/game2_background.svg";
import { ReactComponent as Babbamon } from "../../../assets/common/babbamon.svg";
import { ReactComponent as Monkey } from "../../../assets/game/game2/monkey.svg";
import { ReactComponent as Banana } from "../../../assets/game/game2/banana.svg";

const Game2Intro = () => {
  return (
    <Layout>
      <StyledGame2Page />
      <TextContainer>
        <Text>
          바빠몬, 바빠 죽겠는데 원숭이지옥에 갇혔어요!
          <Line>
            <StyledMonkey />
            가 던지는
            <StyledBanana />를 피해 바빠몬을 구출해주세요!
          </Line>
        </Text>
      </TextContainer>
      <Babbamon />
      <Button>구출하러가기</Button>
    </Layout>
  );
};

export default Game2Intro;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
