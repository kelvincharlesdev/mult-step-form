import styled from "styled-components";

export const Title = styled.h1`
    font-size: 25px;
`


export const Field = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    margin-top: 4px;

  
    label {
        font-size: 16px;
        /* color: #333; */
    }


    input {
        width: 100%; 
        height: 40px; 
        border: none;
        padding-left: 7px;
        font-size: 20px;
       
    }

    textarea {
        width: 100%; 
        height: 80px;
        resize: none;
    }

    select {
        width: 100%; 
        height: 40px; 
        border: none;
        padding-left: 7px;
        font-size: 20px;
    }

`


export const ContentButtons = styled.div`
    .contentButtons{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    .buttonNext{
        width: 200px;
        height: 35px;
        border-radius: 50px;
        color: #fff;
        background-color: #1C1C1C;
    }

`;
