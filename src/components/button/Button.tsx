import type { ReactNode } from "react";
import React from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  isdisabled: boolean;
};

const Button = (props: ButtonProps) => {
  const { title, onClick, className, children, isdisabled } = props;

  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`${className}`}
      disabled={isdisabled}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
