import { StyledButton } from './styled';

const Button = ({ label, color, onClick, disabled }) => {

  return (
    <StyledButton onClick={onClick} disabled={disabled} color={color}>
      {label}
    </StyledButton>
  )
}

export default Button;
