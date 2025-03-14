import './hero.css';

function Hero() {
    return (
        <div className="hr-hero-container">
            {/* Background Image Container */}
            <div className="hr-hero-background-image"></div>

            {/* Content */}
            <div className="hr-hero-content">
                <div className="hr-hero-text">
                    <h1 className="hr-hero-title"><pre>Innovate with Kuvvatly Eyyam</pre></h1>
                    <p className="hr-hero-subtitle">
                        Empowering your digital journey with cutting-edge solutions
                        that transform ideas into reality.
                    </p>
                </div>

                {/* Logo Container */}
                <div className="hr-hero-logo-container">
                    <img
                        src="../../../public/BrandLogo.png" // Correct path to logo
                        alt="TmDev Logo"
                        className="hr-hero-logo"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;