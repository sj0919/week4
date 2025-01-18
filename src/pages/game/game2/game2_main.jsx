import styled from "styled-components";
import { ReactComponent as Game2Page } from "../../../assets/game/game2/game2_background.svg";
import { ReactComponent as Babbamon } from "../../../assets/common/babbamon.svg";
import { ReactComponent as Monkey } from "../../../assets/game/game2/monkey.svg";
import { ReactComponent as Banana } from "../../../assets/game/game2/banana.svg";
import { ReactComponent as Clock } from "../../../assets/game/game2/clock.svg";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const Game2 = () => {
  const navigate = useNavigate();
  const [babbamonPosition, setBabbamonPosition] = useState(50); // Babbamon X축 위치 (중앙 기준 %)
  const [bananas, setBananas] = useState([
    { x: 20, y: -10 },
    { x: 50, y: -10 },
    { x: 80, y: -10 },
  ]); // 여러 바나나 위치 초기화
  const [isHit, setIsHit] = useState(false); // 충돌 여부
  const [score, setScore] = useState(90); // 점수 초기값
  const [timeLeft, setTimeLeft] = useState(15); // 타이머 20초

  // 키보드 이벤트로 Babbamon 이동
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setBabbamonPosition((prev) => Math.max(prev - 5, 0));
      } else if (e.key === "ArrowRight") {
        setBabbamonPosition((prev) => Math.min(prev + 5, 100));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 바나나 떨어뜨리기
  useEffect(() => {
    const dropBananas = setInterval(() => {
      setBananas((prevBananas) =>
        prevBananas.map((banana) => {
          if (banana.y >= 90) {
            // 바나나가 화면 아래로 완전히 떨어지면 초기화
            return { x: Math.random() * 100, y: -10 }; // 초기 Y값을 -10으로 설정
          }
          return { ...banana, y: banana.y + 6 }; // 바나나가 더 빠르게 떨어지도록 증가값을 6으로 설정
        })
      );
    }, 50);

    return () => clearInterval(dropBananas);
  }, []);

  // 타이머 설정
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      if (score > 0) {
        navigate("/game2success"); // 성공 시 이동
      } else {
        navigate("/game2fail"); // 실패 시 이동
      }
    }
  }, [timeLeft, score, navigate]);

  // 충돌 감지
  useEffect(() => {
    const babbamonWidth = 10; // Babbamon의 가로 크기 (% 기준)
    const babbamonHeight = 10; // Babbamon의 세로 크기 (% 기준)
    const bananaWidth = 5; // 바나나의 가로 크기 (% 기준)
    const bananaHeight = 5; // 바나나의 세로 크기 (% 기준)

    bananas.forEach((banana) => {
      if (
        Math.abs(banana.x - babbamonPosition) <
          (babbamonWidth + bananaWidth) / 2 && // X축 충돌 여부
        banana.y > 100 - babbamonHeight - bananaHeight && // Y축 충돌 여부
        banana.y < 100 - babbamonHeight / 2 // 충돌 판정 범위 조정
      ) {
        setIsHit(true);
        setScore((prev) => {
          const newScore = Math.max(prev - 10, 0);
          if (newScore === 0) {
            navigate("/game2fail"); // 점수 0일 때 실패로 이동
          }
          return newScore;
        });
        setTimeout(() => setIsHit(false), 500); // 0.5초 후 충돌 상태 초기화
        setBananas((prevBananas) =>
          prevBananas.map((b) =>
            b === banana ? { x: Math.random() * 100, y: -10 } : b
          )
        );
      }
    });
  }, [bananas, babbamonPosition, navigate]);

  return (
    <Layout>
      <StyledGame2Page />

      {/* Timer Section */}
      <TextContainer>
        <Text>
          <StyledClock />
          시간: {timeLeft}s
        </Text>
        <Text>점수: {score}</Text>
      </TextContainer>

      {/* Monkey and Bananas */}
      {bananas.map((banana, index) => (
        <BananaContainer key={index}>
          <StyledMonkey style={{ left: `${banana.x}%` }} />
          <StyledBanana
            style={{
              left: `${banana.x}%`,
              top: `${banana.y}%`,
            }}
          />
        </BananaContainer>
      ))}

      {/* Babbamon */}
      <BabbamonContainer style={{ left: `${babbamonPosition}%` }}>
        <StyledBabbamon
          style={{
            filter: isHit ? "brightness(0.5) hue-rotate(45deg)" : "none",
            transform: isHit ? "scale(1.2)" : "scale(1)",
            transition: "transform 0.2s, filter 0.2s",
          }}
        />
      </BabbamonContainer>
    </Layout>
  );
};

export default Game2;

// Styled Components
const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const StyledGame2Page = styled(Game2Page)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  padding: 7px 15px;
  gap: 10px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 32px;
  align-text: center;
`;

const BananaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledMonkey = styled(Monkey)`
  position: absolute;
  top: 5%;
  width: 170px;
  height: auto;
`;

const StyledBanana = styled(Banana)`
  position: absolute;
  width: 100px; /* 적절한 크기 설정 */
  height: auto;
  transition: top 0.05s linear;
`;

const BabbamonContainer = styled.div`
  position: absolute;
  bottom: 10%;
  transform: translateX(-50%);
  width: 50px;
`;

const StyledBabbamon = styled(Babbamon)`
  width: 250px;
  height: auto;
`;

const StyledClock = styled(Clock)`
  width: 36px;
`;

const Button = styled.button`
  position: absolute;
  bottom: 50px;
  background-color: var(--white);
  color: #333;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
