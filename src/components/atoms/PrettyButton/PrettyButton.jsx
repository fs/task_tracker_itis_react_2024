import { StyledButton } from "./styled";

const PrettyButton = ({label, color, disable, onClick }) => {
  return (
    <StyledButton onClick={onClick} disabled={disable} color={color}>
      {label}
    </StyledButton>
  )
}

export default PrettyButton;