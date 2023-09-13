import { useState } from "react";

import Button from "../../components/Button";
import * as Styled from "./styles";
const Home = () => {
  const [color, setColor] = useState("red");
  console.log(color);
  return (
    <Styled.Container>
      <Button text="click" variant="primary" />
    </Styled.Container>
  );
};

export default Home;
