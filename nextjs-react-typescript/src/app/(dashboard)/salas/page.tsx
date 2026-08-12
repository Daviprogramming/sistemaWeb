"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Search, XCircle, CalendarPlus, Building2 } from "lucide-react";

interface Sala {
  id: string;
  nome: string;
  capacidade: number;
  localizacao: string;
  disponivel: boolean;
  recursos: string[];
  descricao: string;
}

export default function SalasDisponiveisPage() {
  const [salas] = useState<Sala[]>([
    {
      id: "sala-01",
      nome: "Sala de Reunião 01",
      capacidade: 6,
      localizacao: "1º Andar - Bloco A",
      disponivel: true,
      recursos: [
        "Ar-condicionado",
        "Wi-Fi High-Speed",
        'TV 55"',
        "Quadro Branco",
      ],
      descricao:
        "Ideal para reuniões rápidas de alinhamento e chamadas com pequenas equipas.",
    },
    {
      id: "sala-02",
      nome: "Sala de Reunião 02",
      capacidade: 10,
      localizacao: "1º Andar - Bloco B",
      disponivel: true,
      recursos: [
        "Ar-condicionado",
        "Wi-Fi High-Speed",
        'TV 65"',
        "Videoconferência (Logitech)",
      ],
      descricao:
        "Espaço intermediário perfeito para apresentações de projetos e reuniões com clientes.",
    },
    {
      id: "sala-master",
      nome: "Sala Master Executive",
      capacidade: 12,
      localizacao: "2º Andar - Diretoria",
      disponivel: false,
      recursos: [
        "Ar-condicionado",
        "Wi-Fi High-Speed",
        "Projetor 4K",
        "Sistema de Som Premium",
        "Coffee Station",
      ],
      descricao:
        "Sala de alto padrão equipada para reuniões executivas e decisões estratégicas.",
    },
    {
      id: "auditorio",
      nome: "Auditório Principal",
      capacidade: 50,
      localizacao: "Térreo - Área de Eventos",
      disponivel: true,
      recursos: [
        "Ar-condicionado Central",
        "Projetor Duplo",
        "Microfones Sem Fio",
        "Palco",
        "Wi-Fi",
      ],
      descricao:
        "Amplo espaço preparado para workshops, palestras, treinamentos e eventos corporativos.",
    },
    {
      id: "brainstorm",
      nome: "Espaço Brainstorming",
      capacidade: 8,
      localizacao: "2º Andar - Inovação",
      disponivel: true,
      recursos: [
        "Ar-condicionado",
        "Wi-Fi",
        "Paredes Riscáveis",
        "Puffs Ergonômicos",
        'TV 50"',
      ],
      descricao:
        "Ambiente descontraído e criativo projetado para ideação e dinâmicas de grupo.",
    },
  ]);

  const [busca, setBusca] = useState("");
  const [apenasDisponiveis, setApenasDisponiveis] = useState(false);

  const salasFiltradas = salas.filter((sala) => {
    const combinaBusca =
      sala.nome.toLowerCase().includes(busca.toLowerCase()) ||
      sala.localizacao.toLowerCase().includes(busca.toLowerCase()) ||
      sala.recursos.some((r) => r.toLowerCase().includes(busca.toLowerCase()));

    const combinaDisponibilidade = apenasDisponiveis ? sala.disponivel : true;

    return combinaBusca && combinaDisponibilidade;
  });

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              Salas Disponíveis
            </h1>
            <p className="text-slate-500 mt-1">
              Conheça os nossos espaços de reunião, estrutura e recursos
              inclusos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-72">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Buscar por nome, andar ou recurso..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-600 outline-none transition-all bg-white text-sm"
              />
            </div>

            <label className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors select-none text-sm font-medium text-slate-700">
              <input
                type="checkbox"
                checked={apenasDisponiveis}
                onChange={(e) => setApenasDisponiveis(e.target.checked)}
                className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
              />
              Apenas livres agora
            </label>
          </div>
        </div>

        {salasFiltradas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salasFiltradas.map((sala) => (
              <div
                key={sala.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden"
              >
                <div className="p-6 border-b border-slate-100 flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-xl font-bold text-slate-900 leading-snug">
                      {sala.nome}
                    </h2>
                    {sala.disponivel ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Livre
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 flex-shrink-0">
                        <XCircle size={12} className="text-amber-500" />
                        Ocupada
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-slate-400 flex items-center gap-1">
                    <Building2 size={13} className="text-slate-400" />
                    {sala.localizacao}
                  </p>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
                      <Users size={18} className="text-indigo-600" />
                      <span>Capacidade: {sala.capacidade} pessoas</span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {sala.descricao}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {sala.recursos.map((recurso, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium"
                        >
                          {recurso}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/reservar"
                      className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                        sala.disponivel
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      }`}
                    >
                      <CalendarPlus size={18} />
                      {sala.disponivel
                        ? "Reservar esta Sala"
                        : "Agendar para depois"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-16 text-center flex flex-col items-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Search size={32} className="text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Nenhuma sala encontrada
            </h3>
            <p className="text-slate-500 mt-1 max-w-sm text-sm">
              Tente alterar os termos da pesquisa ou desmarcar o filtro de
              disponibilidade.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
