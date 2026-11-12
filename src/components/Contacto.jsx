import { useState } from "react";
import { MapPin, Phone, Headphones } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contacto() {

    const [form, setForm] = useState({
        nombre: "",
        email: "",
        celular: "",
        mensaje: ""
    });

    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            await emailjs.send(
                "service_u104uph",   // 👈 reemplaza
                "template_wkbryhq",  // 👈 reemplaza
                {
                    nombre: form.nombre,
                    email: form.email,
                    celular: form.celular,
                    mensaje: form.mensaje
                },
                "sWBzqDwSs_PRALQvo"    // 👈 reemplaza
            );
            setStatus("success");
            setForm({ nombre: "", email: "", celular: "", mensaje: "" });
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contacto" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-14 items-stretch">

                    {/* LEFT */}
                    <div>
                        <span className="text-cyan-600 font-semibold tracking-widest uppercase text-xl">
                            Contacto
                        </span>

                        <h2 className="text-5xl font-bold text-slate-900 mt-4 leading-tight">
                            Conocenos
                        </h2>

                        <p className="text-slate-600 text-2xl mt-6 leading-relaxed max-w-xl">
                            Estamos listos para ayudarte a optimizar la gestión de tu empresa
                            con soluciones tecnológicas modernas, rápidas y eficientes.
                        </p>

                        <div className="mt-12 space-y-5">

                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center">
                                        <MapPin className="text-cyan-600" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-lg">Oficina principal</h4>
                                        <p className="text-slate-500 mt-2 leading-relaxed">Antioquia, Colombia.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center">
                                        <Phone className="text-cyan-600" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-lg">Atención comercial</h4>
                                        <p className="text-slate-500 mt-2">+57 324 678 7620</p>
                                        <p className="text-slate-500">info@mobile-tic.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0">
                                        <Headphones className="text-cyan-600" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-slate-900 text-lg">Soporte técnico</h4>
                                        <p className="text-slate-500 mt-2">info@mobile-tic.com</p>
                                        <div className="mt-4 text-sm text-slate-500 space-y-1">
                                            <p>Lunes a viernes: <span className="ml-1 font-medium text-slate-700">8:00 AM - 5:00 PM</span></p>
                                            <p>Sábados: <span className="ml-1 font-medium text-slate-700">8:00 AM - 12:00 PM</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-100 self-start mt-20">

                        <h3 className="text-3xl font-bold text-slate-900">
                            Envíanos un mensaje
                        </h3>

                        <p className="text-slate-500 mt-3">
                            Completa el formulario y te responderemos lo antes posible.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                            <input
                                type="text"
                                name="nombre"
                                value={form.nombre}
                                onChange={handleChange}
                                placeholder="Nombre completo"
                                required
                                className="w-full h-12 text-sm rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                            />

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Correo electrónico"
                                required
                                className="w-full h-12 text-sm rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                            />

                            <input
                                type="text"
                                name="celular"
                                value={form.celular}
                                onChange={handleChange}
                                placeholder="Número celular"
                                className="w-full h-12 text-sm rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                            />

                            <textarea
                                name="mensaje"
                                value={form.mensaje}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Cuéntanos en qué podemos ayudarte..."
                                required
                                className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none resize-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                            />

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full h-14 rounded-2xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-60"
                            >
                                {status === "loading" ? "Enviando..." : "Enviar mensaje"}
                            </button>

                            {status === "success" && (
                                <p className="text-center text-green-600 font-medium">
                                    ✅ Mensaje enviado correctamente
                                </p>
                            )}

                            {status === "error" && (
                                <p className="text-center text-red-500 font-medium">
                                    ❌ Hubo un error, intenta de nuevo
                                </p>
                            )}

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}