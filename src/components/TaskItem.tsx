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
        width: 300,
        height: 200,
        background: "pink",
        marginBottom: "1rem",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
