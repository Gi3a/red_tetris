import styled from "styled-components";
export const StyledRoomCard = styled.div`
    background-color: ${(props) => props.theme?.background?.secondary};
    width: 250px;
    height: auto;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    transition: 0.20s all;
    &:hover{
        -webkit-box-shadow: 0px 5px 10px 2px rgba(255, 255, 255, 0.2);
        -moz-box-shadow: 0px 5px 10px 2px rgba(255, 255, 255, 0.2);
        box-shadow: 0px 1px 10px 2px rgba(255, 255, 255, 0.2);
    }
    .name {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        width: 100%;
        gap: 10px;
        justify-content: center;
        padding: 1.5rem;
        margin-top: 15px;
        font-size: 1rem;
        text-align: center;
        border-bottom: 1px solid white;
        &>div{
            display: flex;
            flex-direction: row;
        }
    }
    .players {
        font-size: 0.8rem;
        text-align: center;
        border-bottom: 1px solid white;
        color: white;
    }
    .status {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 1rem;
        font-size: 0.8rem;
        text-align: center;
        color: white;
    }
`;
export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    // margin-top: 2%;
    justify-content: center;
    align-items: center;
    .create {
        display: flex;
        width: 100%;
        flex-direction: column;
        .lista {
            &:hover {
                background-color: #f9253c;
            }
        }
        .container {
            margin-top: 2rem;
            flex: 1;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 50px;
        }
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .title {
            font-size: 2.5rem;
            width: 100%;
            padding: 0;
            text-align: center;
            font-family: ${(props) => props.theme?.headers?.h1?.font};
            font-weight: ${(props) => props.theme?.headers?.h1?.fontWeight};
            letter-spacing: ${(props) => props.theme?.headers?.h1?.letterSpacing};
            color: ${(props) => props.theme?.headers?.h1?.color};
        }
    }
    .input {
        &::placeholder {
            line-height: 50px;
        }
    }
`;

export const JoinRoom = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: auto;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
        font-size: 2.5rem;
        width: 100%;
        padding: 0;
        text-align: center;
        font-family: ${(props) => props.theme?.headers?.h1?.font};
        font-weight: ${(props) => props.theme?.headers?.h1?.fontWeight};
        letter-spacing: ${(props) => props.theme?.headers?.h1?.letterSpacing};
        color: ${(props) => props.theme?.headers?.h1?.color};
    }
    .rooms-container {
        width: 100%;
        padding: 3rem;
        display: flex;
        flex-direction: wrap;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        svg {
            width: 100%;
            height: 100%;
        }
    }
    .container {
        width: 100%;
        flex: 1;

        header,
        .room {
            width: 100%;
            padding: 0.5rem;
            display: flex;
            align-items: center;
            align-content: center;
            border-bottom: 1px solid white;
            .item {
                font-size: 1rem;
                padding: 0.5rem;
                color: white;
                text-align: center;
                flex: 1;
            }
            .name {
                flex: 3;
            }
        }
        .room {
            border-bottom: 1px solid #b33030;
        }
    }
`;
