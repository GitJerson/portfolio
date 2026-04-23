import '../landing.css'
function Landing({setShow}) {
    return (
        <div id="hero-screen" className="fixed inset-0 flex flex-col z-100 justify-center items-center">
            <p className="hs-banner">✦ Programmer Selection ✦</p>
            <div className="hero-card-wrap relative">
                <div className="hero-card relative aspect-[3/4] rounded-[4px] flex flex-col 
                items-center justify-end overflow-hidden" id="hero-card-click" onClick={() => setShow(true)}>
                    <div className="absolute top-[14px] left-[50%] translate-x-[-50%] z-2 flex gap-[4px]">
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
                    <div className="absolute inset-0 z-1 flex items-center justify-center p-[5%] mb-[25%]">
                        <div className="avatar-sigil w-[55%] aspect-square rounded-[50%] 
                        flex items-center justify-center relative">
                            <div className="rune-ring"></div>
                            <div className="rune-ring"></div>
                            <div className="rune-ring"></div>
                            <span className="avatar-sigil-inner">JV</span>
                        </div>
                    </div>
                    <div className="card-plate relative z-2 w-full text-center">
                        <div className="card-name">Jerson Jr M Vargas</div>
                        <div className="card-class">Programming Rookie</div>
                        <div className="card-rank">◈ Click to Reveal ◈</div>
                    </div>
                </div>
            </div>
            <p className="hs-footer">A <a href="https://en.wikipedia.org/wiki/Xianxia" target="_blank" rel="noopener noreferrer">Xianxia</a>-Inspired Portfolio</p>
        </div>
    );
}

export default Landing