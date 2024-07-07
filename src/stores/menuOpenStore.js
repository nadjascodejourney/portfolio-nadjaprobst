import { create } from "zustand"; // create is a function that creates a store

const menuOpenStore = create((set) => {
  // set is a function that updates the store

  return {
    // we need to return the object with the initial state and the methods to update the state
    menuOpen: false, // initial
    setMenuOpen: (newMenuOpen) => set({ menuOpen: newMenuOpen }), // method to update the menuOpen
  };
});

export default menuOpenStore;
