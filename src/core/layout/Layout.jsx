import React from "react";
import { useGlobal } from "../../hooks/useGlobal";
import NavDesktop from "../../components/navbar/NavDesktop";

const Layout = ({ children }) => {
  return (
    <>
      <header className="py-5 px-2 flex items-center justify-between border-b border-gray-300">
        <div className="flex items-center">
          <img className="w-24" src="/images/logo_uade.png" alt="Logo UADE" />
          <h1 className="text-2xl px-5">Diseño y Desarrollo Web</h1>
        </div>
        <div>
          <NavDesktop />
        </div>
      </header>

      <div className="flex ">
        <main className="p-3">{children}</main>
      </div>
      <footer className="p-3 bg-neutral-700 text-center text-neutral-50">
        Derechos Reservados 2025
      </footer>
    </>
  );
};

export default Layout;
