interface TaskItemProps {
  id: number;
}

export const TaskItem = ({ id }: TaskItemProps): JSX.Element => {
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
      TaskItem
    </div>
  );
};
