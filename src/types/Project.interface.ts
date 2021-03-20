export interface ProjectType {
    project_id: string,
    project_name: string,
    created: string,
    due_date: string,
    todos: Array<TodoType>
}

export interface TodoType {
    todo_id: string,
    created: string,
    est_completion: string,
    title: string,
    description: string,
    done: false
}

