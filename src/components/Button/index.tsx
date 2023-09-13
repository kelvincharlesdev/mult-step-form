import * as Styled from "./styles";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
}

const Button = ({ text, variant }: ButtonProps) => {
  return (
    <Styled.Button background={variant} color={variant}>
      {text}
    </Styled.Button>
  );
};

export default Button;
