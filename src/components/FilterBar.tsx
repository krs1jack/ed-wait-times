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
    <div className="filter-bar">
      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
        </button>
        <button
          className={`filter-btn ${filter === 'with-wait-times' ? 'active' : ''}`}
          onClick={() => onFilterChange('with-wait-times')}
        >
        </button>
        <button
          className={`filter-btn ${filter === 'without-wait-times' ? 'active' : ''}`}
          onClick={() => onFilterChange('without-wait-times')}
        >
        </button>
      </div>
      <div className="filter-count">
        Showing {filteredCount} of {totalCount} hospitals
      </div>
    </div>
  );
}
