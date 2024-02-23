import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(MENU_URL + resId);
    const jsonMenu = await menuData.json();

    setResInfo(jsonMenu);
  };

  return resInfo;
};

export default useRestaurantMenu;
