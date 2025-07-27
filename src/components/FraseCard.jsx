import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import { frasesArray } from "../Data";

const getRandomFrase = (mostradas) => {
  const disponibles = frasesArray.filter(f => !mostradas.includes(f.id));
  if (disponibles.length === 0) return null;
  return disponibles[Math.floor(Math.random() * disponibles.length)];
};

const getRandomAlignment = () => {
  const options = ["text-left items-start", "text-center items-center", "text-right items-end"];
  return options[Math.floor(Math.random() * options.length)];
};

const FraseCard = () => {
  const [fraseActual, setFraseActual] = useState(getRandomFrase([]));
  const [frasesMostradas, setFrasesMostradas] = useState(fraseActual ? [fraseActual.id] : []);
  const [fade, setFade] = useState(true);
  const [alineacion, setAlineacion] = useState(getRandomAlignment());

  const cambiarFrase = () => {
    setFade(false);
    setTimeout(() => {
      let nuevasMostradas = [...frasesMostradas];
      let nuevaFrase = getRandomFrase(nuevasMostradas);

      // Si ya se mostraron todas, reiniciar
      if (!nuevaFrase) {
        nuevasMostradas = [];
        nuevaFrase = getRandomFrase([]);
      }

      setFraseActual(nuevaFrase);
      setFrasesMostradas([...nuevasMostradas, nuevaFrase.id]);
      setAlineacion(getRandomAlignment());
      setFade(true);
    }, 300);
  };

  return (
    <>
      <div className=" inset-0 flex items-center z-1 bg-amber-50" />

      <div className="relative z-10 flex items-center justify-center min-w-screen px-4 py-10 bg-amber-50">
        <div className="flex flex-col items-center">
          <div className="relative bg-gray-800 shadow-lg rounded-2xl 
            w-full min-w-[90vw] sm:min-w-[600px] lg:min-w-[800px]
            h-[60vh] sm:h-[60vh] lg:h-[60vh]
            p-6 sm:p-10 mb-4 mt-0
            overflow-hidden transition-all duration-300 ease-in-out flex flex-col justify-center">
            
            <FaQuoteLeft className="absolute text-gray-300 dark:text-gray-600 text-6xl sm:text-8xl top-6 left-6 opacity-20 z-0" />

            <div
              className={`relative z-10 transition-opacity duration-500 ease-in-out flex flex-col justify-center h-full w-full px-4 sm:px-8 ${alineacion} ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-6 leading-relaxed">
                {fraseActual?.frase}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-300">
                — {fraseActual?.autor}
              </p>
            </div>
          </div>

          <button
            onClick={cambiarFrase}
            className="rounded-full border border-white p-4 z-30 bg-blue-400 text-white relative font-semibold text-2xl 
              transition-all duration-300 ease-in-out cursor-pointer
              hover:opacity-90 hover:bg-blue-500 hover:scale-110 hover:drop-shadow-lg 
              hover:[text-shadow:2px_2px_2px_#fda4af]"
            aria-label="Cambiar frase"
          >
            <FaSyncAlt />
          </button>

        </div>
      </div>
    </>
  );
};

export default FraseCard;
