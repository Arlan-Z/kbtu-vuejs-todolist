export interface Task {
    id: number,
    title: string,
    status: 'new' | 'in-progress' | 'completed',
    priority: "low" | "medium" | "high",
    category: TaskCategory[]
}

export type TaskCategory = {
    name: string
};

export type TaskPriority = Task["priority"];
export type TaskStatus = Task["status"];