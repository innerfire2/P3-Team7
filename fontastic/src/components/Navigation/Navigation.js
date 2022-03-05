// import { Fade as Hamburger } from "hamburger-react";
// import { useState } from "react";

// function Navigation() {
//     const [open, setOpen] = useState(false);
//   return (
//     <nav>
//       <Hamburger
//         // toggled={open}
//         // toggle={setOpen}
//         color="white"
//         size={26}
//         label="Menu"
//         rounded
//       />
//     </nav>
//   );
// }

// export default Navigation;
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
          // onClick={() => setShowMenu(!showMenu)}
        />
      </span>
      {menu}
    </nav>
  );
}

export default Navigation;
