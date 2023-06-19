import { FC } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  to: string;
  children: string;
  className?: string;
}

export const ContactButton: FC<ButtonProps> = ({ to, children, className }) => {
  return (
    <>
      <Link to={to} className={className}>
        {children}
      </Link>
    </>
  );
};
