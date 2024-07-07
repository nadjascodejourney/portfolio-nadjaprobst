//* I create a state store with Zustand to manage the current section of the page. This store will be used to animate the camera position based on the current section. This store contains all the relevant information about the current section and the methods to change the section (number). This store can be used for letting the <Menu> know which section is currently active or it also helps us with the scroll animation, I want to implement later. This is also why I decided to work with Zustand.

import { create } from "zustand"; // create is a function that creates a store

const useSectionScrollStore = create((set) => {
  // set is a function that updates the store

  return {
    // we need to return the object with the initial state and the methods to update the state
    section: 0, // initial section
    setSection: (newSection) => set({ section: newSection }), // method to update the section
  };
});

export default useSectionScrollStore;
