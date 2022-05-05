import { useGetTasksInList } from "../utils";

import { TaskItem } from ".";

import { CustomIcon } from "./CustomIcon";

interface TaskColumnProps {
  columnTitle: string;
}

export const TaskColumn = ({ columnTitle }: TaskColumnProps): JSX.Element => {
  const taskList = useGetTasksInList(columnTitle);

  const moreOptions = () => console.log("more options here");
  const addTask = () => console.log("add task");

  return (
    <>
      <div
        id={`${columnTitle}-column`}
        className="column"
        style={{ width: 300 }}
      >
        <div className="column__header d-flex">
          <h2 className="flex-grow-1">{columnTitle}</h2>
          <button
            type="button"
            className="btn center-children"
            onClick={addTask}
          >
            <CustomIcon
              icon="plus"
              iconType="customIcons"
              aria-hidden
              focusable={false}
              width={20}
              height={20}
            />
            <span className="visually-hidden">Add task</span>
          </button>
          <button
            type="button"
            className="btn center-children"
            onClick={moreOptions}
          >
            <CustomIcon
              icon="ri-more-fill"
              iconType="remixIcons"
              aria-hidden
              focusable={false}
              width={20}
              height={20}
            />
            <span className="visually-hidden">More options</span>
          </button>
        </div>

        <div className="column__body">
          {taskList.length === 0 ? (
            <div className="text-center">
              <button
                type="button"
                className="btn center-children"
                onClick={addTask}
              >
                <CustomIcon
                  icon="plus"
                  iconType="customIcons"
                  aria-hidden
                  focusable={false}
                  width={20}
                  height={20}
                />
                <span>Add task</span>
              </button>
            </div>
          ) : (
            taskList.map((task) => <TaskItem {...task} />)
          )}
        </div>
      </div>

      {/* <div
        className="BoardBody-columnDraggableItemWrapper SortableList-sortableItemContainer"
        style={{ maxWidth: 200 }}
      >
        <div className="SortableItem SortableList-sortableItem">
          <div className="BoardColumn BoardBody-column">
            <div className="BoardColumn-dragHandle" draggable="true">
              <div className="BoardColumnHeader BoardColumn-header">
                <h3 className="BoardColumnHeaderTitle BoardColumnHeader-name Typography Typography--colorDarkGray2 Typography--overflowTruncate Typography--h5 Typography--fontWeightMedium">
                  {columnTitle}
                </h3>
                <div
                  className="AbstractThemeableIconButton--isEnabled AbstractThemeableIconButton AbstractThemeableIconButton--medium SubtleIconButton BoardColumnHeader-addTaskButton BoardColumnHeader-addTaskOnClickButton"
                  role="button"
                  aria-label="Add task"
                  tabIndex={0}
                ></div>
                <div
                  id="lui_173"
                  className="AbstractThemeableIconButton--isEnabled AbstractThemeableIconButton AbstractThemeableIconButton--medium SubtleIconButton BoardColumnHeader-dropdownButton"
                  role="button"
                  aria-label="More section actions"
                  aria-expanded="false"
                  tabIndex={0}
                ></div>
              </div>
            </div>
            <div className="BoardColumnScrollableContainer--boardsRevamp BoardColumnScrollableContainer">
              <div className="BoardColumnScrollableContainer-scrollableTopSeam"></div>
              <div
                className="Scrollable--withCompositingLayer Scrollable Scrollable--vertical BoardColumnScrollableContainer-scrollable--autoscrollEnabled BoardColumnScrollableContainer-scrollable"
                tabIndex={-1}
              >
                <div className="SortableList BoardColumnScrollableContainer-cardsList BoardColumnWithSortableTasks-sortableList">
                  <div className="SortableList-itemContainer SortableList-itemContainer--column">
                    <div className="BoardColumnWithSortableTasks-sortableItemWrapper--boardsRevamp BoardColumnWithSortableTasks-sortableItemWrapper SortableList-sortableItemContainer">
                      <div className="SortableItem SortableList-sortableItem">
                        <div draggable="false">
                          <div className="ContextMenuTarget-contextMenuEventListener">
                            <div draggable="true">
                              <div
                                className="BaseCard--isValid BaseCard BaseSelectableCard--isNotSelected BaseSelectableCard--isEnabled BaseSelectableCard BaseDraggableCard--isClickable BaseDraggableCard--default BaseDraggableCard DraggableCard BoardCard-draggableCard"
                                role="button"
                                tabIndex={0}
                              >
                                <div
                                  className="BoardCardLayout BoardCard-layout"
                                  data-task-id="1201804734841963"
                                >
                                  <div className="BoardCardLayout-contentAboveSubtasks">
                                    <div className="BoardCardLayout-image"></div>
                                    <div className="BoardCardLayout-projectPills"></div>
                                    <div className="BoardCardLayout-parentTask"></div>
                                    <div className="BoardCardLayout-titleAndIndicator">
                                      <div className="BoardCardLayout-completionIndicator"></div>
                                    </div>
                                    <div className="BoardCardLayout-customPropertiesAndTags"></div>
                                    <div className="BoardCardLayout-assigneeDueDateActions">
                                      <div className="BoardCardLayout--alwaysShowAssignee BoardCardLayout-assignee">
                                        <div className="DomainUserAvatar BoardCard-assignee BoardCard--alwaysVisible BoardCard--boardsRevampEnabled">
                                          <div
                                            className="DomainUserAvatar-avatar Avatar AvatarPhoto AvatarPhoto--small AvatarPhoto--color0"
                                            role="img"
                                            aria-label="Mikaela O'Halloran"
                                          >
                                            <div aria-hidden="true">MO</div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="BoardCardLayout-dueDate">
                                        <div className="DueDateContainer BoardCard-dueDate BoardCard--boardsRevampEnabled">
                                          <div
                                            role="button"
                                            tabIndex={0}
                                            className="DeprecatedCircularButton DeprecatedCircularButton--enabled DeprecatedCircularButton--small DueDateContainer-button DueDateContainer-button--circular"
                                            aria-disabled="false"
                                            aria-pressed="false"
                                          >
                                            <CustomIcon
                                              icon="calendar"
                                              iconType="customIcons"
                                              aria-hidden
                                              focusable={false}
                                              width={200}
                                              height={200}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="BoardCardLayout-subtasks"></div>
                                  <div className="BoardCardLayout-overflowMenu"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="SortableList-endOfListDropTarget"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
