export interface Task {
    id: number,
    title: string,
    priority: "low" | "medium" | "high",
    category: TaskCategory[]
}

export type TaskCategory = {
    color: string,
    name: string
};

export type TaskPriority = Task["priority"];
