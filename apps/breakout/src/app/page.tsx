'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './page.styles';

// Game constants
const BRICK_ROW_COUNT = 5;
const BRICK_COLUMN_COUNT = 10;
const BRICK_WIDTH = 75;
const BRICK_HEIGHT = 20;
const BRICK_PADDING = 10;
const BRICK_OFFSET_TOP = 60;
const BRICK_OFFSET_LEFT = 30;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 15;
const BALL_RADIUS = 10;

// Types
export type Brick = {
  x: number;
  y: number;
  status: number;
  color: string;
};

export type GameState = {
  ballX: number;
  ballY: number;
  ballSpeedX: number;
  ballSpeedY: number;
  paddleX: number;
  rightPressed: boolean;
  leftPressed: boolean;
  bricks: Brick[][];
  bricksLeft: number;
};


const BreakoutGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [highScore, setHighScore] = useState<number>(0);

  // Game state
  const gameState = useRef<GameState>({
    ballX: 0,
    ballY: 0,
    ballSpeedX: 4,
    ballSpeedY: -4,
    paddleX: 0,
    rightPressed: false,
    leftPressed: false,
    bricks: [],
    bricksLeft: 0,
  });

  // Initialize bricks
  const initBricks = useCallback((): Brick[][] => {
    const bricks: Brick[][] = [];
    for (let c = 0; c < BRICK_COLUMN_COUNT; c++) {
      bricks[c] = [];
      for (let r = 0; r < BRICK_ROW_COUNT; r++) {
        const brickX = c * (BRICK_WIDTH + BRICK_PADDING) + BRICK_OFFSET_LEFT;
        const brickY = r * (BRICK_HEIGHT + BRICK_PADDING) + BRICK_OFFSET_TOP;
        const hue = (r * 60) % 360; // Different colors for each row
        bricks[c][r] = { x: brickX, y: brickY, status: 1, color: `hsl(${hue}, 80%, 60%)` };
      }
    }
    return bricks;
  }, []);

  // Reset game
  const resetGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    gameState.current = {
      bricks: initBricks(),
      bricksLeft: BRICK_ROW_COUNT * BRICK_COLUMN_COUNT,
      ballX: canvas.width / 2,
      ballY: canvas.height - 30,
      ballSpeedX: 4,
      ballSpeedY: -4,
      paddleX: (canvas.width - PADDLE_WIDTH) / 2,
      rightPressed: false,
      leftPressed: false,
    };
    setScore(0);
    setLives(3);
    setGameOver(false);
    setGameWon(false);
    setGameStarted(false);
  }, [initBricks]);

  // Handle keyboard events
  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Right' || e.key === 'ArrowRight') {
        gameState.current.rightPressed = true;
      } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        gameState.current.leftPressed = true;
      } else if (e.key === ' ' && !gameStarted && !gameOver && !gameWon) {
        setGameStarted(true);
      }
    };

    const keyUpHandler = (e: KeyboardEvent) => {
      if (e.key === 'Right' || e.key === 'ArrowRight') {
        gameState.current.rightPressed = false;
      } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        gameState.current.leftPressed = false;
      }
    };

    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, [gameStarted, gameOver, gameWon]);

  // Handle touch events for mobile
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const relativeX = e.touches[0].clientX - canvas.getBoundingClientRect().left;
      if (relativeX > 0 && relativeX < canvas.width) {
        gameState.current.paddleX = relativeX - PADDLE_WIDTH / 2;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!gameStarted && !gameOver && !gameWon) {
        setGameStarted(true);
      }
    };

    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchstart', handleTouchStart);

    return () => {
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
    };
  }, [gameStarted, gameOver, gameWon]);

  // Initialize game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const maxWidth = 800;
      const width = Math.min(window.innerWidth - 40, maxWidth);
      const height = 500;

      canvas.width = width;
      canvas.height = height;

      // Adjust brick layout if canvas is too narrow
      if (width < BRICK_COLUMN_COUNT * (BRICK_WIDTH + BRICK_PADDING) + BRICK_OFFSET_LEFT * 2) {
        const newBrickWidth = (width - BRICK_OFFSET_LEFT * 2 - BRICK_PADDING * (BRICK_COLUMN_COUNT - 1)) / BRICK_COLUMN_COUNT;
        const bricks = gameState.current.bricks;
        for (let c = 0; c < BRICK_COLUMN_COUNT; c++) {
          for (let r = 0; r < BRICK_ROW_COUNT; r++) {
            if (bricks[c] && bricks[c][r]) {
              bricks[c][r].x = c * (newBrickWidth + BRICK_PADDING) + BRICK_OFFSET_LEFT;
            }
          }
        }
      }
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    resetGame();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [resetGame]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(gameState.current.ballX, gameState.current.ballY, BALL_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = '#0066cc';
      ctx.shadowColor = 'rgba(0, 102, 204, 0.5)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetY = 2;
      ctx.fill();
      ctx.closePath();
      ctx.shadowColor = 'transparent';
    };

    const drawPaddle = () => {
      ctx.beginPath();
      ctx.roundRect(
        gameState.current.paddleX,
        canvas.height - PADDLE_HEIGHT - 10,
        PADDLE_WIDTH,
        PADDLE_HEIGHT,
        [PADDLE_HEIGHT / 2]
      );
      ctx.fillStyle = '#4facfe';
      ctx.shadowColor = 'rgba(0, 102, 204, 0.5)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetY = 2;
      ctx.fill();
      ctx.closePath();
      ctx.shadowColor = 'transparent';
    };

    const drawBricks = () => {
      for (let c = 0; c < BRICK_COLUMN_COUNT; c++) {
        for (let r = 0; r < BRICK_ROW_COUNT; r++) {
          const brick = gameState.current.bricks[c][r];
          if (brick.status === 1) {
            ctx.beginPath();
            ctx.roundRect(
              brick.x,
              brick.y,
              BRICK_WIDTH,
              BRICK_HEIGHT,
              [5]
            );
            ctx.fillStyle = brick.color;
            ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
            ctx.shadowBlur = 5;
            ctx.shadowOffsetY = 3;
            ctx.fill();
            ctx.closePath();
            ctx.shadowColor = 'transparent';

            // Add glossy overlay effect
            ctx.beginPath();
            ctx.roundRect(
              brick.x + 2,
              brick.y + 2,
              BRICK_WIDTH - 4,
              BRICK_HEIGHT / 2,
              [5, 5, 0, 0]
            );
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    };

    const collisionDetection = () => {

      for (let c = 0; c < BRICK_COLUMN_COUNT; c++) {
        for (let r = 0; r < BRICK_ROW_COUNT; r++) {
          // current brick
          const brick = gameState.current.bricks[c][r];
          // collisionDetection
          const ballTouchingBrick = gameState.current.ballX > brick.x &&
              gameState.current.ballX < brick.x + BRICK_WIDTH &&
              gameState.current.ballY > brick.y &&
             gameState.current.ballY < brick.y + BRICK_HEIGHT

          if (brick.status === 1) {
            if (
              ballTouchingBrick
            ) {
              gameState.current.ballSpeedY = -gameState.current.ballSpeedY;
              brick.status = 0;
              setScore(prevScore => {
                const newScore = prevScore + 10;
                if (newScore > highScore) {
                  setHighScore(newScore);
                }
                return newScore;
              });

              // Check if all bricks are destroyed
              let allDestroyed = true;
              for (let c = 0; c < BRICK_COLUMN_COUNT; c++) {
                for (let r = 0; r < BRICK_ROW_COUNT; r++) {
                  if (gameState.current.bricks[c][r].status === 1) {
                    allDestroyed = false;
                    break;
                    gameState.current.ballSpeedY = -gameState.current.ballSpeedY; // Simplified logic
                  }
                }
                if (!allDestroyed) break;
              }

              if (allDestroyed) {
                setGameWon(true);
              }
            }
          }
        }
      }
    };

    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#e0f7ff');
      gradient.addColorStop(1, '#f0fbff');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw game elements
      drawBricks();
      drawBall();
      drawPaddle();
      collisionDetection();

      // Ball movement
      gameState.current.ballX += gameState.current.ballSpeedX;
      gameState.current.ballY += gameState.current.ballSpeedY;

      // Wall collision
      if (gameState.current.ballX + gameState.current.ballSpeedX > canvas.width - BALL_RADIUS ||
          gameState.current.ballX + gameState.current.ballSpeedX < BALL_RADIUS) {
        gameState.current.ballSpeedX = -gameState.current.ballSpeedX;
      }

      if (gameState.current.ballY + gameState.current.ballSpeedY < BALL_RADIUS) {
        gameState.current.ballSpeedY = -gameState.current.ballSpeedY;
      }
      // Paddle collision
      else if (
        gameState.current.ballY + gameState.current.ballSpeedY > canvas.height - BALL_RADIUS - PADDLE_HEIGHT - 10 &&
        gameState.current.ballX > gameState.current.paddleX &&
        gameState.current.ballX < gameState.current.paddleX + PADDLE_WIDTH
      ) {
        // Calculate bounce angle based on where ball hits paddle
        const hitPosition = (gameState.current.ballX - (gameState.current.paddleX + PADDLE_WIDTH / 2)) / (PADDLE_WIDTH / 2);
        const angle = hitPosition * Math.PI / 3; // Max 60 degrees

        // Calculate new speed based on angle
        const speed = Math.sqrt(gameState.current.ballSpeedX * gameState.current.ballSpeedX +
                            gameState.current.ballSpeedY * gameState.current.ballSpeedY);
        gameState.current.ballSpeedX = speed * Math.sin(angle);
        gameState.current.ballSpeedY = -speed * Math.cos(angle);
      }
      // Bottom wall collision (lose life)
      else if (gameState.current.ballY + gameState.current.ballSpeedY > canvas.height - BALL_RADIUS) {
        setLives(prevLives => {
          const newLives = prevLives - 1;
          if (newLives <= 0) {
            setGameOver(true);
            return 0;
          } else {
            // Reset ball and paddle position
            gameState.current.ballX = canvas.width / 2;
            gameState.current.ballY = canvas.height - 30;
            gameState.current.ballSpeedX = 4 * (Math.random() > 0.5 ? 1 : -1);
            gameState.current.ballSpeedY = -4;
            gameState.current.paddleX = (canvas.width - PADDLE_WIDTH) / 2;
            setGameStarted(false);
            return newLives;
          }
        });
      }

      // Paddle movement
      if (gameState.current.rightPressed && gameState.current.paddleX < canvas.width - PADDLE_WIDTH) {
        gameState.current.paddleX += 7;
      } else if (gameState.current.leftPressed && gameState.current.paddleX > 0) {
        gameState.current.paddleX -= 7;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameStarted, gameOver, gameWon, highScore]);

  const startGame = () => {
    setGameStarted(true);
  };

  const restartGame = () => {
    resetGame();
    setGameStarted(true);
  };

  return (
    <S.GameContainer>
      <S.GameHeader>
        <S.GameTitle>BREAKOUT</S.GameTitle>
        <S.GameSubtitle>Classic Arcade Game</S.GameSubtitle>
      </S.GameHeader>

      <S.GameInfo>
        <S.InfoItem>
          <S.InfoLabel>SCORE</S.InfoLabel>
          <S.InfoValue>{score}</S.InfoValue>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoLabel>LIVES</S.InfoLabel>
          <S.InfoValue>{lives}</S.InfoValue>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoLabel>HIGH SCORE</S.InfoLabel>
          <S.InfoValue>{highScore}</S.InfoValue>
        </S.InfoItem>
      </S.GameInfo>

      <S.GameCanvasContainer>
        <S.Canvas
          ref={canvasRef}
          width={1080}
          height={960}
        />

        <S.GameOverlay active={gameOver || gameWon || !gameStarted}>
          {!gameStarted && !gameOver && !gameWon && (
            <>
              <S.OverlayTitle float>BREAKOUT</S.OverlayTitle>
              <S.OverlayMessage>
                Use arrow keys to move the paddle.<br />
                Press SPACE to start!
              </S.OverlayMessage>
              <S.Button pulse onClick={startGame}>
                START GAME
              </S.Button>
            </>
          )}

          {gameOver && (
            <>
              <S.OverlayTitle>GAME OVER</S.OverlayTitle>
              <S.OverlayMessage>
                Your score: {score}<br />
                High score: {highScore}
              </S.OverlayMessage>
              <S.Button onClick={restartGame}>
                PLAY AGAIN
              </S.Button>
            </>
          )}

          {gameWon && (
            <>
              <S.OverlayTitle>YOU WIN!</S.OverlayTitle>
              <S.OverlayMessage>
                Congratulations!<br />
                You cleared all the bricks with a score of {score}!
              </S.OverlayMessage>
              <S.Button onClick={restartGame}>
                Play Again
              </S.Button>
            </>
          )}
        </S.GameOverlay>
      </S.GameCanvasContainer>

      <S.Instructions>
        Use ← → arrow keys to move the paddle | Space to start/pause
      </S.Instructions>
    </S.GameContainer>
  );
};

export default BreakoutGame;
