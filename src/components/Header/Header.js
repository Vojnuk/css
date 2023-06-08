import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import { QUERIES } from "../../constants";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    // For our mobile hamburger menu, we'll want to use a button
    // with an onClick handler, something like this:
    //
    // <button onClick={() => setShowMobileMenu(true)}>

    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <Logo />
                <Side />
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <MobileNav>
                    <UnstyledButton>
                        <Icon id="shopping-bag" strokeWidth={2} />
                    </UnstyledButton>
                    <UnstyledButton>
                        <Icon id="search" strokeWidth={2} />
                    </UnstyledButton>
                    <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                        <Icon id="menu" strokeWidth={2} />
                    </UnstyledButton>
                </MobileNav>
                <Side />
            </MainHeader>

            <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
        </header>
    );
};

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    height: 72px;
    border-bottom: 1px solid var(--color-gray-300);

    @media ${QUERIES.tabletAndDown} {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media ${QUERIES.phoneAndDown} {
        padding-left: 16px;
        padding-right: 16px;
    }

    & nav {
        @media ${QUERIES.tabletAndDown} {
            display: none;
        }
    }
`;

const MobileNav = styled.div`
    display: none;

    @media ${QUERIES.tabletAndDown} {
        display: flex;
        gap: 32px;
        width: 100%;
        justify-content: flex-end;
    }

    @media ${QUERIES.phoneAndDown} {
        gap: 16px;
    }
`;

const Nav = styled.nav`
    overflow: auto;
    display: flex;
    gap: clamp(1rem, 4.3vw - 1.25rem, 4rem);
    margin: 0px 48px;
`;

const Side = styled.div`
    flex: 1;

    @media ${QUERIES.tabletAndDown} {
        display: none;
    }
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-300);
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: var(--color-secondary);
    }
`;

export default Header;
