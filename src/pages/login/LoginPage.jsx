import { useNavigate } from "react-router";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/common/logo_text_nobackground.svg";
import { ReactComponent as IntroPage1 } from "../../assets/intro/introimage1.svg";
import { ReactComponent as Character } from "../../assets/login/characters_line.svg";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <StyledIntroPage1 />
      <LogoWrapper>
        <StyledLogo />
      </LogoWrapper>
      <LoginButton>카카오로 시작하기</LoginButton>
      <StyledCharacter />
    </Layout>
  );
};
export default LoginPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  background-color: var(--orange-pri);
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
  margin-top: 50px;
`;

const StyledLogo = styled(Logo)`
  width: 600px;
  height: auto;
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  width: 300px;
  height: 42px;
  background-color: #ffe100;
  border: 0px;
  border-radius: 10px;
  font-size: 18px;
  margin: 70px;
  z-index: 2; /* 투명 배경 위에 표시 */
`;

const StyledCharacter = styled(Character)`
  position: fixed;
  bottom: 0;
  z-index: 2; /* 투명 배경 위에 표시 */
`;
