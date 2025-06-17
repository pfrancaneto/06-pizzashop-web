import { Outlet } from 'react-router';

export function Auth() {
  return (
    <div>
      <h1>Autenticação</h1>
      <Outlet />
    </div>
  );
}
