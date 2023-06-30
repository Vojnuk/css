/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
    small: {
        height: 8,
        padding: 0,
    },
    medium: {
        height: 12,
        padding: 0,
    },
    large: {
        height: 16,
        padding: 4,
    },
};

const ProgressBar = ({ value, size }) => {
    const styles = STYLES[size];
    return (
        <>
            <Wrapper
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ "--padding": styles.padding + "px" }}
            >
                <Bar
                    style={{
                        "--width": value + "%",
                        "--height": styles.height + "px",
                    }}
                />
                <VisuallyHidden>{value}</VisuallyHidden>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: 4px;
    padding: var(--padding);
    overflow: hidden;
`;

const Bar = styled.div`
    width: var(--width);
    height: var(--height);
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
