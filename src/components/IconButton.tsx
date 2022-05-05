import { css, cx } from "@linaria/core";

interface IconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

export const IconButton = ({
  type = "button",
  className = "",
  children,
  ...rest
}: IconButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className={cx(className, "btn iconBtn")}
      {...rest}
      // className={css`
      //   background: red;
      // `}
    >
      {children}
    </button>
  );
};
