export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h4>MyHealthyCircle</h4>
                    <p style={{ color: 'var(--neutral-500)', fontSize: '0.9rem' }}>
                        Connecting patients with real-time care information.
                    </p>
                </div>

                <div className="footer-links">
                    <strong>Resources</strong>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Methodology</a></li>
                        <li><a href="#">Contact Support</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <strong>For Providers</strong>
                    <ul>
                        <li><a href="#">Update Facility Info</a></li>
                        <li><a href="#">Integration API</a></li>
                        <li><a href="#">Partner with Us</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} MyHealthyCircle. All rights reserved.</p>
                <p style={{ marginTop: '0.5rem' }}>
                    Disclaimer: Wait times are estimates provided by respective health systems.
                    In a medical emergency, always dial 9-1-1.
                </p>
            </div>
        </footer>
    );
}
