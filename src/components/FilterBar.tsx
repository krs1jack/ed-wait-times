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
          All Hospitals
        </button>
        <button
          className={`filter-btn ${filter === 'with-wait-times' ? 'active' : ''}`}
          onClick={() => onFilterChange('with-wait-times')}
        >
          With Online Wait Times
        </button>
        <button
          className={`filter-btn ${filter === 'without-wait-times' ? 'active' : ''}`}
          onClick={() => onFilterChange('without-wait-times')}
        >
          Without Online Wait Times
        </button>
      </div>
      <div className="filter-count">
        Showing {filteredCount} of {totalCount} hospitals
      </div>
    </div>
  );
}
