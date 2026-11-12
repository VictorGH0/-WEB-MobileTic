import {
  ShieldCheck,
  Target,
  Eye,
  Lightbulb,
  Printer,
  BarChart3,
  Cloud,
} from "lucide-react";

export default function CorporateSections() {
  return (
    <>

      {/* QUIÉNES SOMOS */}
      <section
        id="quienes-somos"
        className="bg-white py-32 px-6"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* Texto */}
          <div>

            <p className="
              text-cyan-600
              font-regular
              tracking-[0.3em]
              uppercase
              mb-6
            ">
              Quiénes somos
            </p>

            <h2 className="
              text-6xl
              md:text-6xl
              font-semibold
              text-slate-900
              leading-tight
              mb-8
            ">

              Mobile-Tic es una empresa enfocada en el desarrollo de soluciones tecnológicas

            </h2>

            <p className="
              text-3xl
              text-slate-900
              leading-[1.3]
              font-light
              mb-8
            ">

              Desarrollamos soluciones tecnológicas para optimizar la facturación,
              la gestión administrativa y los procesos operativos de los acueductos
              rurales mediante plataformas web y aplicaciones móviles.

            </p>

            <p className="
              text-2xl
              text-slate-600
              leading-[1.3]
              font-light
            ">

              Nuestro enfoque combina innovación, eficiencia y accesibilidad, permitiendo
              a nuestros clientes transformar sus procesos mediante tecnología moderna,
              segura y adaptable a sus necesidades.

            </p>

          </div>

          {/* Imagen */}
          <div className="relative">

            {/* Glow */}
            <div className="
              absolute
              inset-0
              bg-cyan-500/10
              blur-3xl
              rounded-full
            "></div>

            <div className="
              relative
              rounded-[2rem]
              overflow-hidden
              shadow-[0_20px_80px_-20px_rgba(0,0,0,0.25)]
            ">

              <img
                src="/somos.png"
                alt="Operación de acueductos"
                className="
                  w-full
                  h-[600px]
                  object-cover
                "
              />

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-slate-900/70
                via-transparent
                to-transparent
              "></div>

              {/* Card flotante */}
              <div className="
                absolute
                bottom-3
                left-4
                right-4
                h-38
              ">

                <div className="
                  bg-white/80
                  backdrop-blur-xl
                  rounded-3xl
                  p-3
                  border
                  border-white/50
                  shadow-2xl
                ">

                  <div className="
                    flex
                    items-center
                    gap-4
                    mb-4
                  ">

                    <div className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-cyan-100
                      flex
                      items-center
                      justify-center
                    ">

                      <ShieldCheck className="text-cyan-700" />

                    </div>

                    <div>

                      <p className="
                        text-slate-500
                        text-sm
                      ">
                        Soluciones seguras
                      </p>

                      <h3 className="
                        text-slate-900
                        text-2xl
                        font-semibold
                      ">
                        Gestión inteligente
                      </h3>

                    </div>

                  </div>

                  <p className="
                    text-slate-600
                    leading-relaxed
                  ">

                    Modernizamos procesos críticos mediante herramientas
                    diseñadas para operar eficientemente en entornos rurales.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* MISIÓN Y VISIÓN */}
      <section className="
        bg-slate-50
        py-32
        px-6
      ">

        <div className="max-w-7xl mx-auto">

          {/* Título */}
          <div className="text-center mb-20">



            <h2 className="
              text-3xl
              md:text-6xl
              font-semibold
              
              leading-tight
            ">

              Comprometidos con la modernización del sector

            </h2>

          </div>


          {/* Grid */}
          <div className="
            grid
            lg:grid-cols-2
            gap-8
          ">

            {/* Misión */}
            <div className="
              bg-white
              rounded-[2rem]
              p-10
              border
              border-slate-200
              hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.15)]
              transition-all
              duration-500
            ">

              <div className="
                w-20
                h-20
                rounded-3xl
                bg-cyan-100
                flex
                items-center
                justify-center
                mb-8
              ">

                <Target
                  size={38}
                  className="text-cyan-700"
                />

              </div>

              <h3 className="
                text-4xl
                font-semibold
                text-slate-900
                mb-6
              ">
                Misión
              </h3>

              <p className="
                text-slate-600
                text-xl
                leading-relaxed
              ">

                Apoyar el crecimiento productivo de nuestros clientes, entregando herramientas,
                conocimiento y tecnología informática que satisfaga sus necesidades en el mercado
                nacional e internacional; a través del desarrollo aplicado a las necesidades específicas
                de cada empresa o persona ofreciéndoles soluciones integrales y respaldados
                con nuestra asesoría, soporte y mantenimiento permanente.

              </p>

            </div>


            {/* Visión */}
            <div className="
              bg-white
              rounded-[2rem]
              p-10
              border
              border-slate-200
              hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.15)]
              transition-all
              duration-500
            ">

              <div className="
                w-20
                h-20
                rounded-3xl
                bg-cyan-100
                flex
                items-center
                justify-center
                mb-8
              ">

                <Eye
                  size={38}
                  className="text-cyan-700"
                />

              </div>

              <h3 className="
                text-4xl
                font-semibold
                text-slate-900
                mb-6
              ">
                Visión
              </h3>

              <p className="
                text-slate-600
                text-xl
                leading-relaxed
              ">

                Ser una empresa líder, modelo en desarrollo y aplicación de herramientas de
                tecnología informática; sólida, rentable y en permanente evolución que satisfaga
                las necesidades de herramientas informáticas de calidad, competentes e innovadoras y,
                comprometida con el servicio al cliente, la formación integral de su recurso humano y tecnológico.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* POR QUÉ ELEGIRNOS */}
      <section className="
        bg-white
        py-32
        px-6
      ">

        <div className="max-w-7xl mx-auto">

          {/* Título */}
          <div className="text-center mb-24">



            <h2 className="
              text-5xl
              md:text-6xl
              font-semibold
              text-slate-900
              mb-8
            ">

              ¿Por qué elegirnos?

            </h2>

            <p className="
              text-xl
              text-slate-600
              max-w-3xl
              mx-auto
              leading-relaxed
              font-regular
            ">

              Diseñamos herramientas enfocadas en resolver los desafíos reales
              de la operación y administración de los acueductos rurales.

            </p>

          </div>



          {/* Cards */}
          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
          ">

            {/* Card */}
            <div className="
              group
              rounded-[2rem]
              border
              border-slate-200
              p-10
              bg-gradient-to-b
              from-white
              to-slate-50
              hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.2)]
              hover:-translate-y-3
              transition-all
              duration-500
            ">

              <div className="
                w-20
                h-20
                rounded-3xl
                bg-cyan-100
                flex
                items-center
                justify-center
                mb-8
                group-hover:scale-110
                transition-all
                duration-500
              ">

                <Lightbulb
                  size={36}
                  className="text-cyan-700"
                />

              </div>

              <h3 className="
                text-3xl
                font-semibold
                text-slate-900
                mb-5
              ">

                Innovación Tecnológica

              </h3>

              <p className="
                text-lg
                text-slate-600
                leading-relaxed
              ">

                WhatsApp, GPS, facturación electrónica y herramientas modernas para una gestión más inteligente.

              </p>

            </div>



            {/* Card */}
            <div className="
              group
              rounded-[2rem]
              border
              border-slate-200
              p-10
              bg-gradient-to-b
              from-white
              to-slate-50
              hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.2)]
              hover:-translate-y-3
              transition-all
              duration-500
            ">

              <div className="
                w-20
                h-20
                rounded-3xl
                bg-cyan-100
                flex
                items-center
                justify-center
                mb-8
                group-hover:scale-110
                transition-all
                duration-500
              ">

                <Printer
                  size={36}
                  className="text-cyan-700"
                />

              </div>

              <h3 className="
                text-3xl
                font-semibold
                text-slate-900
                mb-5
              ">

                Facturación inmediata

              </h3>

              <p className="
                text-lg
                text-slate-600
                leading-relaxed
              ">

                Genera e imprime facturas directamente en campo.

              </p>

            </div>



            {/* Card */}
            <div className="
              group
              rounded-[2rem]
              border
              border-slate-200
              p-10
              bg-gradient-to-b
              from-white
              to-slate-50
              hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.2)]
              hover:-translate-y-3
              transition-all
              duration-500
            ">

              <div className="
                w-20
                h-20
                rounded-3xl
                bg-cyan-100
                flex
                items-center
                justify-center
                mb-8
                group-hover:scale-110
                transition-all
                duration-500
              ">

                <Cloud
                  size={36}
                  className="text-cyan-700"
                />

              </div>

              <h3 className="
                text-3xl
                font-semibold
                text-slate-900
                mb-5
              ">

                Plataforma web

              </h3>

              <p className="
                text-lg
                text-slate-600
                leading-relaxed
              ">

                Accede desde cualquier lugar sin instalaciones complejas.

              </p>

            </div>



            {/* Card */}
            <div className="
              group
              rounded-[2rem]
              border
              border-slate-200
              p-10
              bg-gradient-to-b
              from-white
              to-slate-50
              hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.2)]
              hover:-translate-y-3
              transition-all
              duration-500
            ">

              <div className="
                w-20
                h-20
                rounded-3xl
                bg-cyan-100
                flex
                items-center
                justify-center
                mb-8
                group-hover:scale-110
                transition-all
                duration-500
              ">

                <BarChart3
                  size={36}
                  className="text-cyan-700"
                />

              </div>

              <h3 className="
                text-3xl
                font-semibold
                text-slate-900
                mb-5
              ">

                Administración centralizada

              </h3>

              <p className="
                text-lg
                text-slate-600
                leading-relaxed
              ">

                Control total desde una sola plataforma integrada.

              </p>

            </div>

          </div>

        </div>

      </section>




    </>
  );
}