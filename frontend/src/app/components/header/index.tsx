
export default function Header() {
  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <div className="flex justify-center gap-8 text-gray-500 dark:text-gray-400 font-medium mb-8">
          <span className="relative text-gray-900 dark:text-white">
            <h1>Início</h1>
          </span>
        </div>

        <div className="flex justify-center gap-8 text-gray-500 dark:text-gray-400 font-medium mb-8">
          <span className="relative text-gray-900 dark:text-white">
            <h1>Aprendizado</h1>
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
