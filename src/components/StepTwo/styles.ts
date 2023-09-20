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
    font-size: 20px;
  }

  select {
    width: 100%;
    height: 40px;
    border: none;
    padding-left: 7px;
    font-size: 20px;
  }
`;

export const CheckboxField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  margin-top: 20px;

  span {
    font-size: 20px;
  }

`;

export const CheckboxContent = styled.div`
  display: flex;
  text-align: start;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;

  div {
    display: flex;
    gap: 7px;
    width: 320px;
  }

  input {
    border: none;
    width: 20px;
    height: 20px;
  }
`;


export const ContentButtons = styled.div`
    .contentButtons{
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }

    .buttonBack{
        width: 200px;
        height: 35px;
        border-radius: 50px;
        color: #000;
        background-color: #D8CB13;
    }

    .buttonNext{
        width: 200px;
        height: 35px;
        border-radius: 50px;
        color: #fff;
        background-color: #1C1C1C;
    }

`;