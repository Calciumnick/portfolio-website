import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Всегда открывать/обновлять страницу с верха: браузер не должен восстанавливать
// позицию скролла — иначе интро-анимация (Lenis + GSAP + 3D) рендерится «в середине»
// и модель с текстом уезжают вправо.
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
