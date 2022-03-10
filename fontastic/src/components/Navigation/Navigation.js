import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
import NavigationMenu from "../NavigationMenu/NavigationMenu.js";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  let menu;
  if (showMenu) {
    menu = <NavigationMenu closeMenu={() => setShowMenu(false)} />;
  }

  return (
    <nav>
      <span>
        <Hamburger
          toggled={showMenu}
          toggle={setShowMenu}
          color="white"
          size={26}
          label="Menu"
          rounded
        />
      </span>
      {menu}
    </nav>
  );
}

export default Navigation;
