import styled, { css, keyframes } from 'styled-components'

export const floatKeyframes = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`

export const pulseKeyframes = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`

export const GameContainer = styled.div`
  width: 1080px;
  height: 960px;
  max-width: 95%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.2),
    inset 0 0 15px rgba(255, 255, 255, 0.5);
  padding: 20px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.1) 100%
    );
    z-index: -1;
    border-radius: 30px;
  }
`

export const GameHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
  position: relative;
`

export const GameTitle = styled.h1`
  font-size: 36px;
  color: #0066cc;
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 0 10px rgba(0, 204, 255, 0.3);
  margin-bottom: 10px;
  font-weight: bold;
  letter-spacing: 1px;
`

export const GameSubtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`

export const GameInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.6);
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
`

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InfoLabel = styled.span`
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
`

export const InfoValue = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #0066cc;
`

export const GameCanvasContainer = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #e0f7ff 0%, #f0fbff 100%);
  border: 1px solid rgba(255, 255, 255, 0.6);
`

export const Canvas = styled.canvas`
  display: block;
  background: transparent;
  width: 100%;
`

interface GameOverlayProps {
  active: boolean
}

export const GameOverlay = styled.div<GameOverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  border-radius: 10px;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`

interface OverlayTitleProps {
  float?: boolean
}

export const OverlayTitle = styled.h2<OverlayTitleProps>`
  font-size: 48px;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(0, 204, 255, 0.7);
  color: #fff;

  ${({ float }) =>
    float &&
    css`
      animation: ${floatKeyframes} 3s ease-in-out infinite;
    `}
`

export const OverlayMessage = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
  max-width: 80%;
`

interface ButtonProps {
  pulse?: boolean
}

export const Button = styled.button<ButtonProps>`
  background: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);
  border: none;
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 0 10px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  outline: none;

  ${({ pulse }) =>
    pulse &&
    css`
      animation: ${pulseKeyframes} 1.5s infinite;
    `}

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 6px 20px rgba(0, 0, 0, 0.3),
      inset 0 0 10px rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(1px);
    box-shadow:
      0 2px 10px rgba(0, 0, 0, 0.2),
      inset 0 0 10px rgba(255, 255, 255, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 0.3;
  }
`

export const Instructions = styled.p`
  margin-top: 20px;
  font-size: 12px;
  color: #666;
  text-align: center;
`
