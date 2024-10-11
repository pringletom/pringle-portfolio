import React from "react";
const HeroBanner = (props) => {
    const {bannerTitle} = props
    return (
        <>
        <h1 data-testid={'testElementH1'}> {bannerTitle}</h1>
        </>
    );
}

export default HeroBanner;