import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import About from './components/Sobre.jsx';
import Projects from './components/Projetos.jsx';
import Stats from './components/Stats.jsx';
import Contact from './components/Contato.jsx';
import './styles.css';

function App() {
  const [config, setConfig] = useState({
    name: 'Davis Junior',
    title: '死神 • Engenharia de Software',
    about: 'Entusiasta por backend e dados',
    email: 'dclimaj@outlook.com',
    github: 'davissjrr'
  });
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    const fetchGitHub = async () => {
      if (!config.github) return;
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${config.github}`),
          fetch(`https://api.github.com/users/${config.github}/repos?sort=updated&per_page=6`)
        ]);
        const user = await userRes.json();
        const repos = await reposRes.json();
        setGithubData({ user, repos });
      } catch (error) {
        console.error('Erro no GitHub:', error);
      }
    };
    fetchGitHub();
  }, [config.github]);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Sakura Petals */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="animate-sakura absolute text-yellow-300 text-2xl" style={{ left: '10%' }}>❀</div>
        <div className="animate-sakura absolute text-yellow-200 text-xl" style={{ left: '25%', animationDelay: '2s' }}>✿</div>
        <div className="animate-sakura absolute text-yellow-400 text-3xl" style={{ left: '45%', animationDelay: '4s' }}>❁</div>
        <div className="animate-sakura absolute text-yellow-100 text-2xl" style={{ left: '65%', animationDelay: '1s' }}>❀</div>
        <div className="animate-sakura absolute text-yellow-300 text-xl" style={{ left: '80%', animationDelay: '3s' }}>✿</div>
        <div className="animate-sakura absolute text-yellow-200 text-2xl" style={{ left: '90%', animationDelay: '5s' }}>❁</div>
      </div>
      <div className="relative z-10">
        <span className="kanji" style={{ top: '5%', left: '-5%' }}>斬</span>
        <span className="kanji" style={{ top: '40%', right: '-5%' }}>魂</span>
        <span className="kanji" style={{ bottom: '5%', left: '30%' }}>界</span>
        <Header config={config} />
        <About config={config} />
        <Projects githubData={githubData} />
        <Stats githubData={githubData} />
        <Contact config={config} />
      </div>
    </div>
  );
}

export default App;