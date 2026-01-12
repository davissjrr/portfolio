function Sobre({ config }) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-200 mb-8">Sobre Mim</h2>
        <div className="p-8 bg-gray-900/30 rounded hollow-aura">
          <p className="text-lg">{config.about}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-yellow-900/20 text-yellow-300 rounded border border-yellow-700/50">JavaScript</span>
            <span className="px-4 py-2 bg-yellow-900/20 text-yellow-200 rounded border border-yellow-700/50">React</span>
            <span className="px-4 py-2 bg-yellow-900/20 text-yellow-300 rounded border border-yellow-700/50">Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;