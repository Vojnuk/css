import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES, COLORS } from "../../constants";

const MainStoryGrid = () => {
    return (
        <Wrapper>
            <MainStorySection>
                <MainStory {...MAIN_STORY} />
            </MainStorySection>

            <SecondaryStorySection>
                <StoryList>
                    {SECONDARY_STORIES.map((story, index) => (
                        <SecondaryStory key={story.id} {...story} />
                    ))}
                </StoryList>
            </SecondaryStorySection>

            <OpinionSection>
                <SectionTitle>Opinion</SectionTitle>
                <StoryList>
                    {OPINION_STORIES.map((story, index) => (
                        <OpinionStory key={story.id} {...story} />
                    ))}
                </StoryList>
            </OpinionSection>

            <AdvertisementSection>
                <Advertisement />
            </AdvertisementSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;

    grid-template-areas:
        "main-story"
        "secondary-stories"
        "opinion-stories"
        "advertisement";
    gap: 48px;
    margin-bottom: 48px;

    @media ${QUERIES.tabletOnly} {
        grid-template-columns: 1fr 300px;
        grid-template-rows: auto 152px auto;

        grid-template-areas:
            "main-story secondary-stories"
            "advertisement advertisement"
            "opinion-stories opinion-stories";
    }

    @media ${QUERIES.laptopAndUp} {
        grid-template-columns: 1fr 386px 273px;
        grid-template-rows: auto 152px;

        grid-template-areas:
            "main-story secondary-stories opinion-stories"
            "main-story advertisement advertisement";
    }
`;

const MainStorySection = styled.section`
    grid-area: main-story;

    @media ${QUERIES.tabletAndUp} {
        -webkit-line-clamp: 10;

        /* grid divider border */
        padding-right: 16px;
        border-right: 1px solid var(--color-gray-300);
    }

    & p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 8;
        overflow: hidden;

        @media ${QUERIES.tabletAndUp} {
            -webkit-line-clamp: 16;
        }

        @media ${QUERIES.tabletAndUp} {
            -webkit-line-clamp: 10;
        }
    }
`;
const StoryList = styled.div`
    display: flex;
    flex-direction: column;
`;

const SecondaryStorySection = styled.section`
    grid-area: secondary-stories;

    p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        align-self: start;
    }

    article {
        padding-top: 16px;
        padding-bottom: 16px;
    }

    a:not(:last-of-type) {
        border-bottom: 1px solid var(--color-gray-300);
    }

    @media ${QUERIES.tabletAndUp} {
        /* div je StoryList
      poziv sa ${StoryList} krahira app */
        & > div {
            margin-top: -16px;
            margin-bottom: -16px;
        }

        & {
            margin-left: -32px;
        }
    }

    @media ${QUERIES.laptopAndUp} {
        & {
            margin-right: -32px;
        }
    }
`;

const OpinionSection = styled.section`
    grid-area: opinion-stories;

    article {
        padding-top: 16px;
        padding-bottom: 16px;
    }

    a:not(:last-of-type) {
        border-bottom: 1px solid var(--color-gray-300);
    }

    @media ${QUERIES.tabletOnly} {
        a:not(:last-of-type) {
            border: initial;
        }

        a {
            padding-left: 16px;
            padding-right: 16px;

            min-width: 172px;
        }

        ${StoryList} {
            flex-direction: row;
            justify-content: space-between;
        }
    }

    @media ${QUERIES.laptopAndUp} {
        /* div je StoryList
      poziv sa ${StoryList} krahira app */
        & > div {
            margin-top: -16px;
            margin-bottom: -16px;
        }

        & {
            padding-left: 16px;
            border-left: 1px solid var(--color-gray-300);
        }
    }
`;

const AdvertisementSection = styled.section`
    grid-area: advertisement;

    @media ${QUERIES.laptopAndUp} {
        & {
            margin-top: -32px;
            padding-top: 16px;
            margin-left: -32px;
            border-top: 1px solid var(--color-gray-300);
        }
    }
`;

export default MainStoryGrid;
