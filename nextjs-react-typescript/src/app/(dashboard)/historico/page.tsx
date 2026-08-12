"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  MapPin,
  Trash2,
  CheckCircle2,
  XCircle,
  History,
} from "lucide-react";

type StatusReserva = "ativa" | "concluida" | "cancelada";

interface Reserva {
  id: string;
  encontro: string;
  sala: string;
  data: string;
  horario: string;
  status: StatusReserva;
}

export default function HistoricoReservasPage() {
  const [reservas] = useState<Reserva[]>([
    {
      id: "1",
      encontro: "Alinhamento de Sprint",
      sala: "Sala 01 (6 pessoas)",
      data: "20/08/2026",
      horario: "10:00 - 11:00",
      status: "ativa",
    },
    {
      id: "2",
      encontro: "Reunião com Clientes",
      sala: "Auditório (50 pessoas)",
      data: "15/08/2026",
      horario: "14:00 - 16:00",
      status: "ativa",
    },
    {
      id: "3",
      encontro: "Apresentação de Resultados",
      sala: "Sala Master (12 pessoas)",
      data: "02/08/2026",
      horario: "09:00 - 10:30",
      status: "concluida",
    },
    {
      id: "4",
      encontro: "Treinamento de Onboarding",
      sala: "Sala 02 (10 pessoas)",
      data: "28/07/2026",
      horario: "15:00 - 17:00",
      status: "concluida",
    },
    {
      id: "5",
      encontro: "Sincronização de Design",
      sala: "Sala 01 (6 pessoas)",
      data: "20/07/2026",
      horario: "11:00 - 12:00",
      status: "cancelada",
    },
  ]);

  const [busca, setBusca] = useState("");
  const [filtroStatus, setFiltroStatus] = useState<"todas" | StatusReserva>(
    "todas",
  );

  const reservasFiltradas = reservas.filter((reserva) => {
    const combinaBusca =
      reserva.encontro.toLowerCase().includes(busca.toLowerCase()) ||
      reserva.sala.toLowerCase().includes(busca.toLowerCase());

    const combinaStatus =
      filtroStatus === "todas" || reserva.status === filtroStatus;

    return combinaBusca && combinaStatus;
  });

  const renderStatusBadge = (status: StatusReserva) => {
    switch (status) {
      case "ativa":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Ativa
          </span>
        );
      case "concluida":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
            <CheckCircle2 size={12} className="text-slate-500" />
            Concluída
          </span>
        );
      case "cancelada":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <XCircle size={12} className="text-rose-500" />
            Cancelada
          </span>
        );
    }
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              Histórico de Reservas
            </h1>
            <p className="text-slate-500 mt-1">
              Registro completo de todas as suas solicitações, ativas e
              expiradas.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Buscar por reunião ou sala..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-600 outline-none transition-all bg-white text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setFiltroStatus("todas")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
              filtroStatus === "todas"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Todas ({reservas.length})
          </button>

          <button
            onClick={() => setFiltroStatus("ativa")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
              filtroStatus === "ativa"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Ativas ({reservas.filter((r) => r.status === "ativa").length})
          </button>

          <button
            onClick={() => setFiltroStatus("concluida")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
              filtroStatus === "concluida"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Concluídas / Expiradas (
            {reservas.filter((r) => r.status === "concluida").length})
          </button>

          <button
            onClick={() => setFiltroStatus("cancelada")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
              filtroStatus === "cancelada"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Canceladas (
            {reservas.filter((r) => r.status === "cancelada").length})
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {reservasFiltradas.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200/80">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Encontro
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Sala
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Horário
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {reservasFiltradas.map((reserva) => (
                    <tr
                      key={reserva.id}
                      className="hover:bg-slate-50/70 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="font-semibold text-slate-900 block">
                          {reserva.encontro}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600 text-sm">
                        <div className="flex items-center gap-1.5">
                          <MapPin
                            size={15}
                            className="text-indigo-500 flex-shrink-0"
                          />
                          <span>{reserva.sala}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600 text-sm">
                        <div className="flex items-center gap-1.5">
                          <Calendar
                            size={15}
                            className="text-indigo-500 flex-shrink-0"
                          />
                          <span>{reserva.data}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600 text-sm">
                        <div className="flex items-center gap-1.5">
                          <Clock
                            size={15}
                            className="text-indigo-500 flex-shrink-0"
                          />
                          <span>{reserva.horario}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {renderStatusBadge(reserva.status)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {reserva.status === "ativa" ? (
                          <Link
                            href="/cancelar"
                            className="inline-flex items-center justify-center p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                            title="Cancelar esta reserva"
                          >
                            <Trash2 size={18} />
                          </Link>
                        ) : (
                          <span className="text-xs text-slate-300 font-medium cursor-default">
                            —
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-16 text-center flex flex-col items-center">
              <div className="bg-slate-100 p-4 rounded-full mb-4">
                <History size={32} className="text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Nenhum registro encontrado
              </h3>
              <p className="text-slate-500 mt-1 max-w-sm text-sm">
                Não encontramos nenhuma reserva para o filtro ou termo
                pesquisado.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
