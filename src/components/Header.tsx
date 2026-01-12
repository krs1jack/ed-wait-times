interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="header">
      <h1>Hospital Emergency Department Wait Times</h1>
      <p className="subtitle">
        Hospitals & health systems with published real-time wait information
      </p>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search hospitals, regions, or cities..."
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
    </header>
  );
}
