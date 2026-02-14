import Headers from "@/app/components/header";
import Footer from "@/app/components/footer/page";

export default function Home() {
  return (
    <>
      <Headers />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 transition-colors">
        {/* Card */}
        <div className="w-[420px] max-w-full rounded-3xl bg-white dark:bg-gray-900 shadow-xl p-8 text-center transition-colors">
          {/* Mascote */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/assets/logo/logo.png"
                alt="Raposa"
                className="w-10 h-10 mx-auto"
              />
            </div>
          </div>
          {/* Título */}
          <h1 className="text-3xl font-extrabold mb-6">
            Hiragana Flow
          </h1>
          {/* Botão */}
          <button className="w-full py-4 rounded-full text-white text-lg font-semibold 
            bg-gradient-to-r from-indigo-500 to-purple-500 
            hover:opacity-90 transition mb-4">
            Continuar de onde parei
          </button>
          {/* Progresso */}
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
            Você já domina 12/46 caracteres
          </p>
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full w-[26%] bg-gradient-to-r from-pink-400 to-pink-500 rounded-full" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
