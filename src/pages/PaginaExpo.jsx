import React from "react";
import './style.css';
import MyBackground from '../../public/background.svg';
import Footer from '../../public/footer.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // Importamos el icono de Instagram

function PaginaExpo() {
    return (
        <div className="min-h-screen w-full bg-cover flex flex-col justify-center items-center p-4" style={{ backgroundImage: `url(${MyBackground})` }}>
            {/* Header Section */}
            <div className=" text-customBlue bg-white max-w-900px rounded-md max-w-screen-xl w-full mx-auto">
                <div className="text-2xl pt-4 sm:text-3xl lg:text-2xl font-bold text-center text-white ">
                    <h1 className="text-customBlue">
                        Bienvenidos a la <span className="text-customRed font-bold">1</span>Expo <span className="bg-customBlue text-white p-1 rounded-md">Provincial</span> E.P.S | CFPI 1
                    </h1>
                </div>

                {/* Main Content */}
                <div className="flex flex-wrap justify-between gap-4 sm:gap-8 max-w-screen-xl w-full mx-auto">
                    {/* Left Section: List of Cities */}
                    <section className="p-4 sm:p-6 flex-1 max-w-md">
                        <ul className="list-none space-y-2">
                            <li className="text-lg sm:text-xl font-bold"><span className="text-customRed text-2xl sm:text-3xl">#</span> Colonia Aurora</li>
                            <li className="text-lg sm:text-xl font-bold"><span className="text-customRed text-2xl sm:text-3xl">#</span> Oberá</li>
                            <li className="text-lg sm:text-xl font-bold"><span className="text-customRed text-2xl sm:text-3xl">#</span> Eldorado</li>
                            <li className="text-lg sm:text-xl font-bold"><span className="text-customRed text-2xl sm:text-3xl">#</span> Capioví</li>
                            <li className="text-lg sm:text-xl font-bold"><span className="text-customRed text-2xl sm:text-3xl">#</span> Jardín América</li>
                            <li className="text-lg sm:text-xl font-bold"><span className="text-customRed text-2xl sm:text-3xl">#</span> Posadas</li>
                        </ul>
                    </section>

                    {/* Right Section: Text and Info */}
                    <section className="p-2 sm:p-6 flex-1 max-w-md sm:max-w-xl lg:w-2/3 text-center">
                        <div className="flex flex-col items-end text-center">
                            <h2 className="text-center w-full text-lg sm:text-xl font-semibold mb-4 text-customRed">EPS</h2>
                            <h3 className="text-lg sm:text-xl font-semibold mb-4">Educación Profesional Secundaria</h3>
                            <p className="mb-4 text-sm sm:text-base leading-relaxed">
                                Es una nueva oferta educativa, que otorga certificación profesional (en la especialidad elegida) y título secundario. Brinda formación para el trabajo a la vez que posibilita la continuidad de estudios superiores.
                            </p>
                            <p className="mb-4 text-sm sm:text-base leading-relaxed">
                                Está destinada a jóvenes de 14 a 18 años que quieran comenzar la secundaria o retomarla.
                            </p>
                        </div>

                        {/* Footer-like Section */}
                        <div className="absolute top-5 right-0 flex justify-center mt-4">
                            <h3 className="text-lg sm:text-xl font-semibold p-4 shadow-lg bg-white rounded-l-md">
                                Te escuchamos:
                                <a className="ml-2" href="https://www.instagram.com/e.p.s.posadas/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="lg" className="text-customBlue" />
                                </a>
                            </h3>
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer Section */}
            <div className="w-full bg-customBlue flex items-center justify-center ">
                <footer
                    className="w-full max-w-md sm:max-w-xl lg:w-2/3 text-center mt-2 h-32 sm:h-40 py-1 absolute bottom-0"
                    style={{
                        backgroundImage: `url(${Footer})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    {/* Footer content here */}
                </footer>
            </div>
        </div>
    );
}

export default PaginaExpo;
