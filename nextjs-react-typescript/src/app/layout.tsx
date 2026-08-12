import "./globals.css";

export const metadata = {
  title: "Sistema de Reservas",
  description: "Gerencie suas reservas de salas de forma fácil.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className="bg-slate-50 text-slate-900 antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
