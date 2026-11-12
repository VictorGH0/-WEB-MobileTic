export default function CorporateHero() {
  return (
    <section className="
      relative
      min-h-screen
      overflow-hidden
      bg-gradient-to-br
      from-slate-800
      via-slate-700
      to-cyan-800
      text-white
      flex
      items-center
    ">

      {/* Fondo */}
      <div className="
        absolute
        inset-0
        bg-[url('/fondo_card.jpg')]
        bg-cover
        bg-center
        opacity-20
      "></div>

      {/* Overlay */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-br
        from-slate-900/70
        via-slate-800/60
        to-cyan-900/50
      "></div>

      {/* Glow */}
      <div className="
        absolute
        top-0
        right-0
        w-[700px]
        h-[700px]
        bg-cyan-500/10
        rounded-full
        blur-3xl
      "></div>

      {/* Contenido */}
      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        py-32
        grid
        lg:grid-cols-2
        gap-20
        items-center
      ">

        {/* Texto */}
        <div>



          {/* Título */}
          <h1 className="
            text-5xl
            md:text-7xl
            font-Regular
            leading-tight
            mb-8
          ">

            Modernizamos la gestión de


            <span className="
              block
              text-cyan-400
            ">
              acueductos y
              servicios públicos
            </span>

          </h1>

          {/* Descripción */}
          <p className="
            text-xl
            md:text-2xl
            text-slate-300
            leading-relaxed
            font-Regular
            max-w-2xl
            mb-12
          ">

            Integre facturación electrónica, lecturas móviles,
            recaudo y operación administrativa en una sola
            plataforma segura, inteligente y disponible 24/7.

          </p>

          {/* Botones */}
          <div className="
            flex
            flex-col
            sm:flex-row
            gap-5
          ">

            <a
              href="#servicios"
              className="
                inline-flex
                items-center
                justify-center
                bg-cyan-500
                hover:bg-cyan-600
                transition-all
                duration-300
                hover:scale-105
                px-8
                py-4
                rounded-2xl
                font-semibold
                text-lg
                shadow-2xl
              "
            >
              Conocer plataforma
            </a>

            <a
              href="#quienes-somos"
              className="
                inline-flex
                items-center
                justify-center
                border
                border-white/20
                hover:bg-white/10
                transition-all
                duration-300
                px-8
                py-4
                rounded-2xl
                font-semibold
                text-lg
              "
            >
              Quiénes somos
            </a>

          </div>

        </div>

        {/* Panel visual */}
        <div className="relative">

          {/* Glow */}
          <div className="
            absolute
            inset-0
            bg-cyan-500/20
            blur-3xl
            rounded-full
          "></div>

          {/* Card principal */}
          <div className="
            relative
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            rounded-[2rem]
            p-8
            shadow-2xl
          ">

            {/* Top */}
            <div className="
              flex
              items-center
              justify-between
              mb-10
            ">

              <div>



                <h3 className="
                  text-3xl
                  font-semibold
                ">
                  Gestión Inteligente
                </h3>

              </div>

              <div className="
                w-16
                h-16
                rounded-2xl
                bg-cyan-500/20
                flex
                items-center
                justify-center
                border
                border-cyan-400/20
              ">

                <span className="text-3xl">
                  💧
                </span>

              </div>

            </div>

            {/* Estadísticas */}
            <div className="
              grid
              grid-cols-2
              gap-6
            ">

              <div className="
                bg-white/5
                rounded-2xl
                p-6
                border
                border-white/5
              ">

                <p className="
                  mb-2
                  text-slate-200
                  text-3x1
                ">
                  Facturas procesadas
                </p>

                <h4 className="
                  text-4xl
                  font-bold
                  text-cyan-400
                ">
                  +2M
                </h4>

              </div>

              <div className="
                bg-white/5
                rounded-2xl
                p-6
                border
                border-white/5
              ">

                <p className="
                  mb-2
                  text-slate-200
                  text-3x1
                ">
                  Acueductos conectados
                </p>

                <h4 className="
                  text-4xl
                  font-bold
                  text-cyan-400
                ">
                  +200
                </h4>

              </div>

              <div className="
                bg-white/5
                rounded-2xl
                p-6
                border
                border-white/5
              ">

                <p className="
                  mb-2
                  text-slate-200
                  text-3x1
                ">
                  Operación
                </p>

                <h4 className="
                  text-2xl
                  font-bold
                ">
                  Tiempo real
                </h4>

              </div>

              <div className="
                bg-white/5
                rounded-2xl
                p-6
                border
                border-white/5
              ">

                <p className="
                  mb-2
                  text-slate-200
                  text-3x1
                ">
                  Disponibilidad
                </p>

                <h4 className="
                  text-2xl
                  font-bold
                ">
                  24/7
                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}