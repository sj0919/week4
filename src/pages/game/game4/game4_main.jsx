import styled from "styled-components";
import { ReactComponent as Game4Page } from "../../../assets/game/game4/game4_background.svg";
import { ReactComponent as Nabbamon } from "../../../assets/game/game4/nabbamon_2.svg";
import { ReactComponent as Albbamon } from "../../../assets/game/game4/albbamon_2.svg";
import { ReactComponent as Mic } from "../../../assets/game/game4/microphone.svg";
import { ReactComponent as Chat } from "../../../assets/game/game4/chatbox.svg";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const Game4 = () => {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert(
        "이 브라우저는 음성 인식을 지원하지 않습니다. Chrome을 사용해주세요."
      );
      return;
    }
  }, []);

  const startListening = () => {
    console.log("Button clicked, startListening triggered");
    if (!("webkitSpeechRecognition" in window)) {
      alert("이 브라우저는 음성 인식을 지원하지 않습니다.");
      console.error("webkitSpeechRecognition is not available");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "ko-KR";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      console.log("Speech recognition started");
      setIsListening(true);
      setTranscript("");
    };

    recognition.onresult = (event) => {
      console.log("Speech recognition result received");
      const result = event.results[0][0].transcript;
      setTranscript(result);

      if (result.trim() === "알빠야" || result.trim() === "알 바야") {
        alert("정답입니다! 다음 단계로 이동합니다.");
        navigate("/game4-2");
      } else {
        alert(`"${result}" 라고 들었어요. 다시 시도해주세요.`);
      }
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      alert(`오류가 발생했습니다: ${event.error}`);
      setIsListening(false);
    };

    recognition.onend = () => {
      console.log("Speech recognition ended");
      setIsListening(false);
    };

    try {
      recognition.start();
    } catch (error) {
      console.error("Error starting speech recognition:", error);
      alert("음성 인식을 시작하는 데 문제가 발생했습니다.");
    }
  };

  return (
    <Layout>
      <StyledGame4Page />
      <TextContainer>
        <StyledChat />
        <Text>
          야...아름관 앞에서 <br /> 수상한 두 명을 봤는데 <br /> 한 명이
          공진우래ㅋㅋㅋㅋㅋ
        </Text>
      </TextContainer>

      <CharacterContainer>
        <Nabbamon />
        <Albbamon />
      </CharacterContainer>
      <StyledMic
        onClick={() => {
          console.log("Button clicked");
          startListening();
        }}
        disabled={isListening}
      >
        ㅇㅇㅇ
        {isListening ? "듣는 중..." : "유혹 이겨내러가기"}
      </StyledMic>
      {transcript && <p>인식된 텍스트: {transcript}</p>}
    </Layout>
  );
};

export default Game4;

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
  margin: 70px;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  position: relative; /* 자식 요소들의 z-index를 설정하기 위해 relative 추가 */
`;

const StyledChat = styled(Chat)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1; /* 말풍선이 뒤로 가도록 설정 */
`;

const Text = styled.div`
  position: absolute;
  top: 55%;
  left: 21%;
  transform: translate(-50%, -50%); /* 텍스트를 말풍선 중앙에 위치 */
  z-index: 2; /* 말풍선(Chat)보다 위에 오도록 설정 */
  font-size: 20px; /* 적절한 글자 크기 설정 */
  color: var(--white); /* 글자 색상 설정 */
  text-align: center; /* 텍스트 중앙 정렬 */
  padding: 5px;
  font-size: 25px;
`;

const OText = styled(Text)`
  color: var(--orange-pri);
`;

const Button = styled.button`
  background-color: red; /* 시각적으로 명확하게 보이도록 설정 */
  color: white;
  width: 170px;
  height: 50px;
  font-size: 20px;
  border: 0px;
  border-radius: 10px;
  cursor: pointer;
  position: relative; /* 상대 위치로 설정 */
  z-index: 1000; /* 다른 요소 위로 올림 */
  margin-top: 20px; /* 다른 요소와 간격 확보 */
`;

const StyledNabbamon = styled(Nabbamon)`
  height: 300px;
`;

const StyledMic = styled(Mic)`
  cursor: pointer; /* 클릭 가능한 커서로 변경 */
  pointer-events: auto; /* 클릭 이벤트 활성화 */
  width: 100px; /* 적절한 크기 설정 */
  height: 100px;
  z-index: 10; /* 다른 요소 위로 올리기 */
  position: absolute; /* Albbamon 위로 위치 설정 */
  bottom: 520px; /* 화면 하단에서 120px 위 */
  right: 540px; /* 화면 오른쪽에서 100px */
`;
const CharacterContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
`;
