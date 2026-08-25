import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import TechStackNew from "./TechStackNew";
import CallToAction from "./CallToAction";
import setSplitText from "./utils/splitText";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [shouldRenderCharacter, setShouldRenderCharacter] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  // Пересчёт позиций скролл-анимаций после полной загрузки (шрифты + 3D-канвас),
  // иначе при перезагрузке модель/текст встают со сдвигом вправо.
  useEffect(() => {
    const refresh = () => {
      window.scrollTo(0, 0);
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.refresh();
      });
    };
    const timer = setTimeout(refresh, 600);
    window.addEventListener("load", refresh, { once: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", refresh);
    };
  }, []);

  useEffect(() => {
    // 3D монтируем и на мобилке (статичная модель, без тяжёлой скролл-анимации).
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;
    const win = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const mountCharacter = () => setShouldRenderCharacter(true);

    if (typeof win.requestIdleCallback === "function") {
      idleId = win.requestIdleCallback(mountCharacter, { timeout: 1500 });
    } else {
      timeoutId = setTimeout(mountCharacter, 1200);
    }

    return () => {
      if (idleId !== undefined && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {shouldRenderCharacter && children}
      <div className="container-main">
        <Landing />
        <About />
        <WhatIDo />
        <Career />
        <Work />
        <TechStackNew />
        <CallToAction />
        <Contact />
      </div>
    </div>
  );
};

export default MainContainer;
