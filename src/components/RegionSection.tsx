import { Region } from '../types';
import { FacilityCard } from './FacilityCard';

interface RegionSectionProps {
  region: Region;
}

export function RegionSection({ region }: RegionSectionProps) {
  if (region.hospitals.length === 0) return null;

  return (
    <div className="region-section">
      <h3 className="subsection-title">{region.name}</h3>
      <div className="facility-grid">
        {region.hospitals.map((hospital) => (
          <FacilityCard key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </div>
  );
}
