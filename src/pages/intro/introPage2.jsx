import styled, { keyframes } from "styled-components";
import { ReactComponent as IntroPage1 } from "../../assets/intro/introimage1.svg";
import { ReactComponent as Albbamon } from "../../assets/common/albbamon.svg";
import { ReactComponent as Babbamon } from "../../assets/common/babbamon.svg";
import { ReactComponent as Abbamon } from "../../assets/common/abbamon.svg";
import { ReactComponent as Yeppomon } from "../../assets/common/yeppomon.svg";
import { ReactComponent as Nabbamon } from "../../assets/common/nabbamon.svg";
import { ReactComponent as Arrow } from "../../assets/common/arrow.svg";
import { useNavigate } from "react-router";

const IntroPage2Background = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <StyledIntroPage1 />
      <ScrollingTextContainer>
        <Text>
          "왜 이런 걸 샀어? 이건 별로야." 알빠야? <br />
          "너는 왜 요즘 밤늦게까지 깨어 있어? 알빠야?
          <br /> "왜 너는 항상 점심에 김밥만 먹어?"" 알빠야? <br />
          "너 오늘 양말 왜 짝짝이로 신었어?" 알빠야? <br />
          "너는 왜 이렇게 늦게까지 공부해?" 알빠야? <br />
          "너는 왜 항상 카페에서 공부해?" 알빠야? <br />
          "왜 너는 매일 커피만 마셔?" 알빠야? <br />
          "왜 너는 항상 같은 티셔츠만 입어?" 알빠야? <br />
          "너는 왜 이렇게 혼자 다녀?" 알빠야? <br />
          "왜 너는 새로 산 신발을 안 신고 다녀?" 알빠야? <br />
          "너는 왜 시험 공부를 전날에만 해?" 알빠야? <br />
          "왜 넌 항상 이 시간에 밥을 먹어?" 알빠야? <br />
          "왜 너는 여행 가는 걸 별로 안 좋아해?" 알빠야? <br />
          "너는 왜 항상 노트북을 들고 다녀?" 알빠야? <br />
          "왜 너는 사진 찍을 때 항상 정면만 봐?" 알빠야?
        </Text>
      </ScrollingTextContainer>
      <StyledArrow
        onClick={() => {
          console.log("Arrow clicked");
          navigate("/intro3");
        }}
      />
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
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const ScrollingTextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* 텍스트가 컨테이너 밖으로 나가지 않도록 설정 */
`;
const Text = styled.div`
  font-size: 25px;
  line-height: 40px;
  text-align: center;
  color: black;
  animation: ${scrollAnimation} 5s linear infinite;
  white-space: nowrap; /* 한 줄로 표시 */
  margin-bottom: 100px;
`;

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  align-items: flex-end;
`;

const StyledArrow = styled(Arrow)`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
