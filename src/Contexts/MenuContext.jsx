import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState([]);

  const { data: main } = useFetch(
    "https://tarkhineh-app-api.vercel.app/menu/1",
  );
  const { data: appitappetizer } = useFetch(
    "https://tarkhineh-app-api.vercel.app/menu/2",
  );
  const { data: dessert } = useFetch(
    "https://tarkhineh-app-api.vercel.app/menu/3",
  );
  const { data: drink } = useFetch(
    "https://tarkhineh-app-api.vercel.app/menu/4",
  );

  useEffect(() => {
    if (!main || !appitappetizer || !dessert || !drink) return;

    setMenu([
      ...(main.persian_foods || []),
      ...(main.foreign_foods || []),
      ...(main.pizzas || []),
      ...(main.sandwiches || []),
      //   ...(appitappetizer.persian_appetizers || []),
      //   ...(appitappetizer.foreign_appetizers || []),
      //   ...(appitappetizer.soups || []),
      //   ...(appitappetizer.finger_foods || []),
      //   ...(dessert.persian_desserts || []),
      //   ...(dessert.foreign_desserts || []),
      //   ...(dessert.jellies || []),
      //   ...(dessert.cakes || []),
      //   ...(drink.persian_drinks || []),
      //   ...(drink.foreign_drinks || []),
      //   ...(drink.cold_drinks || []),
      //   ...(drink.hot_drinks || []),
    ]);
  }, [main, appitappetizer, dessert, drink]);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);

  if (context === undefined)
    throw new Error("MenuContext was used outside of MenuProvider");

  return context;
}
