"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const graphemeSegmenter =
  typeof Intl !== "undefined" && typeof Intl.Segmenter === "function"
    ? new Intl.Segmenter(undefined, { granularity: "grapheme" })
    : null;

function segmentCharacters(text = "") {
  if (!graphemeSegmenter) {
    return Array.from(text);
  }

  return Array.from(
    graphemeSegmenter.segment(text),
    ({ segment }) => segment
  );
}

export function FlippingWordSwap({
  word1,
  word2,
  word3,
  duration = 400,
  stagger = 44,
  className,
  toClassName,
  style,
  toStyle,
}) {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const swappedRef = useRef(false);

  const [activeWord, setActiveWord] = useState(word1);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resolvedDuration = prefersReducedMotion
      ? 0
      : Math.max(180, duration) / 1000;

    const resolvedStagger = prefersReducedMotion
      ? 0
      : Math.max(0, stagger) / 1000;

    const context = gsap.context(() => {
      const firstWord = gsap.utils.toArray(
        '[data-flip-word="first"]'
      );

      const secondWord = gsap.utils.toArray(
        '[data-flip-word="second"]'
      );

      const thirdWord = gsap.utils.toArray(
        '[data-flip-word="third"]'
      );

      // Initial state
      gsap.set(firstWord, {
        rotationX: 0,
        opacity: 1,
        transformOrigin: "center top",
      });

      gsap.set(secondWord, {
        rotationX: -82,
        opacity: 0,
        transformOrigin: "center bottom",
      });

      gsap.set(thirdWord, {
        rotationX: -82,
        opacity: 0,
        transformOrigin: "center bottom",
      });

      const timeline = gsap.timeline({
        paused: true,
      });

      /*
       * WORD 1 → WORD 2
       */
      timeline
        .to(firstWord, {
          rotationX: 82,
          opacity: 0,
          duration: resolvedDuration,
          stagger: resolvedStagger,
          ease: "power2.in",
        })
        .to(
          secondWord,
          {
            rotationX: 0,
            opacity: 1,
            duration: resolvedDuration,
            stagger: resolvedStagger,
            ease: "power2.out",
          },
          `<${resolvedDuration * 0.62}`
        )

        /*
         * WORD 2 → WORD 3
         *
         * Start after word2 is visible.
         */
        .to(
          secondWord,
          {
            rotationX: 82,
            opacity: 0,
            duration: resolvedDuration,
            stagger: resolvedStagger,
            ease: "power2.in",
          },
          `+=0.4`
        )
        .to(
          thirdWord,
          {
            rotationX: 0,
            opacity: 1,
            duration: resolvedDuration,
            stagger: resolvedStagger,
            ease: "power2.out",
          },
          `<${resolvedDuration * 0.62}`
        );

      /*
       * If the component was already swapped before the
       * effect finished setting up, jump to the end.
       */
      if (swappedRef.current) {
        timeline.progress(1);
      }

      timelineRef.current = timeline;
    }, containerRef);

    return () => {
      timelineRef.current?.kill();
      timelineRef.current = null;
      context.revert();
    };
  }, [duration, stagger, word1, word2, word3]);

  const updateSwap = useCallback(
    (next) => {
      if (swappedRef.current === next) return;

      swappedRef.current = next;

      setActiveWord(next ? word3 : word1);

      const timeline = timelineRef.current;

      if (!timeline) return;

      if (next) {
        timeline.play();
      } else {
        timeline.reverse();
      }
    },
    [word1, word3]
  );

  const renderCharacters = (text, layer) => {
    return segmentCharacters(text).map((character, index) => (
      <span
        key={`${layer}-${index}-${character}`}
        data-flip-word={layer}
        className="
          inline-block
          whitespace-pre
          backface-hidden
          will-change-[transform,opacity]
        "
      >
        {character === " " ? "\u00a0" : character}
      </span>
    ));
  };

  return (
    <button
      ref={containerRef}
      type="button"
      className={cn(
        `
        relative
        inline-grid
        cursor-pointer
        select-none
        border-0
        bg-transparent
        p-0
        align-baseline
        font-[inherit]
        leading-[inherit]
        tracking-[inherit]
        text-inherit
        `,
        `
        rounded-[0.08em]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-current/30
        focus-visible:ring-offset-2
        `,
        className
      )}
      aria-label={activeWord}
      aria-pressed={activeWord !== word1}
      style={style}
      onMouseEnter={() => updateSwap(true)}
      onMouseLeave={() => updateSwap(false)}
      onPointerUp={(event) => {
        if (event.pointerType !== "mouse") {
          updateSwap(!swappedRef.current);
        }
      }}
      onFocus={(event) => {
        if (event.currentTarget.matches(":focus-visible")) {
          updateSwap(true);
        }
      }}
      onBlur={() => updateSwap(false)}
    >
      <span
        className="
          col-start-1
          row-start-1
          inline-grid
          overflow-hidden
          perspective-midrange
        "
      >
        {/* WORD 1 */}
        <span
          className="
            col-start-1
            row-start-1
            inline-flex
            items-baseline
            justify-center
            gap-[0.012em]
            whitespace-pre
          "
          aria-hidden="true"
        >
          {renderCharacters(word1, "first")}
        </span>

        {/* WORD 2 */}
        <span
          className={cn(
            `
            col-start-1
            row-start-1
            inline-flex
            items-baseline
            justify-center
            gap-[0.012em]
            whitespace-pre
            `,
            toClassName
          )}
          aria-hidden="true"
          style={toStyle}
        >
          {renderCharacters(word2, "second")}
        </span>

        {/* WORD 3 */}
        <span
          className={cn(
            `
            col-start-1
            row-start-1
            inline-flex
            items-baseline
            justify-center
            gap-[0.012em]
            whitespace-pre
            `,
            toClassName
          )}
          aria-hidden="true"
          style={toStyle}
        >
          {renderCharacters(word3, "third")}
        </span>
      </span>
    </button>
  );
}