import styled from "@emotion/styled";

interface ButtonProps {
  primary?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  color: ${(props) => (props.primary ? "hotpink" : "turquoise")};
`;

export default StyledButton;
