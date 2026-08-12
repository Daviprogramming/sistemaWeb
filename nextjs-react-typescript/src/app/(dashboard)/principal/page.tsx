import Link from "next/link";

export default function DashboardHome() {
  const userName = "Davi Vinícius";

  return (
    <main className="flex flex-col items-center justify-center flex-1 h-[calc(100vh-80px)] p-6">
      <div className="flex flex-col items-center w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Seja Bem vindo, {userName}!
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Link
            href="/reservar"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-4 px-10 rounded-xl transition-all shadow-sm flex items-center justify-center text-center w-full sm:w-[280px]"
          >
            Realizar Reserva
          </Link>

          <Link
            href="/historico"
            className="bg-white hover:bg-slate-50 text-slate-800 text-lg font-semibold py-4 px-10 rounded-xl border border-slate-200 transition-all shadow-sm flex items-center justify-center text-center w-full sm:w-[280px]"
          >
            Consultar Reserva
          </Link>
        </div>
      </div>
    </main>
  );
}
