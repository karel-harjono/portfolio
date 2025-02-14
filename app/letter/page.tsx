"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import styled, { keyframes, css } from "styled-components";

const slideUp = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: -600px;
  }
`;

const sideSway = keyframes`
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
`;

const moveToCorner = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(-30vw, 30vh) scale(0.6);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #a8e2ff;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const EnvelopeWrapper = styled.div<{ $hasBeenOpened: boolean }>`
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${(props) =>
    props.$hasBeenOpened
      ? css`
          ${moveToCorner} 1s ease-in-out forwards
        `
      : "none"};
  transition: all 0.5s ease-in-out;
`;

const Envelope = styled.div<{ $isOpen: boolean }>`
  position: relative;
  width: 280px;
  height: 180px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: #ff4d6d;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const FlapBase = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  z-index: 3;
`;

const Flap = styled(FlapBase)<{ $isOpen: boolean }>`
  border-left: 140px solid transparent;
  border-right: 140px solid transparent;
  border-bottom: 82px solid transparent;
  border-top: 98px solid #ff4d6d;
  transform-origin: top;
  transform: ${(props) => (props.$isOpen ? "rotatex(180deg)" : "rotatex(0deg)")};
  transition: ${(props) =>
    props.$isOpen ? "transform 0.4s ease, z-index 0.6s" : "transform 0.4s 0.6s ease, z-index 1s"};
  z-index: ${(props) => (props.$isOpen ? 1 : 5)};
`;

const Pocket = styled(FlapBase)`
  border-left: 140px solid #ff758f;
  border-right: 140px solid #ff758f;
  border-bottom: 90px solid #ff8fa3;
  border-top: 90px solid transparent;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const Letter = styled.div<{ $isOpen: boolean }>`
  position: relative;
  background-color: #fff;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 90%;
  top: 5%;
  border-radius: 6px;
  box-shadow: 0 2px 26px rgba(0, 0, 0, 0.12);
  transform: ${(props) => (props.$isOpen ? "translatey(-60px)" : "translatey(0px)")};
  transition: ${(props) =>
    props.$isOpen ? "transform 0.4s 0.6s ease, z-index 0.6s" : "transform 0.4s ease, z-index 1s"};
  z-index: ${(props) => (props.$isOpen ? 2 : 1)};
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9) 25%,
      rgba(255, 219, 219, 0.7) 55%,
      rgba(255, 219, 219, 1) 100%
    );
    z-index: 2;
  }
`;

const LetterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: 1;
`;

const Words = styled.div<{ line: number }>`
  position: absolute;
  left: 10%;
  width: ${(props) => (props.line === 1 ? "20%" : "80%")};
  height: ${(props) => (props.line === 1 ? "7%" : "14%")};
  background-color: #ffd6d6;
  top: ${(props) => {
    switch (props.line) {
      case 1:
        return "15%";
      case 2:
        return "30%";
      case 3:
        return "50%";
      case 4:
        return "70%";
      default:
        return "0";
    }
  }};
`;

const Hearts = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

const Heart = styled.div<{ position: number }>`
  position: absolute;
  bottom: 50%;
  left: ${(props) => {
    switch (props.position) {
      case 1:
        return "20%";
      case 2:
        return "55%";
      case 3:
        return "10%";
      default:
        return "0";
    }
  }};
  width: 30px;
  height: 30px;
  transform: scale(
    ${(props) => {
      switch (props.position) {
        case 1:
          return "0.6";
        case 2:
          return "1";
        case 3:
          return "0.8";
        default:
          return "1";
      }
    }}
  );
  ${(props) => {
    switch (props.position) {
      case 1:
        return css`
          animation: ${slideUp} 4s linear infinite, ${sideSway} 2s ease-in-out infinite alternate;
        `;
      case 2:
        return css`
          animation: ${slideUp} 5s linear infinite, ${sideSway} 4s ease-in-out infinite alternate;
        `;
      case 3:
        return css`
          animation: ${slideUp} 7s linear infinite, ${sideSway} 2s ease-in-out infinite alternate;
        `;
      default:
        return "";
    }
  }}
  animation-fill-mode: forwards;
  animation-delay: 0.7s;

  &:before,
  &:after {
    position: absolute;
    content: "";
    left: 15px;
    top: 0;
    width: 15px;
    height: 25px;
    background: #ff1744;
    border-radius: 15px 15px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  font-weight: 800;
  font-style: normal;
  transition: all 0.1s linear;
  -webkit-appearance: none;
  background-color: transparent;
  border: solid 2px #ff4d6d;
  border-radius: 4px;
  color: #ff4d6d;
  display: inline-block;
  font-size: 14px;
  text-transform: uppercase;
  margin: 5px;
  padding: 10px;
  line-height: 1em;
  text-decoration: none;
  min-width: 120px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #ff4d6d;
    color: #fff;
  }
`;

const DialogBox = styled.div<{ $isVisible: boolean }>`
  color: #000;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  transition: all 0.5s ease-in-out;
  z-index: ${(props) => (props.$isVisible ? 100 : -1)};
`;

const DialogHeader = styled.div`
  text-align: start;
  margin: -2rem -2rem 1.5rem -2rem;
  padding: 1.5rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: linear-gradient(to right, #e23e57, #ff6b6b);
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 10px;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 5px,
      rgba(255, 255, 255, 0.3) 5px,
      rgba(255, 255, 255, 0.3) 10px
    );
  }

  h2 {
    margin: 0;
    color: white;
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const DialogFooter = styled.div`
  text-align: end;
  margin: 1.5rem -2rem -2rem -2rem;
  padding: 1.5rem;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: linear-gradient(to right, #e23e57, #ff6b6b);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 5px,
      rgba(255, 255, 255, 0.3) 5px,
      rgba(255, 255, 255, 0.3) 10px
    );
  }

  span {
    color: white;
    font-family: "Playfair Display", serif;
    font-style: italic;
    font-size: 1.1rem;
  }
`;

const DialogContent = styled.div`
  position: relative;
  padding: 0.5rem 1rem;

  &:before,
  &:after {
    content: '"';
    position: absolute;
    font-family: "Playfair Display", serif;
    font-size: 4rem;
    color: rgba(255, 77, 109, 0.1);
    line-height: 1;
  }

  &:before {
    top: -10px;
    left: -10px;
  }

  &:after {
    bottom: 80px;
    right: 10px;
    transform: rotate(180deg);
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    animation: ${fadeIn} 0.8s ease-out forwards;
    opacity: 0;
    font-family: "Playfair Display", serif;
    color: #4a4a4a;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

export default function LetterPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const ALLOWED_RECIPIENT = "Bess 天意 🦦";
  const ENCODED_ALLOWED_RECIPIENT = btoa(encodeURIComponent(ALLOWED_RECIPIENT));

  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const encodedRecipient = searchParams.get("p");

    if (encodedRecipient) {
      try {
        const decodedRecipient = decodeURIComponent(atob(encodedRecipient));
        if (decodedRecipient === ALLOWED_RECIPIENT) {
          return;
        }
      } catch (e) {
        // Invalid base64 or URI encoding
      }
    }

    router.push("/");
  }, [router, ALLOWED_RECIPIENT]);

  const handleEnvelopeClick = () => {
    if (!hasBeenOpened) {
      setIsOpen(true);
      setHasBeenOpened(true);
      setTimeout(() => {
        setShowDialog(true);
      }, 1500); // Show dialog after letter moves to corner
    }
  };

  return (
    <PageContainer>
      <EnvelopeWrapper $hasBeenOpened={hasBeenOpened}>
        <Envelope $isOpen={isOpen} onClick={handleEnvelopeClick}>
          <Flap $isOpen={isOpen} />
          <Pocket />
          <Letter $isOpen={isOpen}>
            <LetterBackground>
              <Image
                src="/letter/hearts1.png"
                alt="Hearts pattern"
                fill
                style={{ objectFit: "cover" }}
              />
            </LetterBackground>
            <Words line={1} />
            <Words line={2} />
            <Words line={3} />
            <Words line={4} />
          </Letter>
          <Hearts $isOpen={isOpen}>
            <Heart position={1} />
            <Heart position={2} />
            <Heart position={3} />
          </Hearts>
        </Envelope>
      </EnvelopeWrapper>

      <DialogBox $isVisible={showDialog}>
        <DialogHeader>
          <h2>Hi Bess 天意 🦦</h2>
        </DialogHeader>
        <DialogContent>
          <p>
            I want to tell you how much I am grateful for you. I admire your view on life and I
            think you are such an amazing person. I am lucky to have you in my life.
          </p>
          <p>
            You always know how to lift me up, I&apos;m talking about the food(and your company
            ofc), and you remind me that I&apos;m not in this alone.
          </p>
          <p>Thank you for being my valentine Bess. I love you 💖</p>
          <p
            style={{
              paddingTop: "32px",
              marginBottom: "0",
              textAlign: "right",
              fontStyle: "italic",
              fontSize: ".8rem",
            }}
          >
            p.s. I&apos;m really excited for the Siu Yuk tonight, I hope you are too!
          </p>

          <p
            style={{
              marginBottom: "0",
              textAlign: "right",
              fontStyle: "italic",
              fontSize: ".8rem",
            }}
          >
            - Karel
          </p>
        </DialogContent>
      </DialogBox>
    </PageContainer>
  );
}
