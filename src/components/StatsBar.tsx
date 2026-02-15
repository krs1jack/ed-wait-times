import { useState, useEffect } from 'react';
import { Hospital } from '../types';

interface StatsBarProps {
    totalHospitals: number;
    totalRegions: number;
    featuredHospitals: Hospital[];
}

export function StatsBar({ totalHospitals, totalRegions, featuredHospitals }: StatsBarProps) {
    const [liveCount, setLiveCount] = useState(0);
    const [hospitalCount, setHospitalCount] = useState(0);
    const [regionCount, setRegionCount] = useState(0);

    // Count up animation effect
    useEffect(() => {
        const liveTotal = featuredHospitals.filter(h => h.hasOnlineWaitTimes).length;

        // Animate numbers
        const duration = 1500;
        const steps = 50;
        const interval = duration / steps;

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease out

            setLiveCount(Math.floor(liveTotal * easeOut));
            setHospitalCount(Math.floor(totalHospitals * easeOut));
            setRegionCount(Math.floor(totalRegions * easeOut));

            if (currentStep >= steps) {
                clearInterval(timer);
                setLiveCount(liveTotal);
                setHospitalCount(totalHospitals);
                setRegionCount(totalRegions);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [totalHospitals, totalRegions, featuredHospitals]);

    return (
        <div className="stats-bar">
            <div className="stat-item">
                <span className="stat-value">{hospitalCount}</span>
                <span className="stat-label">Hospitals</span>
            </div>

            <div className="stat-item">
                <span className="stat-value" style={{ color: 'var(--success-500)' }}>
                    {liveCount}
                </span>
                <span className="stat-label">Live Tracking</span>
            </div>

            <div className="stat-item">
                <span className="stat-value" style={{ color: 'var(--accent-500)' }}>
                    {regionCount}
                </span>
                <span className="stat-label">Regions</span>
            </div>
        </div>
    );
}
