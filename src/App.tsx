import { useState, useMemo } from 'react';
import {
  Header,
  EmergencyNotice,
  FilterBar,
  RegionSection,
  HowItWorks,
  Disclaimer,
  Footer,
  StatsBar,
  ScrollToTop,
  AppCard
} from './components';
import { regions } from './data/hospitals';
import { mobileApps } from './data/apps';
import { FilterOption, Region } from './types';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<FilterOption>('all');

  // Stats calculation
  const allHospitals = useMemo(() =>
    regions.flatMap(r => r.hospitals),
    []
  );

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
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="main-content">
        <StatsBar
          totalHospitals={allHospitals.length}
          totalRegions={regions.length}
          featuredHospitals={allHospitals}
        />

        <EmergencyNotice />

        {mobileApps.length > 0 && (
          <section className="section" style={{ marginBottom: '3rem' }}>
            <h2 className="hero-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Mobile Apps</h2>
            <div className="cards-grid">
              {mobileApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </section>
        )}

        <section id="wait-times">
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
            <div className="no-results" style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--neutral-500)', marginBottom: '1.5rem' }}>
                No hospitals found matching "{searchQuery}"
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilter('all');
                }}
                className="card-btn card-btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        <HowItWorks />
        <Disclaimer />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
