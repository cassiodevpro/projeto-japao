"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <div className="flex justify-center gap-8 text-gray-500 dark:text-gray-400 font-medium mb-8">
          <span className="relative text-gray-900 dark:text-white">
            <h1>Início</h1>
          </span>
        </div>

        <div className="flex justify-center gap-8 text-gray-500 dark:text-gray-400 font-medium mb-8 relative">
          <span
            className="relative text-gray-900 dark:text-white cursor-pointer"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <h1>Aprendizado</h1>
            {menuOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 bg-purple-700 dark:bg-purple-800 rounded shadow-lg z-20 border border-purple-800">
          <div className="px-4 py-2 text-white font-semibold border-b border-purple-600 flex items-center justify-between">
            <span>Aprendizado</span>
            <button
              className="text-white hover:text-purple-200 ml-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar"
            >
              ×
            </button>
          </div>
          <ul className="py-2">
            <li
              className="px-4 py-2 hover:bg-purple-600 dark:hover:bg-purple-900 text-white cursor-pointer"
              onClick={() => {
                setMenuOpen(false);
                window.location.href = "/aprendizado/hiragana";
              }}
            >
              Hiragana
            </li>
            <li
              className="px-4 py-2 hover:bg-purple-600 dark:hover:bg-purple-900 text-white cursor-pointer"
              onClick={() => {
                setMenuOpen(false);
                window.location.href = "/aprendizado/katakana";
              }}
            >
              Katakana
            </li>
            <li
              className="px-4 py-2 hover:bg-purple-600 dark:hover:bg-purple-900 text-white cursor-pointer"
              onClick={() => {
                setMenuOpen(false);
                window.location.href = "/aprendizado/kanji";
              }}
            >
              Kanji
            </li>
            <li
              className="px-4 py-2 hover:bg-purple-600 dark:hover:bg-purple-900 text-white cursor-pointer"
              onClick={() => {
                setMenuOpen(false);
                window.location.href = "/aprendizado/numeros";
              }}
            >
              Números
            </li>
          </ul>
              </div>
            )}
          </span>
        </div>
        <div className="flex justify-center gap-8 text-gray-500 dark:text-gray-400 font-medium mb-8">
          <span className="relative text-gray-900 dark:text-white">
            <h1>Exercícios</h1>
          </span>
        </div>

        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
                <img
                    src="/assets/logo/logo.png"
                    alt="Flow"
                    style={{ width: 72, height: 72
                     }}
                />
            </div>
          </div>
          <a href="#">Entrar</a>
        </div>
      </nav>
    </header>
  );
}
