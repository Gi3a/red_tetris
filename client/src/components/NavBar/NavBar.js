import { useDispatch, useSelector } from "react-redux";
import { leaveRoomRequest } from "../../store/slices/playerSlice";

import styled from "styled-components";

export const StyledNav = styled.nav`
    width: 100%;
    // padding-top: 4rem;
    // padding-bottom: 6rem;
    height: 120px;
    display: flex;
    align-items: center;
    .list {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;
        &--element {
            display: flex;
            height: 100%;
            align-items: center;
            font-size: 1.2rem;
            font-family: ${(props) => props.theme.headers?.h1?.font};
            &--title {
                color: whitesmoke;
                font-size: 40px;
                font-family: ${(props) => props.theme.headers?.h1?.font};
                &--span {
                    margin-left: 10px;
                    color: #f9253c;
                    @media (max-width: 450px) {
                        margin-left: 5px;
                    }
                }
                @media (max-width: 450px) {
                    font-size: 35px;
                }
                @media (max-width: 375px) {
                    font-size: 30px;
                }
            }
            @media (max-width: 450px) {
                font-size: 1rem;
            }
            .profile {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                height: 60px;
                border-radius: 50px;
                .banyola {
                    position: relative;
                    width: 58px;
                    height: 58px;
                    border-radius: 50%;
                    background-color: #212121;
                    border: solid #f9253c 3px;
                    justify-content: center;
                    align-items: center;
                    @media (max-width: 450px) {
                        width: 48px;
                        height: 48px;
                    }
                }
                .username {
                    color: whitesmoke;
                    font-size: 1.4rem;
                    @media (max-width: 450px) {
                        font-size: 1.2rem;
                    }
                }
                @media (max-width: 450px) {
                    gap: 5px;
                }
            }
        }
    }
    @media (max-width: 450px) {
        margin: 0;
        padding: 0;
    }
`;


const Navbar = ({ user }) => {
    const dispatch = useDispatch();
    const { userName, roomName, admin } = useSelector((state) => state.player);
    const leaveRoom = () => {
        if (roomName) dispatch(leaveRoomRequest({ userName, roomName, admin }));
    };
    return (
        <StyledNav>
            <ul className="list">
                <li className="list--element">
                    <p
                        role="leave"
                        onClick={leaveRoom}
                        className="list--element--title"
                    >
                        Red
                        <span className="list--element--title--span">
                            Tetris
                        </span>
                    </p>
                </li>
                <li className="list--element">
                    <div className="profile">
                        <div className="banyola">
                            <img
                                src={require("../../images/Avatars/" +
                                    user.avatar)}
                                alt="Avatar"
                                className="object-cover object-center w-full h-full"
                            />
                        </div>
                        <p className="username">{user.userName}</p>
                    </div>
                </li>
            </ul>
        </StyledNav>
    );
};

export default Navbar;
