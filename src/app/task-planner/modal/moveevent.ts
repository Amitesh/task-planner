export interface IMoveEvent {
    fromTaskListId: string;
    toTaskListId: string;
    taskId: string;
    oldIndex: number;
    newIndex: number;
}
