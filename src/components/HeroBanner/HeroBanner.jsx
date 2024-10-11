import React from "react";
import { useAsciiText, alligator, graffiti, alpha, swampLand} from 'react-ascii-text';

const HeroBanner = (props) => {
    const {bannerTitle} = props
    const asciiTextRef = useAsciiText({
        animationCharacters: "TP",
        animationCharacterSpacing: 1,
        animationDirection: "vertical",
        animationInterval: 1000,
        animationIteration: 5,
        animationSpeed: 60,
        font: swampLand,
        text: [bannerTitle],
      });
    
    return (
        <>
        <pre ref={asciiTextRef} data-testid={'testElementH1'} color={"primary"}></pre>
        </>
    );
}

export default HeroBanner;


