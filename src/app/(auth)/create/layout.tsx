interface LayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Criar novo usuário",
  description: "Criar novo usuário",
};

const Layout = async ({ children }: LayoutProps) => {
  return (
    <html lang="en" className="h-screen w-screen">
      <body className="h-screen w-screen">{children}</body>
    </html>
  );
};

export default Layout;
