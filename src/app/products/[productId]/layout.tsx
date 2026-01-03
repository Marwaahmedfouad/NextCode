





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`antialiased`}
      >
        <header className="bg-red-300">
          <p>Header</p>
        </header>
        {children}

       <footer className="bg-red-900">
        <p >feature product</p>
       </footer>
      </body>
    </html>
  );
}
