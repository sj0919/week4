import styled, { keyframes } from "styled-components";
import { ReactComponent as IntroPage1 } from "../../assets/intro/introimage1.svg";
import { ReactComponent as Albbamon } from "../../assets/common/albbamon.svg";
import { ReactComponent as Babbamon } from "../../assets/common/babbamon.svg";
import { ReactComponent as Abbamon } from "../../assets/common/abbamon.svg";
import { ReactComponent as Yeppomon } from "../../assets/common/yeppomon.svg";
import { ReactComponent as Nabbamon } from "../../assets/common/nabbamon.svg";

const IntroPage2Background = () => {
  return (
    <Layout>
      <StyledIntroPage1 />
      <ScrollingTextContainer>
        <Text>
          "왜 이런 걸 샀어? 이건 별로야."
          <br />
          "알빠야?"
          <br />
          "너는 왜 요즘 밤늦게까지 깨어 있어?"
          <br />
          "알빠야?"
          <br />
          "왜 너는 항상 점심에 김밥만 먹어?"
          <br />
          "알빠야?"
          <br />
          "너 오늘 양말 왜 짝짝이로 신었어?"
          <br />
          "알빠야?"
          <br />
          "너는 왜 이렇게 늦게까지 공부해?"
          <br />
          "알빠야?"
          <br />
        </Text>
      </ScrollingTextContainer>
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

export default IntroPage2Background;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden; /* 텍스트가 화면 밖으로 나가지 않도록 설정 */
`;

const StyledIntroPage1 = styled(IntroPage1)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* 뒤로 보내기 */
`;

const scrollAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const ScrollingTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* 텍스트가 컨테이너 밖으로 나가지 않도록 설정 */
`;

const Text = styled.div`
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: black;
  animation: ${scrollAnimation} 10s linear infinite;
`;

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  align-items: flex-end;
`;
