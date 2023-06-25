import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = create(
    persist(
        devtools((set) => ({
            people: ["John Doe", "Jane Doe"],
            addPerson: (person) =>
                set((state) => ({
                    people: [...state.people, person],
                })),
            dark: false,
            toggleDarkMode : ()=> set((state)=> ({dark : !state.dark}))
        })),
        {
            name: "people-store" ,
            getStorage: () => localStorage, // Storage instance (e.g., localStorage)
        }
    )
);

export default useStore;
