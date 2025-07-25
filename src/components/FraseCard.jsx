import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import { frasesArray } from "../Data";

const getRandomFrase = (currentId) => {
  let nueva;
  do {
    nueva = frasesArray[Math.floor(Math.random() * frasesArray.length)];
  } while (nueva.id === currentId);
  return nueva;
};

const getRandomAlignment = () => {
  const options = ["text-left items-start", "text-center items-center", "text-right items-end"];
  return options[Math.floor(Math.random() * options.length)];
};

const FraseCard = () => {
  const [fraseActual, setFraseActual] = useState(getRandomFrase(null));
  const [fade, setFade] = useState(true);
  const [alineacion, setAlineacion] = useState(getRandomAlignment());

  const cambiarFrase = () => {
    setFade(false);
    setTimeout(() => {
      const nuevaFrase = getRandomFrase(fraseActual.id);
      setFraseActual(nuevaFrase);
      setAlineacion(getRandomAlignment());
      setFade(true);
    }, 300);
  };

  return (
    <>
      {/* Fondo fijo */}
      <div className=" inset-0 dark:bg-gray-300 flex items-center z-0" />

      {/* Contenido */}
      <div className="relative z-10 flex items-center justify-center min-h-screen min-w-screen px-4 py-10 bg-amber-100">
        <div className="flex flex-col items-center">
          <div className="relative bg-gray-800 shadow-lg rounded-2xl 
            w-full min-w-[90vw] sm:min-w-[600px] lg:min-w-[800px]
            h-[70vh] sm:h-[60vh] lg:h-[60vh]
            p-6 sm:p-10 mb-6 
            overflow-hidden transition-all duration-300 ease-in-out flex flex-col justify-center">
            
            <FaQuoteLeft className="absolute text-gray-300 dark:text-gray-600 text-5xl sm:text-7xl top-6 left-6 opacity-20 z-0" />

            <div
              className={`relative z-10 transition-opacity duration-500 ease-in-out flex flex-col justify-center h-full w-full px-4 sm:px-8 ${alineacion} ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-6 leading-relaxed">
                {fraseActual.frase}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-300">
                — {fraseActual.autor}
              </p>
            </div>
          </div>

          <button
            onClick={cambiarFrase}
            className="rounded-full border border-white hover:opacity-90
            p-4 z-30 bg-blue-400 text-white relative font-semibold
            after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-800 after:left-3 after:bottom-0 
            after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all 
            after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 
            [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
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
