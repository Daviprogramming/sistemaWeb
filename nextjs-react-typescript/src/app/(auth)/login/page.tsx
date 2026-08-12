"use client";
import { useState, FormEvent } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Dados do login:", { email, password });

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-800">
            Acesso ao Sistema
          </h1>
          <p className="text-slate-500 mt-2 text-sm">
            Insira suas credenciais para continuar.
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-800"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.email@empresa.com"
              required
              className="px-4 py-2.5 rounded-lg border border-slate-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all bg-white text-slate-800"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-slate-800"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="px-4 py-2.5 rounded-lg border border-slate-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all bg-white text-slate-800"
            />
            <div className="flex justify-end mt-1">
              <a
                href="#"
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Esqueceu a senha ?
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:bg-slate-300 disabled:text-slate-500 flex justify-center items-center"
          >
            {isLoading ? (
              <span className="animate-pulse">Autenticando...</span>
            ) : (
              "Entrar"
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-600">
          Não tem conta ?{" "}
          <a
            href="./cadastro"
            className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Cadastre-se
          </a>
        </div>
      </div>
    </main>
  );
}
