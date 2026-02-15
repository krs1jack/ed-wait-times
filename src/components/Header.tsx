interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="header-hero">
      <div className="header-bg-blob blob-1"></div>
      <div className="header-bg-blob blob-2"></div>

      <div className="header-content">
        <div className="brand-badge">
          <span className="brand-icon">🏥</span>
          MyHealthyCircle
        </div>

        <h1 className="hero-title">
          Find <span className="title-gradient">Emergency Room</span>
          <br /> Wait Times Near You
        </h1>

        <p className="hero-subtitle">
          Real-time updates from major hospital systems across the United States.
          Check before you go for non-life-threatening emergencies.
        </p>

        <div className="search-wrapper">
          <div className="search-input-group">
            <div className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search hospitals, cities, or regions..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
              aria-label="Search hospitals"
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={() => onSearchChange('')}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
