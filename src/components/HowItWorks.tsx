export function HowItWorks() {
  return (
    <section className="section how-it-works">
      <h2 className="section-title">How Wait Times Work</h2>
      <div className="info-box">
        <h4>Wait Time Definitions:</h4>
        <ul>
          <li>
            <strong>Registration to Provider:</strong> Time from check-in until
            seeing a doctor, nurse practitioner, or physician assistant
          </li>
          <li>
            <strong>Total Visit Time:</strong> Complete time from arrival to
            discharge or admission
          </li>
          <li>
            <strong>Update Frequency:</strong> Most systems update every 10-30
            minutes
          </li>
          <li>
            <strong>Priority-Based Care:</strong> Life-threatening cases are
            seen immediately regardless of wait times
          </li>
        </ul>
      </div>
    </section>
  );
}
