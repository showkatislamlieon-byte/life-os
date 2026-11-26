import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppShell from './layouts/AppShell';
import ModulePage from './pages/ModulePage';
import { MODULES } from './config/modules';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppShell />}>
          {MODULES.map((mod) => (
            <Route key={mod.id} path={mod.path} element={<ModulePage mod={mod} />} />
          ))}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}