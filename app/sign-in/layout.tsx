export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<>
  <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
  <div className="w-full flex items-center justify-center">
    {children}
  </div>
</div>
  </>
  
      

  );
}
