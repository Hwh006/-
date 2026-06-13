import HeroSection from "../components/home/HeroSection";
import CommandPrompt from "../components/home/CommandPrompt";
import SideHud from "../components/home/SideHud";
import FaultyTerminal from "../components/FaultyTerminal";

export default function HomePage() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0 h-full w-full"
        aria-hidden="true"
      >
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <FaultyTerminal
            className="h-full w-full"
            scale={2}
            gridMul={[2, 1]}
            digitSize={1.4}
            timeScale={0.1}
            pause={false}
            scanlineIntensity={0}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={0.8}
            chromaticAberration={0}
            dither={0}
            curvature={0.11}
            tint="#71976d"
            mouseReact
            mouseStrength={0.5}
            pageLoadAnimation
            brightness={0.6}
          />
        </div>
      </div>

      <SideHud />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-container-max flex-col justify-center px-margin-edge pb-24 pt-32">
        <HeroSection />
        <CommandPrompt />
      </main>
    </>
  );
}
