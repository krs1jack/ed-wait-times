import { Hospital } from '../types';

interface FacilityCardProps {
  hospital: Hospital;
}

export function FacilityCard({ hospital }: FacilityCardProps) {
  return (
    <div className={`facility-card ${hospital.hasOnlineWaitTimes ? 'has-wait-times' : ''}`}>
      <div className="facility-header">
        <h4 className="facility-name">{hospital.name}</h4>
        {hospital.hasOnlineWaitTimes && (
          <span className="wait-times-badge">Live Wait Times</span>
        )}
      </div>
      <p className="facility-location">{hospital.location}</p>
      <p className="facility-coverage">{hospital.coverage}</p>

      {hospital.locations && hospital.locations.length > 0 && (
        <div className="multiple-locations">
          {hospital.locations.map((loc, index) => (
            <span key={index}>
              {loc}
              {index < hospital.locations!.length - 1 && <br />}
            </span>
          ))}
        </div>
      )}

      {hospital.notes && <p className="facility-notes">{hospital.notes}</p>}

      <div className="facility-links">
        {hospital.waitTimesUrl && (
          <a
            href={hospital.waitTimesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="facility-link primary"
          >
            View Wait Times
          </a>
        )}

        {hospital.websiteUrl && !hospital.waitTimesUrl && (
          <a
            href={hospital.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="facility-link"
          >
            Visit Website
          </a>
        )}

        {hospital.appLinks?.ios && (
          <a
            href={hospital.appLinks.ios}
            target="_blank"
            rel="noopener noreferrer"
            className="facility-link app-link"
          >
            iOS App
          </a>
        )}

        {hospital.appLinks?.android && (
          <a
            href={hospital.appLinks.android}
            target="_blank"
            rel="noopener noreferrer"
            className="facility-link app-link"
          >
            Android App
          </a>
        )}
      </div>
    </div>
  );
}
