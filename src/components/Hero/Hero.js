import React from "react";
import styled from "styled-components/macro";

const Hero = () => {
    const src = "/images/hero-img.jpg";
    const alt = "a beautifull white gray cat with blue eyes";

    return (
        <Wrapper>
            <picture>
                <source
                    type="image/avif"
                    srcSet={`
                        ${src.replace(".jpg", ".avif")} 1x,
                        ${src.replace(".jpg", "@2x.avif")} 2x,
                        ${src.replace(".jpg", "@3x.avif")} 3x
                        `}
                    alt={alt}
                />

                <source
                    type="image/jpg"
                    srcSet={`
                        
                        ${src.replace(".jpg", "@2x.jpg")} 2x,
                        ${src.replace(".jpg", "@3x.jpg")} 3x
                        `}
                    alt={src.alt}
                />

                <HeroImage src={src} alt={alt} />
            </picture>
            <Swoop src="/swoop.svg" />
        </Wrapper>
    );
};

const Wrapper = styled.section`
    position: relative;
    height: 60vh;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
    display: block;
    width: 500px;
    height: 500px;
    max-height: 100%;
`;

const Swoop = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
    bottom: -2px;
    width: 100%;
`;

export default Hero;
