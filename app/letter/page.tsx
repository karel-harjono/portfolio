"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import styled, { keyframes, css } from "styled-components";
import {
  FloatingHearts as Hearts,
  FloatingHeart as Heart,
  FloatingHearts,
} from "@/app/_components/Hearts";

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  transition: all 0.5s ease-in-out;
  z-index: ${(props) => (props.$isVisible ? 100 : -1)};
`;

const DialogHeader = styled.div`
  text-align: start;
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
  padding: 0.5rem 1.5rem;
  overflow-y: scroll;
  margin: 1rem 0;
  scrollbar-width: thin; /* Firefox */
  -ms-overflow-style: thin; /* IE and Edge */

  &::-webkit-scrollbar {
    width: 6px; /* Chrome, Safari and Opera */
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 77, 109, 0.2);
    border-radius: 3px;
  }

  &:before,
  &:after {
    content: '"';
    position: sticky;
    font-family: "Playfair Display", serif;
    font-size: 4rem;
    color: rgba(255, 77, 109, 0.1);
    line-height: 0.1;
  }

  &:before {
    top: -10px;
    left: -10px;
  }

  &:after {
    bottom: 50px;
    left: 95%;
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
  const [decodedRecipient, setDecodedRecipient] = useState("");

  const ALLOWED_RECIPIENT = useMemo(() => ["Bess 天意 🦦", "Kevin Wang", "Ethan Sidharta"], []);

  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const encodedRecipient = searchParams.get("p");
    if (encodedRecipient) {
      try {
        const decodedRecipient = decodeURIComponent(atob(encodedRecipient)).trim();
        if (!ALLOWED_RECIPIENT.includes(decodedRecipient)) {
          router.push("/");
          return;
        }
        setDecodedRecipient(decodedRecipient);
      } catch (e) {
        // Invalid base64 or URI encoding
      }
    }
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

  const dialogContent = useMemo(() => {
    if (decodedRecipient === "Bess 天意 🦦") {
      return (
        <>
          <p>
            I want to tell you how much I am grateful for you. I admire your view on life and I
            think you are such an amazing person. I am lucky to have you in my life.
          </p>
          <p>
            You always know how to lift me up, I&apos;m talking about the food(and your company
            ofc), and you remind me that I&apos;m not in this alone.
          </p>
          <p>Thank you for being my valentine {decodedRecipient.split(" ")[0]}. I love you 💖</p>
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
        </>
      );
    } else if (decodedRecipient === "Kevin Wang") {
      return (
        <>
          <p>
            Happy Valentine Mr. Wang. I hope you have a great day! I enjoy our friendship and I
            really do appreciate the marbles we both put into the jars.
          </p>
          <p>
            You should visit me at Picnic later at 2-4pm. I&apos;ll be there with a big smile on my
            face.
          </p>
          <p>Thank you for being my friend. Love you brother 💖</p>
        </>
      );
    } else if (decodedRecipient === "Ethan Sidharta") {
      return (
        <>
          <p>
            Happy Valentine Ethan. I&apos;m so glad to have you. You&apos;re the blessing in
            disguise from my Red Flag Arc 🚩
          </p>
          <p>
            You are such an open-minded person, and I admire you for that. I&apos;m excited to see
            where you go in life, and I&apos;m genuinely rooting for you.
          </p>
          <p>
            Thanks again for all the support you have given me. I really do appreciate it. I&apos;m
            looking forward to see where this friendship will go. See you in Toronto!
          </p>
        </>
      );
    }
  }, [decodedRecipient]);

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
          <FloatingHearts
            isOpen={isOpen}
            $zIndex={3}
            hearts={[
              { $color: "#ff69b4", $size: "40px" }, // First heart
              { $color: "#ff1744", $size: "50px" }, // Second heart
              { $color: "#ff4081", $size: "45px" }, // Third heart
            ]}
          />
        </Envelope>
      </EnvelopeWrapper>

      <DialogBox $isVisible={showDialog}>
        <DialogHeader>
          <h2>Hi {decodedRecipient}</h2>
        </DialogHeader>
        <DialogContent>
          {dialogContent}

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
