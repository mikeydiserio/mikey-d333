import { ReactNode } from "react";
import * as S from "./Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ children, onClick, ...rest }: ButtonProps) => {
  return <S.Button onClick={onClick} {...rest}>{children}</S.Button>;
};

export default Button;