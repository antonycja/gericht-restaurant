import { useState } from "react";
import MenuPage from "../../home/MenuSection/MenuPage";
import menuData from "../../../constants/menuData";
export default function ServiceMenuPage() {
  const [currentBackground, setCurrentBackground] = useState(
    menuData[0].menuImg
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index, background) => {
    setCurrentBackground(background);
    setActiveIndex(index);
  };
  return (
    <MenuPage
      currentBackground={currentBackground}
      activeIndex={activeIndex}
      onMenuClick={handleClick}
      data={menuData}
    />
  );
}
