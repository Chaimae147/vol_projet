import React, { useState } from 'react';

const Home = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code pour soumettre les informations de la recherche de vols
  };

  return (
    <div>
      <header>
        <h1>Recherchez et réservez des vols en ligne</h1>
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Rechercher des vols</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="from">De:</label>
            <input
              type="text"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />

            <label htmlFor="to">À:</label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />

            <label htmlFor="departure-date">Date de départ:</label>
            <input
              type="date"
              id="departure-date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />

            <button type="submit">Rechercher des vols</button>
          </form>
        </section>

        <section>
          <h2>Offres de vol</h2>
          <p>Découvrez nos offres de vol pour des destinations populaires.</p>
          <ul>
            <li><a href="#">New York à partir de 299€</a></li>
            <li><a href="#">Londres à partir de 249€</a></li>
            <li><a href="#">Paris à partir de 199€</a></li>
            <li><a href="#">Tokyo à partir de 699€</a></li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2023 Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Home;
