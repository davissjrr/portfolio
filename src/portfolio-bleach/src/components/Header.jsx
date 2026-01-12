function Header({ config }) {
  return (
    <header className="py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="relative w-24 h-20">
            <div className="absolute inset-0 border-2 border-yellow-500 rounded opacity-50"></div>
            <svg className="w-24 h-20 text-yellow-400 animate-float" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M 30 20 L 70 60 M 70 20 L 30 60 M 20 40 L 80 40 M 50 10 L 50 70" />
              <circle cx="50" cy="40" r="15" fill="none" />
            </svg>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-300 animate-slide-in" style={{ textShadow: '0 0 30px rgba(255, 227, 109, 0.5)' }}>
          {config.name}
        </h1>
        <p className="text-xl text-yellow-200 mb-6">{config.title}</p>
        <p className="text-gray-300 text-lg">「コードで世界を切る」— Cortando o mundo com código</p>
      </div>
    </header>
  );
}

export default Header;