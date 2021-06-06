import styled from "@emotion/styled";

interface ContainerProps {
  column?: "row" | "row-reverse" | "column" | "column-reverse";
}

const Container = styled.div<ContainerProps>((props) => ({
  display: "flex",
  flexDirection: props.column && "column",
}));

export default Container;
