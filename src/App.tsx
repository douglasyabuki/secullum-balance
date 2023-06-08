import React from 'react';
import ReactDOM from 'react-dom/client';

/*
  COMPONENTS
*/
import SecullumTable from './components/secullum-table';
import Header from './components/header/Header';

/*
  CSS
*/
import './index.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main className="flex h-auto w-screen flex-col items-center justify-center bg-neutral-900">
        <Header></Header>
        <SecullumTable></SecullumTable>
    </main>
  </React.StrictMode>,
);
