import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "/logo.png"
import icono from "/marco-aurelio-estoico.jpg"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 max-h-[10vh] bg-white text-black">
        <div className="flex flex-shrink-0 items-center">
            <a href="https://johan-sanchez.vercel.app" aria-label="Home">
                <img src={icono} className="mx-2 rounded-full" width={50} height={50}/>
            </a>
        </div>
        <div>
            <h1 className="font-thin text-3xl ">Frase Estoica</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-2 text-2xl">
          <a href="https://github.com/JohanSA7/frasestoica"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="GitHub">
              <FaGithub/>
          </a>
          <a href="https://johan-sanchez.vercel.app" aria-label="Home">
                <img src={logo} className="mx-2" width={50} height={50}/>
            </a>
        </div>
    </nav>
  )

}

export default Navbar