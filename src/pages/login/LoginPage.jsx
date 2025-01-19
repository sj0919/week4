import { useNavigate } from "react-router";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/common/logo_text_nobackground.svg";
import { ReactComponent as IntroPage1 } from "../../assets/intro/introimage1.svg";
import { ReactComponent as Character } from "../../assets/login/characters_line.svg";
import { ReactComponent as Music } from "../../assets/common/music.svg";

import { useRef, useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [playerName, setPlayerName] = useState("");

  const handlePlayAudio = () => {
    console.log("버튼이 클릭되었습니다.");
    const audio = audioRef.current;
    if (audio) {
      console.log("오디오 객체:", audio);
      audio.muted = false; // 음소거 해제
      audio
        .play()
        .then(() => {
          console.log("음악이 재생되었습니다!");
        })
        .catch((error) => {
          console.warn("음악 재생 중 오류:", error);
        });
    } else {
      console.warn("오디오 객체를 찾을 수 없습니다.");
    }
  };

  return (
    <Layout>
      <StyledIntroPage1 />
      <LogoWrapper>
        <StyledLogo />
      </LogoWrapper>
      <InputContainer>
        <NameTextarea
          placeholder="ENTER PLAYER NAME"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <OkayBtn
          onClick={() => navigate("/camera")}
          disabled={!playerName.trim()} // NameTextarea가 비어있으면 비활성화
        >
          ENTER
        </OkayBtn>
      </InputContainer>
      <StyledCharacter />
      <AudioControl>
        <Music onClick={handlePlayAudio} />
      </AudioControl>
      <audio ref={audioRef} src="/assets/music/background1.mp3" loop muted />
    </Layout>
  );
};

export default LoginPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100svh;
`;

const StyledIntroPage1 = styled(IntroPage1)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  z-index: 1; /* 뒤로 보내기 */
  opacity: 0.8;
`;

const LogoWrapper = styled.div`
  z-index: 2; /* 투명 배경 위에 표시 */
  margin-top: 90px;
`;

const StyledLogo = styled(Logo)`
  width: 500px;
  height: auto;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 6px;
  margin-left: 14px;
  padding: 15px;
  border-radius: 10px;
`;

const NameTextarea = styled.textarea`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 35px;
  padding: 12px;
  padding-left: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px); /* 블러 효과 적용 */
  border: 0px;
  border-radius: 10px;
  font-size: 18px;
  z-index: 2; /* 투명 배경 위에 표시 */
  resize: none;
  font-size: 25px;
`;

const OkayBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 40px;
  padding: 30px;
  border: 0px;
  border-radius: 10px;
  font-size: 18px;
  z-index: 2; /* 투명 배경 위에 표시 */
  backdrop-filter: blur(8px); /* 블러 효과 적용 */
  resize: none;
  background-color: rgba(255, 120, 31, 0.55);
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background-color: var(--orange-pri);
  }
  &:disabled {
    background-color: rgba(200, 200, 200, 0.77);
    cursor: not-allowed;
  }
`;

const StyledCharacter = styled(Character)`
  position: fixed;
  bottom: 0;
  z-index: 2; /* 투명 배경 위에 표시 */
`;

const AudioControl = styled.div`
  margin-top: 50px;
  margin-left: 150px;
  z-index: 3; /* 버튼이 위에 표시되도록 설정 */
  button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: rgba(256, 256, 256, 0.3);
    cursor: pointer;
    &:hover {
      background-color: var(--orange-pri);
    }
  }
`;
