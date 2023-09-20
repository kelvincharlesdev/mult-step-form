import { FormikErrors } from "formik";
import * as Styled from "./styles";

export type ErrorMessageType = string | false | string[] | FormikErrors<IState>[] | undefined;

interface ErrorMessageProps {
  message: ErrorMessageType;
}

export const ErrorMessageSpan = ({ message }: ErrorMessageProps) => {
  return <Styled.SpanError>{message}</Styled.SpanError>
};
