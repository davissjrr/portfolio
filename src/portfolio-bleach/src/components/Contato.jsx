function Contato({ config }) {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-yellow-200 mb-8">Contato</h2>
      <p className="text-gray-200 mb-8">Vamos ceifar alguns bugs juntos!</p>
      <div className="flex justify-center gap-4">
        <a href={`mailto:${config.email}`} className="px-6 py-3 bg-yellow-900/20 text-yellow-300 rounded border border-yellow-700/50 hover:border-yellow-500">
          Email: {config.email}
        </a>
        <a href={`https://github.com/${config.github}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-yellow-900/20 text-yellow-200 rounded border border-yellow-700/50 hover:border-yellow-500">
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contato;