import { useState } from 'react';

export function Disclaimer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="disclaimer-section">
      <div
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
      >
        <span className="accordion-title">
          <span className="warning-icon">⚠️</span>
          Important Medical & Legal Disclaimer
        </span>
        <span className="accordion-icon" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
          ▼
        </span>
      </div>

      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p style={{ marginBottom: '1rem' }}>
          <strong>About Wait Time Estimates:</strong> The average wait times provided by hospital
          systems are typically based on a rolling average (often two hours) and are updated
          approximately every 15-30 minutes. Estimated wait times generally reflect the time from
          check-in to care being initiated by a doctor, nurse practitioner, or physician assistant.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Individual Results May Vary:</strong> Since no two people—and no two injuries
          or illnesses—are alike, your actual wait time may be longer or shorter than the times
          displayed. Many factors can cause wait times to change rapidly and without notice.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Emergency Prioritization:</strong> Top priority will always be given to patients
          affected by life-threatening illness or injury, regardless of arrival time. This is
          standard medical triage protocol and may affect wait times for other patients.
        </p>
        <p>
          <strong>No Guarantee:</strong> All wait times displayed on this site are estimates
          provided by individual hospital systems and cannot be guaranteed. This website aggregates
          publicly available information and is not affiliated with any hospital or health system.
          Always contact the facility directly for the most current information.
        </p>
        <p style={{ marginTop: '1rem', color: 'var(--danger-600)', fontWeight: 600 }}>
          Not Medical Advice: This website is for informational purposes only. If you contain a medical emergency, call 9-1-1.
        </p>
      </div>
    </div>
  );
}
