/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS } from "../../constants";
import { QUERIES } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
    return (
        <DialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
            <DialogContent aria-label="shoes navigation">
                <BlurWrapper>
                    <Wrapper>
                        <DismissButton>
                            <UnstyledButton onClick={onDismiss}>
                                <Icon id="close" strokeWidth={1} />
                                <VisuallyHidden>Dismiss menu</VisuallyHidden>
                            </UnstyledButton>
                        </DismissButton>

                        <Nav>
                            <a href="/sale">Sale</a>
                            <a href="/new">New&nbsp;Releases</a>
                            <a href="/men">Men</a>
                            <a href="/women">Women</a>
                            <a href="/kids">Kids</a>
                            <a href="/collections">Collections</a>
                        </Nav>
                        <Footer>
                            <a href="/terms">Terms and Conditions</a>
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/contact">Contact Us</a>
                        </Footer>
                    </Wrapper>
                </BlurWrapper>
            </DialogContent>
        </DialogOverlay>
    );
};

const BlurWrapper = styled.div`
    display: none;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(96, 100, 108, 0.8);
    isolation: isolate;
    z-index: 1;

    @media ${QUERIES.tabletAndDown} {
        display: flex;
    }
`;

const Wrapper = styled.div`
    position: fixed;

    right: 0;
    padding: 32px;
    padding-right: 22px;

    width: 60%;
    height: 100%;

    background-color: white;

    isolation: isolate;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & button {
        margin-left: auto;
        margin-bottom: auto;
    }

    a:hover {
        color: #6868d9;
    }
`;

const DismissButton = styled.div`
    flex: 1;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 22px;
    font-size: 1.31rem;

    flex: 1;
    & {
        a {
            color: var(--color-grey-900);
            text-decoration: none;
        }
    }
`;

const Footer = styled.footer`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    gap: 14px;

    & a {
        font-size: 0.8rem;
        color: var(--color-gray-700);
        text-decoration: none;
    }
`;

export default MobileMenu;
