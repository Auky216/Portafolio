interface AppBlockProps {
    name: string;
    description: string;
    icon: string;
    link: string;
    tecnologies: any;
}

export default function App({ name, description, icon, link, tecnologies }: AppBlockProps) {
    return (
        <div className="flex flex-col h-full bg-white rounded-2xl shadow-xl p-6 transition transform hover:scale-105 hover:shadow-2xl">
            {/* Icono */}
            <div className="flex justify-center mb-4">
                <img src={icon} alt={name} width={64} height={64} className="rounded-lg" />
            </div>

            {/* Contenido */}
            <div className="flex flex-col flex-1">
                <h1 className="text-xl font-semibold text-gray-900">{name}</h1>
                <p className="text-gray-600 text-sm mt-2">{description}</p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-3 mt-4">
                    {tecnologies.map((tecnology: any, index: number) => (
                        <div key={index} className="text-gray-700 text-2xl">{tecnology}</div>
                    ))}
                </div>
            </div>

            {/* Botón */}
            <div className="flex-shrink-0 mt-4">
                <a
                    href={link}
                    target="_blank"
                    className="block w-full text-center bg-gray-900 text-white py-2 rounded-lg text-sm font-medium transition hover:bg-gray-700"
                >
                    Ver más
                </a>
            </div>
        </div>
    );
}
