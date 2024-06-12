import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Dashboard</h1>
      </header>
      <main>
        <section>
          <h2>About AI</h2>
          <p>
            Artificial Intelligence (AI) is a branch of computer science that deals with the development of systems that can perform tasks that would typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.
          </p>
        </section>
        <section>
          <h2>Types of AI</h2>
          <ul>
            <li>Narrow AI</li>
            <li>General AI</li>
            <li>Superintelligent AI</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; AI Dashboard 2024</p>
      </footer>
    </div>
  );
}

export default App;