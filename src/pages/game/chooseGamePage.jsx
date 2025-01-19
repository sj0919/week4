import styled from "styled-components";
import { ReactComponent as Albbamon } from "../../assets/common/albbamon.svg";
import { ReactComponent as Babbamon } from "../../assets/common/babbamon.svg";
import { ReactComponent as Abbamon } from "../../assets/common/abbamon.svg";
import { ReactComponent as Nabbamon } from "../../assets/common/nabbamon.svg";
import { ReactComponent as Yeppomon } from "../../assets/common/yeppomon.svg";
import { ReactComponent as Map } from "../../assets/intro/map1.svg";
import { useNavigate } from "react-router";

const ChoosegamePage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <StyledMap />
      <Title>알빠빌리지</Title>
      <StyledAlbbamon />
      <StyledBabbamon onClick={() => navigate("/game2intro")} />
      <StyledAbbamon />
      <StyledNabbamon onClick={() => navigate("/game4intro")} />
      <StyledYeppomon onClick={() => navigate("/game1intro")} />
    </Layout>
  );
};

export default ChoosegamePage;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const StyledMap = styled(Map)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.7;
`;

const Title = styled.div`
  font-size: 60px;
  padding-top: 10px;
`;

// 캐릭터 공통 스타일: 클릭 시 그림자 효과 추가
const CharacterStyle = `
  position: absolute;
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); /* Hover 상태에서 그림자 효과 */
  }

  &:active {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6); /* 클릭 상태에서 더 강한 그림자 효과 */
  }
`;

const StyledAlbbamon = styled(Albbamon)`
  ${CharacterStyle}
  top: 35px;
  left: 1150px;
  width: 200px;
`;

const StyledBabbamon = styled(Babbamon)`
  ${CharacterStyle}
  top: 300px;
  left: 250px;
  width: 200px;
`;

const StyledAbbamon = styled(Abbamon)`
  ${CharacterStyle}
  top: 450px;
  left: 1200px;
  width: 200px;
`;

const StyledNabbamon = styled(Nabbamon)`
  ${CharacterStyle}
  top: 140px;
  left: 750px;
  width: 250px;
`;

const StyledYeppomon = styled(Yeppomon)`
  ${CharacterStyle}
  top: 500px;
  left: 550px;
  width: 190px;
`;
