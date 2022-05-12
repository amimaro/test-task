export default function Layout({ children }: { children: any }) {
  return (
    <div className="w-96 h-full max-h-[100vh] shadow-md pt-4 px-4 mx-auto relative">
      {children}
    </div>
  );
}
