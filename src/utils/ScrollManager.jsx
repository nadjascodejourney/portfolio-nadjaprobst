import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useScroll } from "@react-three/drei";

// import gsap for smooth scrolling
import { gsap } from "gsap";

// import context from useSectionScrollStore
import useSectionScrollStore from "../stores/useSectionScrollStore.js";

const ScrollManager = () => {
  const scrollData = useScroll(); // hook from drei to get the scroll data, it returns an object with properties: {offset, delta, current, visible, curve, ...}. The latter functions are useful if you want to react to the scroll offset, for instance if you wanted to fade things in and out if they are in or out of view.
  const lastScrollPosition = useRef(0); // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
  const isAnimating = useRef(false); // false => no animation at the first render

  // get the states from the store
  const section = useSectionScrollStore((state) => state.section);
  const setSection = useSectionScrollStore((state) => state.setSection);

  // fill the screen with the scroll element
  scrollData.fill.classList.add("top-0");
  scrollData.fill.classList.add("absolute");

  useEffect(() => {
    gsap.to(scrollData.el, {
      duration: 1.5,
      scrollTop: section * scrollData.el.clientHeight, // section multiplied by the height of the scroll element, which is the height of the screen
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  useFrame(() => {
    if (isAnimating.current) {
      // if we are currently animating, do nothing, just...
      lastScrollPosition.current = scrollData.current; // lastscrollposition = current scroll position
      return;
    }
    // if we are not animating, we...
    const currentSection = Math.floor(
      scrollData.scroll.current * scrollData.pages
    ); // this gives us the current section as a number
    // pages comes from the ScrollControls component, it is the number of pages we have

    // if the current scroll is bigger than the last croll and the current section === 0, then
    if (
      scrollData.scroll.current > lastScrollPosition.current &&
      currentSection === 0
    ) {
      // we set the current section to a certain value, which stands for the position of the next section
      setSection(1);
    }

    if (
      scrollData.scroll.current < lastScrollPosition.current &&
      scrollData.scroll.current < 1 / scrollData.pages
    ) {
      setSection(0);
    } // if the current scroll is smaller than the last scroll and the current scroll is smaller than 1 / data.pages, then we set the current section to 0

    lastScrollPosition.current = scrollData.scroll.current; // lastscrollposition = current scroll position
  });

  return null;
};

export default ScrollManager;
