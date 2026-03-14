// useSplitTextAnimation.js
import { useEffect } from "react";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";

export function useSplitTextAnimation(ref, selector = ".p_inicio") {
  useEffect(() => {
    if (!ref.current) return;

    // Esperar a que carguen las fuentes
    document.fonts.ready.then(() => {
      const container = ref.current;
      container.style.visibility = "visible";

      const p = container.querySelector(selector);
      if (!p) return;

      const { words } = splitText(p);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 0.75,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, [ref, selector]);
}
