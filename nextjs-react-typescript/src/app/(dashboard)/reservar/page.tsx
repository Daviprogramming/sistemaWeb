"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, MapPin, AlignLeft } from "lucide-react";

export default function ReservarPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    encontro: "",
    sala: "",
    data: "",
    inicio: "",
    fim: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Dados da reserva:", formData);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-8 pb-0 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Nova Reserva</h1>
          <p className="text-slate-500 mt-2 text-sm">
            Preencha os detalhes para garantir o seu espaço.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="encontro"
              className="text-sm font-semibold text-slate-800 flex items-center gap-2"
            >
              <AlignLeft size={16} className="text-indigo-600" />
              Encontro
            </label>
            <input
              id="encontro"
              type="text"
              required
              placeholder="Título da reunião"
              value={formData.encontro}
              onChange={(e) =>
                setFormData({ ...formData, encontro: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="sala"
              className="text-sm font-semibold text-slate-800 flex items-center gap-2"
            >
              <MapPin size={16} className="text-indigo-600" />
              Sala
            </label>
            <select
              id="sala"
              required
              value={formData.sala}
              onChange={(e) =>
                setFormData({ ...formData, sala: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 outline-none appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1em_1em]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
              }}
            >
              <option value="">Selecione uma sala</option>
              <option value="sala-01">Sala de Reunião 01 (6 pessoas)</option>
              <option value="sala-02">Sala de Reunião 02 (10 pessoas)</option>
              <option value="auditório">
                Auditório Principal (50 pessoas)
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="data"
              className="text-sm font-semibold text-slate-800 flex items-center gap-2"
            >
              <Calendar size={16} className="text-indigo-600" />
              Data
            </label>
            <input
              id="data"
              type="date"
              required
              value={formData.data}
              onChange={(e) =>
                setFormData({ ...formData, data: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="inicio"
                className="text-sm font-semibold text-slate-800 flex items-center gap-2"
              >
                <Clock size={16} className="text-indigo-600" />
                Horário Início
              </label>
              <input
                id="inicio"
                type="time"
                required
                value={formData.inicio}
                onChange={(e) =>
                  setFormData({ ...formData, inicio: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="fim"
                className="text-sm font-semibold text-slate-800 flex items-center gap-2"
              >
                <Clock size={16} className="text-indigo-600" />
                Horário Fim
              </label>
              <input
                id="fim"
                type="time"
                required
                value={formData.fim}
                onChange={(e) =>
                  setFormData({ ...formData, fim: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
            <Link
              href="/"
              className="text-slate-500 hover:text-slate-800 font-semibold transition-colors order-2 sm:order-1"
            >
              Cancelar
            </Link>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-12 rounded-xl transition-all shadow-md disabled:bg-slate-300 order-1 sm:order-2"
            >
              {isLoading ? "Processando..." : "Confirmar Reserva"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
