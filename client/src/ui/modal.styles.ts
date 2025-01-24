import styled from 'styled-components';

export const ModalContentContainer = styled.div`
    width: 500px;
    min-width: 340px;

    background-color: #fefefe;

    padding: 30px;
    padding-bottom: 48px;

    border: 1px solid #888;
    border-radius: 5px;

    p {
        margin: 16px 16px 16px 8px;
    }

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        width: calc(100% - 50px);
        padding-top: 16px;
        padding-bottom: 16px;
    }
`;

export const ModalContainer = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 60px;
    width: 100%;
    height: 100%;
    overflow: none;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);

    padding-bottom: 120px;
`;

export const ScrollableModalContainer = styled.div`
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: white;
    opacity: 1;

    overflow-y: scroll;

    height: auto;
    width: 1000px;

    margin: auto;

    @media (max-width: 1000px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        width: 100%;
    }

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        width: calc(100% - 50px);
        padding-top: 16px;
        padding-bottom: 16px;
    }
`;
