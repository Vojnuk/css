import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
    return (
        <header>
            <SuperHeader>
                <Row>
                    <ActionGroup>
                        <button>
                            <Search size={24} />
                        </button>
                        <button>
                            <Menu size={24} />
                        </button>
                    </ActionGroup>

                    <ActionGroup className="desktop">
                        <button>
                            <User size={24} />
                        </button>
                    </ActionGroup>
                </Row>
            </SuperHeader>
            <MainHeader>
                <DesktopActionGroup>
                    <button>
                        <Search size={24} />
                    </button>
                    <button>
                        <Menu size={24} />
                    </button>
                </DesktopActionGroup>
                <Logo />
                <DesktopSubscribeButton>
                    <Button>Subscribe</Button>
                    <a href="">Already a subscriber</a>
                </DesktopSubscribeButton>
            </MainHeader>
        </header>
    );
};

const DesktopSubscribeButton = styled.div`
    display: none;

    @media ${QUERIES.laptopAndUp} {
        display: flex;
        flex-direction: column;
        justify-self: end;

        & a {
            color: var(--color-gray-900);
            text-decoration: underline;
            gap: 8px;
        }
    }
`;
const SuperHeader = styled.div`
    padding: 16px 0;
    background: var(--color-gray-900);
    font-style: italic;
    color: white;

    @media ${QUERIES.laptopAndUp} {
        display: none;
    }
`;

const Row = styled(MaxWidthWrapper)`
    display: flex;
    justify-content: space-between;
`;

const ActionGroup = styled.div`
    display: flex;
    gap: 24px;

    /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
    svg {
        display: block;
    }
`;

const DesktopActionGroup = styled(ActionGroup)`
    display: none;
    @media ${QUERIES.laptopAndUp} {
        display: flex;
        align-self: center;
    }
`;

const MainHeader = styled(MaxWidthWrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;

    @media ${QUERIES.tabletAndUp} {
        margin-bottom: 72px;
    }

    @media ${QUERIES.laptopAndUp} {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        justify-content: space-between;
        align-items: end;
        margin-bottom: 84px;
    }
`;

export default Header;
