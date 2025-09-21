export interface Task {
    id: number,
    title: string,
    priority: "low" | "medium" | "high",
    category: TaskCategory[]
}

export type TaskCategory = {
    name: string
};

export type TaskPriority = Task["priority"];
