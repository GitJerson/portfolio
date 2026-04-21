function OriginSection() {
    return (
        <section className="port-section reveal-animate" id="origin">
            <h2 className="section-title">Origin Story</h2>
            <div className="divider"><div className="divider-gem"></div></div>
            <div className="origin-content">
                <div className="origin-quote">
                    Hi, I'm Jerson, an aspiring Backend developer based in the Talisay City, Cebu. I love
                    building applications that revolves around my interests and hobbies. I mostly worked with
                    .asp net projects following MVC design for frontend architecture and using Repository-
                    Service-based pattern for my backend architecture. Right now, I've been learning project
                    that uses CORS and deployment-ready projects which have been bumpy but fun. As of
                    March 13 2026, I've deployed at least 1 application for school project.
                </div>
                <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(240,230,255,0.6)', fontSize: '0.95rem', textAlign: 'center', fontStyle: 'italic' }}>
                    "He who builds from joy shall never labor a single day."
                </p>
            </div>
        </section>
    );
}

export default OriginSection;