import styled from "styled-components";
import { ReactComponent as Logo_text } from "../../assets/common/logo_text.svg";
import { ReactComponent as Characters } from "../../assets/intro/character.svg";
import { useRef, useState, useEffect } from "react";
import { ReactComponent as Camera } from "../../assets/common/camera.svg";

const CameraPage = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    // 카메라 스트림 활성화
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  }, []);

  const takePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // 캡처한 이미지를 data URL로 저장
      const photoData = canvas.toDataURL("image/png");
      setPhoto(photoData);
    }
  };

  return (
    <Layout>
      <TitleContainer>
        <StyledLogo_text />
        <Characters />
      </TitleContainer>
      <CameraContainer>
        <VideoContainer>
          <Video ref={videoRef} autoPlay muted />
          <Canvas ref={canvasRef} />
        </VideoContainer>
        <ButtonContainer>
          <Text>
            여러분의 얼굴을
            <br /> <BText>최대한 예쁘게 찍어주세요</BText>
            어쩌면...
            <PText>마지막 정상적인 모습이 될지도...</PText>
            <br />
          </Text>
          <CaptureButton onClick={takePhoto}>
            <Camera />
            찰칵 버튼
          </CaptureButton>
        </ButtonContainer>
        {photo && (
          <PhotoPreview>
            <h3>촬영한 사진</h3>
            <img src={photo} alt="Captured" />
          </PhotoPreview>
        )}
      </CameraContainer>
    </Layout>
  );
};

export default CameraPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--orange-pri);
  height: 100vh;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  margin-left: 120px;
`;

const StyledLogo_text = styled(Logo_text)`
  height: 65px;
`;

const CameraContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-left: 160px;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  height: auto;
  background-color: black;
  overflow: hidden;
  border-radius: 30px;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
`;

const Canvas = styled.canvas`
  display: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: 70px;
`;

const Text = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 36px;
`;
const BText = styled(Text)`
  color: #002bc8;
`;
const PText = styled(Text)`
  color: #86007e;
`;
const CaptureButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  font-size: 24px;
  background-color: var(--white);
  color: var(--black);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  gap: 10px;

  &:hover {
    background-color: var(--orange-pri);
  }
`;

const PhotoPreview = styled.div`
  margin-top: 20px;
  text-align: center;

  img {
    margin-top: 10px;
    max-width: 100%;
    border: 2px solid var(--blue-pri);
    border-radius: 10px;
  }
`;
