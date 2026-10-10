import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';

// Componentes globales
import Header from './components/Header';
import Footer from './components/Footer';

// Enrutador central
import AppRouter from './routes';

function App() {
  return (
    <Router>
      <Header />
      
      <main className="main-content-area">
        {/* Aquí se inyecta la pantalla correspondiente según la URL */}
        <AppRouter />
      </main>

      <Footer />
    </Router>
  );
}

export default App;