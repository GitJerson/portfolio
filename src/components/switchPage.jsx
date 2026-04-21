import Landing from "./landing.jsx";
import Portfolio from "./portfolio.jsx";
import Cursor from './cursor.jsx';
import Particle from './particle.jsx';
import { useState } from "react";

function SwitchPage() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Cursor />
            {!show && <Landing setShow={setShow} />}
            {show && (
                <>
                    <Particle />
                    <Portfolio />
                </>
            )}
        </>
    );
}

export default SwitchPage;