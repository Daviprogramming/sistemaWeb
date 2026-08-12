"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, MapPin, AlignLeft } from "lucide-react";

export default function CancelarReservaPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const reservaMock = {
    encontro: "Sincronização de Projeto",
    sala: "Sala Master (Capacidade: 12 lugares)",
    data: "15/08/2026",
    horario: "14h00 - 15h00",
  };

  const handleConfirmarCancelamento = () => {
    setIsLoading(true);

    console.log("Cancelando reserva...");

    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 2000);
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-8 pb-0 text-left">
          <h1 className="text-2xl font-bold text-slate-900">
            Confirmar Cancelamento
          </h1>
          <p className="text-slate-500 mt-2 text-sm">
            Deseja cancelar a reserva selecionada?{" "}
            <span className="font-semibold text-slate-700">
              Atenção: Esta ação não pode ser desfeita.
            </span>
          </p>
        </div>

        <div className="p-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                <AlignLeft size={16} className="text-slate-400" />
                Encontro
              </label>
              <input
                type="text"
                readOnly
                disabled
                value={reservaMock.encontro}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 outline-none cursor-not-allowed"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                <MapPin size={16} className="text-slate-400" />
                Sala
              </label>
              <input
                type="text"
                readOnly
                disabled
                value={reservaMock.sala}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 outline-none cursor-not-allowed"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                <Calendar size={16} className="text-slate-400" />
                Data
              </label>
              <input
                type="text"
                readOnly
                disabled
                value={reservaMock.data}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 outline-none cursor-not-allowed"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                <Clock size={16} className="text-slate-400" />
                Horário
              </label>
              <input
                type="text"
                readOnly
                disabled
                value={reservaMock.horario}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 outline-none cursor-not-allowed"
              />
            </div>
          </div>

          <hr className="border-slate-100 my-2" />

          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-2">
            <Link
              href="/"
              className="text-slate-500 hover:text-slate-800 font-semibold transition-colors px-6 py-3 order-2 sm:order-1"
            >
              Manter Reserva
            </Link>

            <button
              onClick={handleConfirmarCancelamento}
              disabled={isLoading}
              className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-sm disabled:bg-slate-300 order-1 sm:order-2"
            >
              {isLoading ? "Cancelando..." : "Sim, Cancelar Reserva"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
