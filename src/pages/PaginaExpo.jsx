import React from "react";
import './style.css';


function PaginaExpo() {
    return (
        <div className="bg-customRed bg-custom-pattern bg-repeat min-h-screen flex flex-col justify-center items-center p-4 w-full">
            {/* Top Title */}
            <header className="text-4xl font-bold text-center text-white p-5 my-4 w-full">
                Bienvenidos a la <span className=" text-customBlue font-bold  ">1</span>Expo <span className="bg-customBlue p-2 rounded-md">Provincial</span>  E.P.S CFPI 1
            </header>

            {/* Main Content */}
            <main className="flex flex-col lg:flex-row w-full max-w-full gap-8 w-full bg-opacity-40 text-customBlue">
                {/* Left Section with List */}
                <section className="bg-white p-6 shadow-md rounded-md lg:w-1/2 ">
                    <ul className=" list-m  list-inside space-y-2">
                        <li className="text-2xl font-bold"> <span className="text-customRed text-3xl">#</span> Colonia Aurora</li>
                        <li className="text-2xl font-bold">  <span className="text-customRed text-3xl">#</span>Oberá</li>
                        <li className="text-2xl font-bold">  <span className="text-customRed text-3xl">#</span>Eldorado</li>
                        <li className="text-2xl font-bold">  <span className="text-customRed text-3xl">#</span>Capioví</li>
                        <li className="text-2xl font-bold">  <span className="text-customRed text-3xl">#</span>Jardín América</li>
                        <li className="text-2xl font-bold">  <span className="text-customRed text-3xl">#</span>Posadas</li>
                    </ul>
                    <div className="mt-6">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Placeholder"
                            className="w-full h-auto object-cover rounded-md shadow-md"
                        />
                    </div>
                </section>

                {/* Right Section with Text and Subsection */}
                <section className="bg-white p-6 shadow-md rounded-md lg:w-1/2">
                    <div className="h-full w-full">
                    <div className="h-1/2 text-center w-full">
                        <h2 className="text-2xl font-semibold mb-4">EPS</h2>
                        <h3 className="text-2xl font-semibold mb-4"> Educación Profesional Secundaria</h3>
                        <p className="mb-4">
                        Es una nueva oferta educativa, que otorga certificación profesional (en la especialidad elegida) y título secundario. Brinda formación para el trabajo a la vez que posibilita la continuidad de estudios superiores.

                        </p>
                        <p className="mb-4">
                        Está destinada a jóvenes de 14 a 18 años que quieran comenzar la secundaria, retomarla
                        </p>
                    </div>

                    <div className="flex justify-end items-end h-1/2">
                        <h3 className="text-2xl font-semibold   mt-6">
                            Te escuchamos : [Insertar link]
                        </h3>
                    </div>
                    </div>

                </section>
            </main>

            {/* Footer */}
            <footer className="w-full text-center py-4 mt-4 bg-gray-500 text-white">
                Footer Content Here
            </footer>
        </div>
    );
}

export default PaginaExpo;
