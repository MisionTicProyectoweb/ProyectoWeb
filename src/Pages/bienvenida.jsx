import React from 'react'

const Bienvenida = () => {
    return (
        <div>
            <div id="barraNavegador" className="mt-0 bg-indigo-500 flex items-center justify-center w-full h-20">
                <nav className="flex text-white">
                    <div className="mr-10">
                        <ul className="flex">
                            <li className="ml-1 mr-4 text-5xl font-semibold">T-Solutions</li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="mt-5 ml-36 mr-36 h-64 grid grid-cols-3">
                <div className="flex flex-col items-center justify-center h-full bg-white border-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-44 w-36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <label>Faber Hoyos</label>
                </div>
                <div className="flex flex-col items-center justify-center h-full ml-2 bg-white border-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-44 w-36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <label>Manuel Guzman</label>
                </div>
                <div className="flex flex-col items-center justify-center h-full ml-2 bg-white border-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-44 w-36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <label>Nicolas Jimenez</label>
                </div>
            </div>
            <div className="mt-5 ml-36 mr-36 h-64 grid grid-cols-3">
                <div className="flex flex-col items-center justify-center h-full bg-white border-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-44 w-36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <label>Yineth Contreras</label>
                </div>
                <div className="flex flex-col items-center justify-center h-full ml-2 bg-white border-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-44 w-36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <label>Marcela Reyes</label>
                </div>
                <div className="flex flex-col items-center justify-center h-full ml-2 bg-white border-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-44 w-36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <label>Juan Osorio</label>
                </div>
            </div>
        </div>
    )
}

export default Bienvenida
