import { Outlet } from 'react-router';

export function App() {
  return (
    <div>
      <h1>Cabeçalho</h1>
      <Outlet />
    </div>
  );
}
