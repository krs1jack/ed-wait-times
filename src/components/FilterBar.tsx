import { FilterOption } from '../types';

interface FilterBarProps {
  filter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
  totalCount: number;
  filteredCount: number;
}

export function FilterBar({
  filter,
  onFilterChange,
  totalCount,
  filteredCount,
}: FilterBarProps) {
  return (
    <div className="filter-container">
      <div className="filter-group">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          <span>🏥</span> All Hospitals
        </button>
        <button
          className={`filter-btn ${filter === 'with-wait-times' ? 'active' : ''}`}
          onClick={() => onFilterChange('with-wait-times')}
        >
          <span>✅</span> With Wait Times
        </button>
        <button
          className={`filter-btn ${filter === 'without-wait-times' ? 'active' : ''}`}
          onClick={() => onFilterChange('without-wait-times')}
        >
          <span>📋</span> Information Only
        </button>
      </div>

      <div className="filter-results-count">
        Showing <strong>{filteredCount}</strong> of {totalCount} locations
      </div>
    </div>
  );
}
