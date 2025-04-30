import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [userMenu, setUserMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setUserMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full h-auto bg-gray-800 left-0">
      <div className="flex justify-between items-center p-4">
        <div className="text-lg font-semibold text-white hover:text-blue-700 cursor-pointer">
          ReviewsHub
        </div>
        <div className="flex-row">
          <input className="bg-white w-100 rounded-sm text-md" />
          <button className="w-10 rounded-sm ">
            <i className="fa-solid fa-magnifying-glass text-white hover:text-blue-700 cursor-pointer"></i>
          </button>
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <div
            className="flex-row text-white hover:text-blue-700 cursor-pointer"
            onClick={() => setUserMenu(!userMenu)}
          >
            <i className="fa-solid fa-user text-2xl"></i>
            <i className="fa-solid fa-angle-down text-sm"></i>
          </div>
        </div>
        {userMenu && (
          <div
            ref={menuRef}
            className="h-20 w-30 absolute top-15 right-10 bg-gray-300 text-black rounded-sm"
          >
            <div className="flex flex-row items-center p-2 cursor-pointer hover:text-blue-700">
              <i className="fa-solid fa-address-card mr-3"></i>
              <h1 className="text-sm">Ver Perfil</h1>
            </div>
            <div className="border-1 w-20 m-auto"></div>
            <div className="flex flex-row items-center p-2 cursor-pointer hover:text-blue-700">
              <i className="fa-solid fa-arrow-right-from-bracket mr-3"></i>
              <h1 className="text-sm">Sair</h1>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
