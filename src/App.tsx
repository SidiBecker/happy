import React from 'react';

import './styles/global.scss';
import './styles/pages/landing.scss';

import { FiArrowRight } from 'react-icons/fi';

import logoImg from './images/logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>

          <div className="location">
            <strong>São Miguel do Oeste</strong>
            <span>Santa Catarina</span>
          </div>

          <a href="" className="enter-app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
          </a>
        </main>
      </div>
    </div>
  );
}

export default App;
