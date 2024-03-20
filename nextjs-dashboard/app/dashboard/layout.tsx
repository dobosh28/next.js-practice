import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div>
        <SideNav />
      </div>
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}