function ContactSection() {
    return (
        <section className="port-section reveal-animate" id="contact">
            <h2 className="section-title">Send a Jade Message</h2>
            <div className="divider"><div className="divider-gem"></div></div>

            <div className="contact-cards">

                <a className="contact-card" href="mailto:jersonvargas471@gmail.com">
                    <div className="contact-card-glow"></div>
                    <div className="contact-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="M2 7l10 7 10-7" />
                        </svg>
                    </div>
                    <div className="contact-info">
                        <div className="contact-label">✦ Email</div>
                        <div className="contact-value">jersonvargas471@gmail.com</div>
                        <div className="contact-sub">Send an email</div>
                    </div>
                    <div className="contact-arrow">→</div>
                </a>

                <a className="contact-card" href="tel:+639755970905">
                    <div className="contact-card-glow"></div>
                    <div className="contact-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                        </svg>
                    </div>
                    <div className="contact-info">
                        <div className="contact-label">✦ Phone Number</div>
                        <div className="contact-value">+63 9755 970 905</div>
                        <div className="contact-sub">Call or message</div>
                    </div>
                    <div className="contact-arrow">→</div>
                </a>

                <a className="contact-card" href="https://www.facebook.com/jerson.vargas.625456" target="_blank" rel="noopener">
                    <div className="contact-card-glow"></div>
                    <div className="contact-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                        </svg>
                    </div>
                    <div className="contact-info">
                        <div className="contact-label">✦ Facebook</div>
                        <div className="contact-value">facebook.com/jerson.vargas.625456</div>
                        <div className="contact-sub">Find me on Facebook</div>
                    </div>
                    <div className="contact-arrow">→</div>
                </a>

            </div>
        </section>
    );
}

export default ContactSection;