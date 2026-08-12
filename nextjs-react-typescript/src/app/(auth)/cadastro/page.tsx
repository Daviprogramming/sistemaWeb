"use client";

import { useState, FormEvent } from "react";

export default function RegisterPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState("");

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setErro("");

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem. Verifique e tente novamente.");
      return;
    }

    setIsLoading(true);

    console.log("Enviando para API:", { nome, email, senha });

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 w-full max-w-md">
        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="nome"
              className="text-sm font-semibold text-slate-800"
            >
              Nome
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="px-4 py-2.5 rounded-lg border border-slate-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all bg-white text-slate-800"
            />
          </div>

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
              required
              className="px-4 py-2.5 rounded-lg border border-slate-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all bg-white text-slate-800"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="senha"
              className="text-sm font-semibold text-slate-800"
            >
              Senha
            </label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="px-4 py-2.5 rounded-lg border border-slate-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all bg-white text-slate-800"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="confirmarSenha"
              className="text-sm font-semibold text-slate-800"
            >
              Senha novamente
            </label>
            <input
              id="confirmarSenha"
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
              className="px-4 py-2.5 rounded-lg border border-slate-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all bg-white text-slate-800"
            />
          </div>

          {erro && (
            <p className="text-sm text-red-500 font-medium text-center">
              {erro}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:bg-slate-300 disabled:text-slate-500 flex justify-center items-center"
          >
            {isLoading ? (
              <span className="animate-pulse">Cadastrando...</span>
            ) : (
              "Cadastrar"
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-600">
          Já tem uma conta ?{" "}
          <a
            href="./login"
            className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Faça Login
          </a>
        </div>
      </div>
    </main>
  );
}
