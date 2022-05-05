import { TaskInterface } from "./types";

export const TaskItem = ({
  id,
  title,
  description,
}: TaskInterface): JSX.Element => {
  return (
    <div
      key={id}
      style={{
        background: "pink",
        marginBottom: "1rem",
        minHeight: "8rem",
        padding: "1rem",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
