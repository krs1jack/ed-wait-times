import { useState, useMemo } from 'react';
import {
  Header,
  EmergencyNotice,
  FilterBar,
  AppCard,
  RegionSection,
  HowItWorks,
  Disclaimer,
} from './components';
import { regions } from './data/hospitals';
import { mobileApps } from './data/apps';
import { FilterOption, Region } from './types';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<FilterOption>('all');

  const { filteredRegions, totalCount, filteredCount } = useMemo(() => {
    let total = 0;
    let filtered = 0;

    const result: Region[] = regions
      .map((region) => {
        const filteredHospitals = region.hospitals.filter((hospital) => {
          total++;

          // Apply filter
          if (filter === 'with-wait-times' && !hospital.hasOnlineWaitTimes) {
            return false;
          }
          if (filter === 'without-wait-times' && hospital.hasOnlineWaitTimes) {
            return false;
          }

          // Apply search
          if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const searchableText = [
              hospital.name,
              hospital.location,
              hospital.coverage,
              region.name,
              ...(hospital.locations || []),
            ]
              .join(' ')
              .toLowerCase();

            if (!searchableText.includes(query)) {
              return false;
            }
          }

          filtered++;
          return true;
        });

        return {
          ...region,
          hospitals: filteredHospitals,
        };
      })
      .filter((region) => region.hospitals.length > 0);

    return {
      filteredRegions: result,
      totalCount: total,
      filteredCount: filtered,
    };
  }, [searchQuery, filter]);

  return (
    <div className="app">
      <div className="container">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <EmergencyNotice />

        {mobileApps.length > 0 && (
          <section className="section">
            <h2 className="section-title">Mobile Apps</h2>
            <div className="app-grid">
              {mobileApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </section>
        )}

        <section className="section">
          <h2 className="section-title">Hospital Systems by Region</h2>

          <FilterBar
            filter={filter}
            onFilterChange={setFilter}
            totalCount={totalCount}
            filteredCount={filteredCount}
          />

          {filteredRegions.length > 0 ? (
            filteredRegions.map((region) => (
              <RegionSection key={region.id} region={region} />
            ))
          ) : (
            <div className="no-results">
              <p>No hospitals found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilter('all');
                }}
                className="reset-btn"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        <HowItWorks />

        <Disclaimer />
      </div>
    </div>
  );
}

export default App;
