import { Region } from '../types';
import { FacilityCard } from './FacilityCard';

interface RegionSectionProps {
  region: Region;
}

export function RegionSection({ region }: RegionSectionProps) {
  if (region.hospitals.length === 0) return null;

  return (
    <div className="region-section">
      <div className="section-header">
        <h3 className="region-title">
          {region.name}
          <span className="region-count-badge">
            {region.hospitals.length}
          </span>
        </h3>
      </div>

      <div className="cards-grid">
        {region.hospitals.map((hospital) => (
          <FacilityCard key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </div>
  );
}
