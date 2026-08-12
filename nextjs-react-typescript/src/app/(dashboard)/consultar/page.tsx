"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Trash2,
  Search,
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function ConsultarReservasPage() {
  const [reservas, setReservas] = useState([
    {
      id: "1",
      encontro: "Sprint Planning",
      sala: "Sala 01",
      data: "12/08/2026",
      horario: "09:00 - 10:00",
    },
    {
      id: "2",
      encontro: "Feedback Trimestral",
      sala: "Auditório",
      data: "14/08/2026",
      horario: "14:00 - 15:30",
    },
    {
      id: "3",
      encontro: "Reunião de Alinhamento",
      sala: "Sala 02",
      data: "18/08/2026",
      horario: "11:00 - 12:00",
    },
  ]);

  const [busca, setBusca] = useState("");

  const reservasFiltradas = reservas.filter((r) =>
    r.encontro.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Minhas Reservas
            </h1>
            <p className="text-slate-500 mt-1">
              Gerencie e visualize todos os seus agendamentos.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Buscar por reunião..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-600 outline-none transition-all bg-white"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {reservasFiltradas.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-bottom border-slate-100">
                    <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                      Encontro
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                      Sala
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                      Data
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                      Horário
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-700 text-center">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {reservasFiltradas.map((reserva) => (
                    <tr
                      key={reserva.id}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="font-medium text-slate-900">
                          {reserva.encontro}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600 flex items-center gap-2">
                        <MapPin size={14} className="text-indigo-500" />
                        {reserva.sala}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-indigo-500" />
                          {reserva.data}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-indigo-500" />
                          {reserva.horario}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-3">
                          <Link
                            href="/cancelar"
                            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all tooltip"
                            title="Excluir reserva"
                          >
                            <Trash2 size={18} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-20 text-center flex flex-col items-center">
              <div className="bg-slate-100 p-4 rounded-full mb-4">
                <Calendar size={32} className="text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Nenhuma reserva encontrada
              </h3>
              <p className="text-slate-500 mt-1 max-w-xs mx-auto">
                Você ainda não possui agendamentos ou sua busca não retornou
                resultados.
              </p>
              <Link
                href="/reservar"
                className="mt-6 text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
              >
                + Realizar nova reserva
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
