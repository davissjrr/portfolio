function Projetos({ githubData }) {
  if (!githubData) return <div className="py-16 px-4 text-center">Carregando projetos...</div>;

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-200 mb-8">Zanpakutô (Projetos)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {githubData.repos.map((repo, index) => (
            <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-card block p-6 bg-gray-900/40 rounded">
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">{repo.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{repo.description || 'Sem descrição'}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-yellow-500">⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;