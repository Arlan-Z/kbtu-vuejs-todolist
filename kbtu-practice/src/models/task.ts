export interface Task {
    id: number,
    title: string,
    status: 'new' | 'in-progress' | 'completed',
    priority: "low" | "medium" | "high",
    category: TaskCategory[]
}

export type TaskCategory = {
    color: string,
    name: string
};

export type TaskStatus = Task["status"];
export type TaskPriority = Task["priority"];
