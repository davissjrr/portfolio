function Stats({ githubData }) {
  if (!githubData) return null;

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-gray-900/30 rounded hollow-aura">
          <span className="text-4xl font-bold text-yellow-400 block">{githubData.user.public_repos}</span>
          <span className="text-sm">Zanpakutô</span>
        </div>
        <div className="text-center p-6 bg-gray-900/30 rounded hollow-aura">
          <span className="text-4xl font-bold text-yellow-300 block">{githubData.user.followers}</span>
          <span className="text-sm">Seguidores</span>
        </div>
        <div className="text-center p-6 bg-gray-900/30 rounded hollow-aura">
          <span className="text-4xl font-bold text-yellow-400 block">
            {githubData.repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)}
          </span>
          <span className="text-sm">Brilho</span>
        </div>
        <div className="text-center p-6 bg-gray-900/30 rounded hollow-aura">
          <span className="text-4xl font-bold text-yellow-300 block">
            {githubData.repos.reduce((sum, repo) => sum + repo.forks_count, 0)}
          </span>
          <span className="text-sm">Divisões</span>
        </div>
      </div>
    </section>
  );
}

export default Stats;