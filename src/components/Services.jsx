import { useState } from "react";

import {
    Droplets,
    Smartphone,
    Printer,
    RefreshCcw,
    BarChart3,
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    FileCheck
} from "lucide-react";

export default function Services() {

    const [activeService, setActiveService] =
        useState("facturacion");

    const [order, setOrder] = useState([
        "facturacion",
        "lectura",
        "impresion",
        "inventario",
        "contabilidad",
        "dian",
        "calidadAgua"
    ]);


    const servicesContent = {

        facturacion: {
            title: "Marketing",
            description: "Gestiona usuarios, consumos, tarifas y facturación desde una plataforma moderna,segura y accesible desde cualquier lugar",
            icon: Droplets
        },

        lectura: {
            title: "Aquavida",
            description: "Captura lecturas desde dispositivos móviles sin necesidad de conexión a internet.",
            icon: Smartphone
        },

        impresion: {
            title: "Aquasitio",
            description: "Entrega facturas impresas directamente en la vivienda del usuario con impresoras térmicas portátiles.",
            icon: Printer
        },

        inventario: {
            title: "Inventarios",
            description: "Controla entradas, salidas, materiales y movimientos desde una plataforma web",
            icon: RefreshCcw
        },

        contabilidad: {
            title: "Contabilidad",
            description: "Obtén reportes financieros, balances y control administrativo en tiempo real",
            icon: BarChart3
        },

        dian: {
            title: "Ecosistema Dian",
            description: "Nómina electrónica, Factura electrónica, Documento soporte de egreso, Documento equivalente electrónico",
            icon: FileCheck
        },

        calidadAgua: {
            title: "Telemetría",
            description: "Monitorea la calidad del agua en tiempo real y asegura el cumplimiento de los estándares de potabilidad.",
            icon: Droplets
        }

    };


    const moveRight = () => {

        setOrder(prev => [
            ...prev.slice(1),
            prev[0]
        ]);

    };


    const moveLeft = () => {

        setOrder(prev => [
            prev[prev.length - 1],
            ...prev.slice(0, -1)
        ]);

    };



    return (

        <section
            id="servicios"
            className="bg-white py-32 px-6"
        >

            <div className="max-w-7xl mx-auto">

                {/* TITULO */}

                <div className="text-center mb-20">

                    <p className="
text-cyan-500
text-3xl
font-semibold
tracking-[0.3em]
uppercase
mb-4
">

                        Servicios

                    </p>

                    <h2 className="
text-5xl
md:text-6xl
text-slate-900
mb-6
">

                        Tecnología para
                        acueductos modernos

                    </h2>

                </div>



                {/* FLECHAS + CARRUSEL */}

                <div className="
flex
items-center
gap-4
">

                    <button
                        onClick={moveLeft}
                        className="
p-3
rounded-full
border
hover:bg-slate-100
flex-shrink-0
"
                    >

                        <ChevronLeft />

                    </button>


                    <div className="
flex
gap-6
overflow-hidden
flex-1
transition-all
duration-500
">

                        {

                            order.map((key) => {

                                const service =
                                    servicesContent[key];

                                const Icon =
                                    service.icon;

                                const isActive =
                                    activeService === key;


                                return (

                                    <button

                                        key={key}

                                        onClick={() =>
                                            setActiveService(key)
                                        }

                                        className={`

min-w-[300px]
max-w-[300px]

group
relative
overflow-hidden
rounded-3xl
p-4

min-h-[360px]

border

transition-all
duration-500

hover:-translate-y-2

${isActive

                                                ?

                                                `
bg-gradient-to-br
from-slate-900
via-slate-800
to-slate-900

text-white
`

                                                :

                                                `
bg-white
border-slate-200
`
                                            }

`}

                                    >

                                        <div className="
relative
z-10
flex
flex-col
h-full
">

                                            <div className="
w-20
h-20
rounded-3xl
bg-cyan-50
flex
items-center
justify-center
text-cyan-700
">

                                                <Icon size={34} />

                                            </div>


                                            <div className="
mt-8
space-y-4
">

                                                <h3 className="text-3xl">

                                                    {service.title}

                                                </h3>

                                                <p>

                                                    {service.description}

                                                </p>

                                            </div>


                                            <div className="
mt-auto
pt-8
flex
justify-end
">

                                                <ArrowUpRight />

                                            </div>

                                        </div>

                                    </button>

                                )

                            })

                        }

                    </div>


                    <button
                        onClick={moveRight}
                        className="
p-3
rounded-full
border
hover:bg-slate-100
flex-shrink-0
"
                    >

                        <ChevronRight />

                    </button>

                </div>



                <section id="caracteristicas">

                    <div className="
mt-20
overflow-hidden
rounded-[2.5rem]
">

                        <iframe

                            key={activeService}

                            src={`/services/${activeService}`}

                            className="
w-full
h-[90vh]
border-0
"

                        />

                    </div>

                </section>

            </div>

        </section>

    )

}
