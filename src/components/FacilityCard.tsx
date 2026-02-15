import { Hospital } from '../types';

interface FacilityCardProps {
  hospital: Hospital;
}

export function FacilityCard({ hospital }: FacilityCardProps) {
  return (
    <div className={`facility-card ${hospital.hasOnlineWaitTimes ? 'has-online-times' : ''}`}>
      <div className="facility-header">
        <h4 className="facility-name">{hospital.name}</h4>
        {hospital.hasOnlineWaitTimes && (
          <div className="live-badge" title="Live updates available">
            <span className="live-dot"></span>
            Live
          </div>
        )}
      </div>

      <div className="facility-info">
        <div className="info-row">
          <span className="info-icon">📍</span>
          <span>{hospital.location}</span>
        </div>

        <div className="info-row">
          <span className="info-icon">🏥</span>
          <span>{hospital.coverage}</span>
        </div>

        {hospital.locations && hospital.locations.length > 0 && (
          <div className="info-row" style={{ marginTop: '0.5rem', color: 'var(--neutral-500)', fontStyle: 'italic' }}>
            <span className="info-icon">ℹ️</span>
            <span>Includes: {hospital.locations.slice(0, 3).join(', ')}{hospital.locations.length > 3 ? '...' : ''}</span>
          </div>
        )}

        {hospital.notes && (
          <div className="info-row" style={{ color: 'var(--accent-500)', fontWeight: 500 }}>
            <span className="info-icon">💡</span>
            <span>{hospital.notes}</span>
          </div>
        )}
      </div>

      <div className="facility-actions">
        {hospital.waitTimesUrl ? (
          <a
            href={hospital.waitTimesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn card-btn-primary"
          >
            Check Wait Times
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        ) : hospital.websiteUrl ? (
          <a
            href={hospital.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn card-btn-outline"
          >
            Visit Website
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        ) : null}

        {hospital.appLinks?.ios && (
          <a
            href={hospital.appLinks.ios}
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn card-btn-outline"
            title="Download on App Store"
          >
            iOS App
          </a>
        )}
      </div>
    </div>
  );
}
