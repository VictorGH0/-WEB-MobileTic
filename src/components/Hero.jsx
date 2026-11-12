export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center pt-30 justify-left text-white overflow-hidden">


            <img
                src="/test_1.png"
                alt="Acueducto"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>

            {/* Contenido */}
            <div className="relative z-10 max-w-4xl text-left px-6 backdrop-blur-sm">

                <h1 className="
                    text-5xl
                    sm:text-6xl
                    md:text-7xl
                    lg:text-8xl
                    font-extrabold
                    leading-tight
                    mb-8
                    pl-10
                ">
                    Sistema de facturación para{" "}
                    <span className="text-cyan-400">acueductos</span>
                </h1>

                <p className="
                    text-lg
                    md:text-2xl
                    text-gray-200
                    mb-10
                    max-w-3xl
                    mx-auto
                  leading-relaxed
                ">
                    Administra usuarios, genera facturas y controla tu operación
                    de forma simple, segura y sin necesidad de instalaciones.
                </p>

                <div className="
                    flex
                    flex-col
                    sm:flex-row
                    gap-5
                    justify-center
                    items-center
                ">

                    <button className="bg-cyan-500 hover:bg-cyan-600 transition px-10 py-4 rounded-xl font-semibold shadow-2xl hover:scale-105 duration-300">
                        Solicitar demostración
                    </button>

                    <a
                        href="#servicios"
                        className="
                            border
                            border-white/30
                            hover:bg-white/10
                            transition
                            duration-300
                            hover:scale-105
                            px-8
                            py-3
                            rounded-lg      
                            font-semibold
                            inline-flex
                            items-center
                            justify-center
                        "
                    >
                        Conocer funcionalidades
                    </a>

                </div>
            </div>
        </section>
    );
}