import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState([]);
  const [mainFood, setMainFood] = useState({});
  const [appetizer, setAppetizer] = useState({});
  const [dessert, setDessert] = useState({});
  const [drink, setDrink] = useState({});

  const { data: mainResponse } = useFetch(
    "https://tarkhineh-app-api.vercel.app/menu/1",
  );
  const { data: appetizerResponse } = useFetch(
    "https://tarkhineh-app-api.vercel.app/menu/2",
  );
  const { data: dessertRespomse } = useFetch(
    "https://tarkhineh-app-api.vercel.app/menu/3",
  );
  const { data: drinkResponse } = useFetch(
    "https://tarkhineh-app-api.vercel.app/menu/4",
  );

  useEffect(() => {
    if (
      !mainResponse ||
      !appetizerResponse ||
      !dessertRespomse ||
      !drinkResponse
    )
      return;

    setMenu([
      ...(mainResponse.persian_foods || []),
      ...(mainResponse.foreign_foods || []),
      ...(mainResponse.pizzas || []),
      ...(mainResponse.sandwiches || []),
      ...(appetizerResponse.persian_appetizers || []),
      ...(appetizerResponse.foreign_appetizers || []),
      ...(appetizerResponse.soups || []),
      ...(appetizerResponse.finger_foods || []),
      ...(dessertRespomse.persian_desserts || []),
      ...(dessertRespomse.foreign_desserts || []),
      ...(dessertRespomse.jellies || []),
      ...(dessertRespomse.cakes || []),
      ...(drinkResponse.persian_drinks || []),
      ...(drinkResponse.foreign_drinks || []),
      ...(drinkResponse.cold_drinks || []),
      ...(drinkResponse.hot_drinks || []),
    ]);

    setMainFood(mainResponse);

    setAppetizer(appetizerResponse);

    setDessert(dessertRespomse);

    setDrink(drinkResponse);
  }, [mainResponse, appetizerResponse, dessertRespomse, drinkResponse]);

  return (
    <MenuContext.Provider
      value={{ menu, setMenu, mainFood, appetizer, dessert, drink }}
    >
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
