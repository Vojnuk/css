import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <DesktopNav>
                    <AnimateNavLink>
                        <NavLink href="/sale">Sale</NavLink>
                        <NavSwitch href="/sale">Sale</NavSwitch>
                    </AnimateNavLink>
                    <AnimateNavLink>
                        <NavLink href="/new">New&nbsp;Releases</NavLink>
                        <NavSwitch href="/new">New&nbsp;Releases</NavSwitch>
                    </AnimateNavLink>
                    <AnimateNavLink>
                        <NavLink href="/men">Men</NavLink>
                        <NavSwitch href="/men">Men</NavSwitch>
                    </AnimateNavLink>
                    <AnimateNavLink>
                        <NavLink href="/women">Women</NavLink>
                        <NavSwitch href="/women">Women</NavSwitch>
                    </AnimateNavLink>
                    <AnimateNavLink>
                        <NavLink href="/kids">Kids</NavLink>
                        <NavSwitch href="/kids">Kids</NavSwitch>
                    </AnimateNavLink>
                    <AnimateNavLink>
                        <NavLink href="/collections">Collections</NavLink>
                        <NavSwitch href="/collections">Collections</NavSwitch>
                    </AnimateNavLink>
                </DesktopNav>
                <MobileActions>
                    <ShoppingBagButton>
                        <Icon id="shopping-bag" />
                        <VisuallyHidden>Open cart</VisuallyHidden>
                    </ShoppingBagButton>
                    <UnstyledButton>
                        <Icon id="search" />
                        <VisuallyHidden>Search</VisuallyHidden>
                    </UnstyledButton>
                    <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                        <Icon id="menu" />
                        <VisuallyHidden>Open menu</VisuallyHidden>
                    </UnstyledButton>
                </MobileActions>
                <Filler />
            </MainHeader>

            <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
        </header>
    );
};

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    border-bottom: 1px solid var(--color-gray-300);
    overflow: auto;

    @media ${QUERIES.tabletAndSmaller} {
        justify-content: space-between;
        align-items: center;
        border-top: 4px solid var(--color-gray-900);
    }

    @media ${QUERIES.phoneAndSmaller} {
        padding-left: 16px;
        padding-right: 16px;
    }
`;

const MobileActions = styled.div`
    display: none;

    @media ${QUERIES.tabletAndSmaller} {
        gap: 32px;
        display: flex;
    }

    @media ${QUERIES.phoneAndSmaller} {
        gap: 16px;
    }
`;

const LogoWrapper = styled.div`
    flex: 1;

    @media ${QUERIES.tabletAndSmaller} {
        flex: revert;
    }
`;

const ShoppingBagButton = styled(UnstyledButton)`
    transform: translateX(-2px);
`;

const Filler = styled.div`
    flex: 1;

    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }
`;

const AnimateNavLink = styled.div`
    height: 1.6em;

    &:hover {
        transform: translateY(-100%);
        font-weight: 900;
    }

    transition: transform 200ms;
`;
const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    font-weight: ${WEIGHTS.medium};

    /* &:first-child {
        color: var(--color-secondary);
    } */
`;

const NavSwitch = styled.a`
    display: block;
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    font-weight: 900;
`;

const DesktopNav = styled.nav`
    display: flex;
    gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
    margin: 0px 48px;

    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }

    & div:first-child a:first-child {
        color: var(--color-secondary);
        /* background-color: red !important; */
    }
    & div:first-child a:last-child {
        color: var(--color-secondary);
        /* background-color: red !important; */
    }
    /* to hide overflow frow navlink switch animation */
    overflow: hidden;
`;

export default Header;
