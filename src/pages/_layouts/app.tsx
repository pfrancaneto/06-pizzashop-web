import { Outlet } from 'react-router';

export function AppLayout() {
  return (
    <div>
      <h1>Cabeçalho</h1>
      <Outlet />
    </div>
  );
}
