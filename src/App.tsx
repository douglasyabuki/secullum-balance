import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SecullumTable from './components/secullum-table';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main className="flex h-auto w-screen flex-col items-center justify-center bg-neutral-900">
        <SecullumTable></SecullumTable>
    </main>
  </React.StrictMode>,
);
