import { useNavigate } from "react-router";
import styled from "styled-components";
import { ReactComponent as Logo_img } from "../../assets/common/logo_image.svg";
import { ReactComponent as Logo_text } from "../../assets/common/logo_text.svg";
import { ReactComponent as Kakao } from "../../assets/common/kakao_logo.svg";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <StyledLogo_img />
      <StyledLogo_text />
      <Textarea placeholder="아이디" />
      <Textarea placeholder="비밀번호" />
      <LoginButton>로그인</LoginButton>
      <Text>회원가입 / 아이디찾기</Text>
      <Kakao />
    </Layout>
  );
};
export default LoginPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--orange-pri);
  padding: 20px;
  padding-bottom: 100px;
  height: 100%;
`;

const StyledLogo_img = styled(Logo_img)`
  margin-top: 50px;
  margin-bottom: 30px;
`;
const StyledLogo_text = styled(Logo_text)`
  margin-bottom: 80px;
`;
const Textarea = styled.textarea`
  display: flex;
  padding: 8px 10px 13px 10px;
  width: 397px;
  height: 21px;
  border: 1px solid var(--white);
  border-radius: 10px;
  background-color: var(--orange-pri);
  resize: none;
  font-size: 18px;
  margin: 3px;
  &::placeholder {
    color: var(--white);
  }
`;
const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  width: 419px;
  height: 42px;
  background-color: var(--white);
  border: 1px solid var(--white);
  border-radius: 10px;
  font-size: 18px;
  margin: 3px;
`;
const Text = styled.span`
  font-size: 18px;
  color: var(--white);
  margin: 5px;
`;
