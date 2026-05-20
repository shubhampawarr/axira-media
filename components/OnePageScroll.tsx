'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

export default function OnePageScroll({
  children,
}: {
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const isScrolling = useRef(false);

  const activeIndexRef = useRef(0);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const getSections = () =>
      Array.from(
        container.querySelectorAll<HTMLElement>('.one-page-section')
      );

    const updateActiveClass = (index: number) => {
      const sections = getSections();

      sections.forEach((section, sectionIndex) => {
        section.classList.toggle(
          'section-active',
          sectionIndex === index
        );
      });
    };

    updateActiveClass(0);

    const scrollToSection = (index: number) => {
      const sections = getSections();

      const safeIndex = Math.max(
        0,
        Math.min(index, sections.length - 1)
      );

      const section = sections[safeIndex];

      if (!section) return;

      isScrolling.current = true;

      setActiveIndex(safeIndex);

      updateActiveClass(safeIndex);

      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 750);
    };

    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth < 768) return;

      event.preventDefault();

      if (isScrolling.current) return;

      if (event.deltaY > 30) {
        scrollToSection(activeIndexRef.current + 1);
      }

      if (event.deltaY < -30) {
        scrollToSection(activeIndexRef.current - 1);
      }
    };

    const handleCustomScroll = (event: Event) => {
      const customEvent = event as CustomEvent<number>;

      scrollToSection(customEvent.detail);
    };

    window.addEventListener('wheel', handleWheel, {
      passive: false,
    });

    window.addEventListener(
      'axira-scroll',
      handleCustomScroll
    );

    return () => {
      window.removeEventListener('wheel', handleWheel);

      window.removeEventListener(
        'axira-scroll',
        handleCustomScroll
      );
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}