export interface Task {
    id: number,
    title: string,
    status: 'new' | 'in-progress' | 'done',
    priority: "low" | "medium" | "high"
}

export type TaskStatus = Task["status"];
