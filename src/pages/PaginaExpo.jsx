import React from "react";
import './style.css';
import MyBackground from '../../public/background.svg';
import Footer from '../../public/footer.svg'
function PaginaExpo() {
    return (
        <div className="min-h-screen w-full bg-cover flex flex-col justify-center items-center p-4" style={{ backgroundImage: `url(${MyBackground})` }}>
            {/* Header Section */}
            <div className="text-3xl sm:text-4xl font-bold text-center text-white mb-20">
                Bienvenidos a la <span className="text-customBlue font-bold">1</span>Expo <span className="bg-customBlue p-2 rounded-md">Provincial</span> E.P.S CFPI 1
            </div>

            {/* Main Content */}
            <div className="bg-white w-full lg:w-2/3 flex text-customBlue flex-col lg:flex-row gap-4 sm:gap-8 pt-4 mb-6 rounded-md">

                {/* Left Section: List of Cities */}
                <section className="p-4 sm:p-6 flex-1">
                    <ul className="list-m list-inside space-y-2">
                        <li className="text-xl sm:text-2xl font-bold"> <span className="text-customRed text-3xl">#</span> Colonia Aurora</li>
                        <li className="text-xl sm:text-2xl font-bold">  <span className="text-customRed text-3xl">#</span> Oberá</li>
                        <li className="text-xl sm:text-2xl font-bold">  <span className="text-customRed text-3xl">#</span> Eldorado</li>
                        <li className="text-xl sm:text-2xl font-bold">  <span className="text-customRed text-3xl">#</span> Capioví</li>
                        <li className="text-xl sm:text-2xl font-bold">  <span className="text-customRed text-3xl">#</span> Jardín América</li>
                        <li className="text-xl sm:text-2xl font-bold">  <span className="text-customRed text-3xl">#</span> Posadas</li>
                    </ul>
                </section>

                {/* Right Section: Text and Info */}
                <section className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4">EPS</h2>
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Educación Profesional Secundaria</h3>
                        <p className="mb-4 text-sm sm:text-base">
                            Es una nueva oferta educativa, que otorga certificación profesional (en la especialidad elegida) y título secundario. Brinda formación para el trabajo a la vez que posibilita la continuidad de estudios superiores.
                        </p>
                        <p className="mb-4 text-sm sm:text-base">
                            Está destinada a jóvenes de 14 a 18 años que quieran comenzar la secundaria o retomarla.
                        </p>
                    </div>

                    {/* Footer-like Section */}
                    <div className="flex justify-center mt-4">
                        <h3 className="text-xl sm:text-2xl font-semibold p-4 shadow-lg bg-white rounded-md">
                            Te escuchamos: [Insertar link]
                        </h3>
                    </div>
                </section>
            </div>

            {/* Footer Section (Optional) */}
            <footer
                className="w-2/3 text-center  mt-4 h-40 py-2 rounded-md absolute bottom-0"
                style={{
                    backgroundImage: `url(${Footer})`,
                    backgroundSize: 'cover',       // Ensures the image covers the entire footer
                    backgroundPosition: 'center',  // Centers the background image
                    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                }}
            >
                {/* Footer content here */}
            </footer>

        </div>
    );
}

export default PaginaExpo;
