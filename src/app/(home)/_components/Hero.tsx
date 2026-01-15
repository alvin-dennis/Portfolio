import Image from "next/image";
import { MotionDiv, MotionH1, MotionSpan } from "@/components/Framer";
import RotatingText from "@/components/ui/RotatingText";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <MotionH1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-bold tracking-wider text-7xl sm:text-8xl md:text-[120px] lg:text-[140px]"
        >
          <MotionSpan
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-primary"
            style={{ WebkitTextStroke: "3.42px #FFFFFF" }}
          >
            ARAFA
          </MotionSpan>
          <MotionSpan
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="ml-6 text-primary"
            style={{ WebkitTextStroke: "3.42px #FFFFFF" }}
          >
            N
          </MotionSpan>
        </MotionH1>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 md:mt-14"
        >
          <RotatingText
            texts={["React", "Bits", "Is", "Cool!"]}
            mainClassName="
              px-3 md:px-4
              bg-primary text-black
              py-1 md:py-2
              rounded-lg
              text-base sm:text-lg md:text-xl
              font-medium
            "
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </MotionDiv>
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[380px] z-0"
      >
        <Image
          src="/assets/common/bottom.webp"
          alt="Hero decoration"
          fill
          className="object-contain md:object-cover"
          priority
        />
      </MotionDiv>
    </section>
  );
}
