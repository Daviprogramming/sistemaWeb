"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const isCurrentRoute = (route: string) => pathname === route;

  return (
    <header className="bg-indigo-600 w-full h-20 px-8 flex items-center justify-between shadow-sm">
      <div className="flex-shrink-0">
        <Link href="/">
          <div className="bg-white text-indigo-600 font-bold px-4 py-2 rounded-lg flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors">
            LogoAqui
          </div>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link
          href="/reservar"
          className={`text-sm font-medium transition-colors hover:text-white ${
            isCurrentRoute("/reservar") ? "text-white" : "text-indigo-200"
          }`}
        >
          Realizar Reserva
        </Link>
        <Link
          href="/cancelar"
          className={`text-sm font-medium transition-colors hover:text-white ${
            isCurrentRoute("/cancelar") ? "text-white" : "text-indigo-200"
          }`}
        >
          Cancelar reserva
        </Link>
        <Link
          href="/salas"
          className={`text-sm font-medium transition-colors hover:text-white ${
            isCurrentRoute("/salas") ? "text-white" : "text-indigo-200"
          }`}
        >
          Salas disponíveis
        </Link>

        <Link
          href="/reservar"
          className={`text-sm font-medium transition-colors hover:text-white ${
            isCurrentRoute("/consultar") ? "text-white" : "text-indigo-200"
          }`}
        >
          Consultar Reserva
        </Link>
        <Link
          href="/historico"
          className={`text-sm font-medium transition-colors hover:text-white ${
            isCurrentRoute("/historico") ? "text-white" : "text-indigo-200"
          }`}
        >
          Histórico
        </Link>
      </nav>

      <div className="flex items-center gap-6">
        <div className="bg-cyan-400 text-slate-900 font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:bg-cyan-300 transition-colors">
          DV
        </div>

        <button
          onClick={() => console.log("Deslogando o usuário...")}
          className="text-indigo-100 hover:text-red-400 font-medium text-sm transition-colors"
        >
          Sair
        </button>
      </div>
    </header>
  );
}
