import './landing.css'
import './cursor.js'

function Landing() {
    return (
        <div id="hero-screen">
            <p className="hs-banner">✦ Programmer Selection ✦</p>

            <div className="hero-card-wrap">
                <div className="hero-card" id="hero-card-click">
                    <div className="card-stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                    </div>
                    <div className="corner tl"></div>
                    <div className="corner tr"></div>
                    <div className="corner bl"></div>
                    <div className="corner br"></div>
                    <div className="card-avatar">
                        <div className="avatar-sigil">
                            <div className="rune-ring"></div>
                            <div className="rune-ring"></div>
                            <div className="rune-ring"></div>
                            <span className="avatar-sigil-inner">JV</span>
                        </div>
                    </div>
                    <div className="card-plate">
                        <div className="card-name">Jerson Jr M Vargas</div>
                        <div className="card-class">Programming Rookie</div>
                        <div className="card-rank">◈ First Realm · Mortal ◈</div>
                    </div>
                </div>
            </div>
              <p className='hs-footer'>Click Card to reveal the selected Programmer</p>
        </div>
    );
}

export default Landing