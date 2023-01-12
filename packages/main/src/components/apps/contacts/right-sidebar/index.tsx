import { FC } from "react";
import {
    Phone,
    Video,
    MessageSquare,
    Share,
    Star,
    Slash,
    X,
} from "react-feather";
import ReactTooltip from "react-tooltip";
import { Avatar, AvatarInitial, HRLine } from "@doar/components";
import EditPhotoButton from "../edit-photo-button";
import Label from "../label-2";
import {
    StyledWrap,
    StyledTopDiv,
    StyledAvatar,
    StyledName,
    StyledRole,
    StyledBtns,
    StyledNavBtn,
    StyledBio,
    StyledNav,
    StyledLink,
    StyledClose,
} from "./style";

interface IProps {
    onClose: () => void;
}

const RightSidebar: FC<IProps> = ({ onClose }) => {
    return (
        <StyledWrap>
            <StyledTopDiv>
                <StyledAvatar>
                    <Avatar size="xl">
                        <AvatarInitial bg="gray700" fontWeight={400}>
                            A
                        </AvatarInitial>
                    </Avatar>
                    <EditPhotoButton />
                </StyledAvatar>
                <StyledClose
                    className="sidebar-close"
                    type="button"
                    onClick={onClose}
                >
                    <X />
                </StyledClose>
            </StyledTopDiv>
            <StyledName>Abigail Johnson</StyledName>
            <StyledRole>President &amp; CEO - ThemePixels, Inc.</StyledRole>
            <StyledBtns>
                <StyledNavBtn
                    bg="teal"
                    data-for="tooltip-uphone"
                    data-tip="Make a phone call"
                >
                    <Phone />
                </StyledNavBtn>
                <ReactTooltip place="top" effect="solid" id="tooltip-uphone" />
                <StyledNavBtn
                    bg="pink"
                    data-for="tooltip-uvideo"
                    data-tip="Make a video call"
                >
                    <Video />
                </StyledNavBtn>
                <ReactTooltip place="top" effect="solid" id="tooltip-uvideo" />
                <StyledNavBtn
                    bg="primary"
                    data-for="tooltip-umessage"
                    data-tip="Send Message"
                >
                    <MessageSquare />
                </StyledNavBtn>
                <ReactTooltip
                    place="top"
                    effect="solid"
                    id="tooltip-umessage"
                />
            </StyledBtns>
            <Label>Biography</Label>
            <StyledBio>
                Gambler, Tea Drinker, Ultimate Piggie, Replacement President of
                a Major Soft Drink Manufacturer. When I give out candies, I give
                people the flavour I don&apos;t like.
            </StyledBio>
            <HRLine my="20px" />
            <Label>Options</Label>
            <StyledNav>
                <StyledLink path="#!">
                    <Share /> Share this Contact
                </StyledLink>
                <StyledLink path="#!">
                    <Star /> Share this Contact
                </StyledLink>
                <StyledLink path="#!">
                    <Slash /> Share this Contact
                </StyledLink>
            </StyledNav>
        </StyledWrap>
    );
};

export default RightSidebar;
