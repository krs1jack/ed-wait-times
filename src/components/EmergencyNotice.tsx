export function EmergencyNotice() {
  return (
    <div className="emergency-banner" role="alert">
      <div className="emergency-icon">
        🚨
      </div>
      <div className="emergency-content">
        <h3>Medical Emergency?</h3>
        <p>
          Wait times are for <strong>non-life-threatening</strong> conditions only.
          If you are experiencing a medical emergency, do not wait—<a href="tel:911" className="call-link">dial 9-1-1 immediately</a>.
        </p>
      </div>
    </div>
  );
}
