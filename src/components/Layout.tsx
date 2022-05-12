export default function Layout({ children }: { children: any }) {
  return (
    <div className="w-96 h-full shadow-md py-4 px-6 mx-auto relative">
      {children}
    </div>
  );
}
