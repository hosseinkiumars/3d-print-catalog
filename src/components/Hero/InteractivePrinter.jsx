import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Box } from "@mui/material";

const GREY = "#555555";
const ORANGE = "#d86b32";

const SIZE = 3.2;
const BAR = 0.15;
const BEAM_LENGTH = SIZE + BAR;

/* ================================= */
/* Beam */
/* ================================= */

function Beam({ position, size, color }) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />

      <meshStandardMaterial
        color={color}
        roughness={0.7}
        metalness={0}
      />
    </mesh>
  );
}

/* ================================= */
/* Wire Cube */
/* ================================= */

function WireCube({ targetRotation }) {
  const group = useRef();

  const h = SIZE / 2;

  useFrame(() => {
    if (!group.current) return;

    /*
     * Smooth interpolation
     *
     * مقدار کمتر:
     * حرکت آرام‌تر
     *
     * مقدار بیشتر:
     * واکنش سریع‌تر
     */

    const smoothness = 0.06;

    group.current.rotation.x +=
      (targetRotation.current.x -
        group.current.rotation.x) *
      smoothness;

    group.current.rotation.y +=
      (targetRotation.current.y -
        group.current.rotation.y) *
      smoothness;
  });

  return (
    <group ref={group}>

      {/* ================================= */}
      {/* TOP */}
      {/* ================================= */}

      {/* Front Top — ORANGE */}

      <Beam
        position={[0, h, h]}
        size={[BEAM_LENGTH, BAR, BAR]}
        color={ORANGE}
      />

      {/* Back Top */}

      <Beam
        position={[0, h, -h]}
        size={[BEAM_LENGTH, BAR, BAR]}
        color={GREY}
      />

      {/* Top Left */}

      <Beam
        position={[-h, h, 0]}
        size={[BAR, BAR, BEAM_LENGTH]}
        color={GREY}
      />

      {/* Top Right — ORANGE */}

      <Beam
        position={[h, h, 0]}
        size={[BAR, BAR, BEAM_LENGTH]}
        color={ORANGE}
      />

      {/* ================================= */}
      {/* BOTTOM */}
      {/* ================================= */}

      {/* Front Bottom */}

      <Beam
        position={[0, -h, h]}
        size={[BEAM_LENGTH, BAR, BAR]}
        color={GREY}
      />

      {/* Back Bottom */}

      <Beam
        position={[0, -h, -h]}
        size={[BEAM_LENGTH, BAR, BAR]}
        color={GREY}
      />

      {/* Bottom Left */}

      <Beam
        position={[-h, -h, 0]}
        size={[BAR, BAR, BEAM_LENGTH]}
        color={GREY}
      />

      {/* Bottom Right */}

      <Beam
        position={[h, -h, 0]}
        size={[BAR, BAR, BEAM_LENGTH]}
        color={GREY}
      />

      {/* ================================= */}
      {/* VERTICAL */}
      {/* ================================= */}

      {/* Front Left */}

      <Beam
        position={[-h, 0, h]}
        size={[BAR, BEAM_LENGTH, BAR]}
        color={GREY}
      />

      {/* Front Right — ORANGE */}

      <Beam
        position={[h, 0, h]}
        size={[BAR, BEAM_LENGTH, BAR]}
        color={ORANGE}
      />

      {/* Back Left */}

      <Beam
        position={[-h, 0, -h]}
        size={[BAR, BEAM_LENGTH, BAR]}
        color={GREY}
      />

      {/* Back Right */}

      <Beam
        position={[h, 0, -h]}
        size={[BAR, BEAM_LENGTH, BAR]}
        color={GREY}
      />

    </group>
  );
}

/* ================================= */
/* Camera */
/* ================================= */

function CameraSetup() {
  const { camera } = useThree();

  useEffect(() => {
    /*
     * دوربین از سمت رأس
     * (+X, +Y, +Z)
     */

    camera.position.set(8, 5, 9);

    camera.lookAt(0, 0, 0);

    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
}

/* ================================= */
/* Scene */
/* ================================= */

function Scene({ targetRotation }) {
  return (
    <>
      <CameraSetup />

      <ambientLight intensity={1.5} />

      <directionalLight
        position={[4, 5, 6]}
        intensity={2}
      />

      <directionalLight
        position={[-4, 2, -4]}
        intensity={0.8}
      />

      <WireCube
        targetRotation={targetRotation}
      />
    </>
  );
}

/* ================================= */
/* Main Component */
/* ================================= */

function InteractivePrinter() {
  const targetRotation = useRef({
    x: 0,
    y: 0,
  });

  const isMobile = useRef(false);

  useEffect(() => {
    /* ================================= */
    /* Detect Device */
    /* ================================= */

    const checkDevice = () => {
      isMobile.current =
        window.matchMedia(
          "(pointer: coarse)"
        ).matches;
    };

    checkDevice();

    window.addEventListener(
      "resize",
      checkDevice
    );

    /* ================================= */
    /* Desktop Mouse */
    /* ================================= */

    const handleMouseMove = (event) => {
      if (isMobile.current) return;

      const x =
        event.clientX /
          window.innerWidth -
        0.5;

      const y =
        event.clientY /
          window.innerHeight -
        0.5;

      targetRotation.current.x =
        -y * 0.35;

      targetRotation.current.y =
        x * 0.35;
    };

    /* ================================= */
    /* Desktop Mouse Leave */
    /* ================================= */

    const handleMouseLeave = () => {
      if (isMobile.current) return;

      targetRotation.current.x = 0;
      targetRotation.current.y = 0;
    };

    /* ================================= */
    /* Mobile Scroll */
    /* ================================= */

    const handleScroll = () => {
      if (!isMobile.current) return;

      const scrollY = window.scrollY;

      /*
       * مقدار چرخش بر اساس scroll
       */

      const maxRotation = 0.35;

      const rotationX = Math.min(
        scrollY * 0.001,
        maxRotation
      );

      const rotationY = Math.min(
        scrollY * 0.0007,
        maxRotation
      );

      targetRotation.current.x =
        rotationX;

      targetRotation.current.y =
        rotationY;
    };

    /* ================================= */
    /* Events */
    /* ================================= */

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    /* ================================= */
    /* Cleanup */
    /* ================================= */

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "resize",
        checkDevice
      );
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: {
          xs: 300,
          sm: 400,
          md: 500,
        },

        position: "relative",

        overflow: "hidden",

        borderRadius: 4,

        backgroundColor: "#eeeeee",
      }}
    >
      <Canvas
        camera={{
          position: [8, 5, 9],
          fov: 32,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
        style={{
          position: "absolute",

          inset: 0,

          width: "100%",

          height: "100%",
        }}
      >
        <Scene
          targetRotation={targetRotation}
        />
      </Canvas>

      {/* ================================= */}
      {/* Caption */}
      {/* ================================= */}

      <Box
        sx={{
          position: "absolute",

          bottom: 24,

          right: 24,

          fontSize: "0.7rem",

          fontWeight: 700,

          letterSpacing: "0.1em",

          color: "text.secondary",

          pointerEvents: "none",

          userSelect: "none",
        }}
      >
        DESIGN / CREATE / PRINT
      </Box>
    </Box>
  );
}

export default InteractivePrinter;