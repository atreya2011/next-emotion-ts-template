import styled from "@emotion/styled";

interface Props {
  column?: "row" | "row-reverse" | "column" | "column-reverse";
}

const Container = styled.div<Props>((props) => ({
  display: "flex",
  flexDirection: props.column && "column",
}));

export default Container;
