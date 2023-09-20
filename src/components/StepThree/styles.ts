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
  width: 100%;

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

export const ContentExperience = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  margin-top: 20px;

  .content-map {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    width: 100%;

    input {
      width: 100%;
      height: 40px;
      border: none;
      padding-left: 7px;
      font-size: 20px;
    }

    .error-mesage{
      color: red;
      text-align: center;
      width: 100%;
      margin-top: 5px;
    }

    button {
      background-color: red;
    }
  }
`;

export const ExperiencePeriod = styled.div`
  display: flex;

  flex-direction: row;
  margin-top: 20px;
  width: 100%;
  gap: 10px;

  .content-date {
    text-align: start;
    width: 100%;
  }

  input {
    max-width: 100%;
    height: 40px;
    border: none;
    padding-left: 7px;
    font-size: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 100%;
  border-radius: 50px;
  font-size: 15px;
  background-color: #007bff;
`;

export const ContentFormAcadmy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  margin-top: 20px;

  .content-map {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    width: 100%;

    input {
      width: 100%;
      height: 40px;
      border: none;
      padding-left: 7px;
      font-size: 20px;
    }

    .error-mesage{
      color: red;
      text-align: center;
      width: 100%;
      margin-top: 5px;
    }
  }
`;

export const AcademyPeriod = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
  gap: 10px;

  .content-date {
    text-align: start;
    width: 100%;
  }

  input {
    max-width: 100%;
    height: 40px;
    border: none;
    padding-left: 7px;
    font-size: 20px;
  }
`;

export const ContentButtons = styled.div`
  .contentButtons {
    display: flex;

    justify-content: space-between;
    margin-top: 30px;
  }

  .buttonBack {
    width: 200px;
    height: 35px;
    border-radius: 50px;
    color: #000;
    background-color: #d8cb13;
  }
  .buttonSubmit {
    width: 200px;
    height: 35px;
    border-radius: 50px;
    color: #fff;
    background-color: #1c1c1c;
  }
`;

export const ButtonRemove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 100%;
    margin-top: 10px;
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 30%;
    border-radius: 50px;
    font-size: 15px;
    background-color: red;
  }
`;
