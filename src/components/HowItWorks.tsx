export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Check Wait Time",
      desc: "Find your nearest hospital and see estimated wait times before you leave home."
    },
    {
      number: "02",
      title: "Assess Urgency",
      desc: "For life-threatening emergencies, call 9-1-1 immediately regardless of wait times."
    },
    {
      number: "03",
      title: "Go to Facility",
      desc: "Head to the ER. Times are estimates from check-in to first provider contact."
    }
  ];

  return (
    <section className="how-it-works-container">
      <h2 className="hero-title" style={{ fontSize: '1.75rem', textAlign: 'center' }}>
        How It Works
      </h2>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-number">{step.number}</div>
            <h4 className="step-title">{step.title}</h4>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
