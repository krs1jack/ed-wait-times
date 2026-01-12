import { MobileApp } from '../types';

interface AppCardProps {
  app: MobileApp;
}

export function AppCard({ app }: AppCardProps) {
  return (
    <div className="app-card">
      <h3 className="app-name">{app.name}</h3>
      <p className="app-description">{app.description}</p>
      <ul className="app-features">
        {app.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        className="facility-link"
      >
        Visit {app.name.split(' ')[0]}
      </a>
    </div>
  );
}
