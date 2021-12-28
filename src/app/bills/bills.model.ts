export interface Bills {
    title: string,
    dueDate: string,
    amount: number,
    paid: boolean,
    description?: string,
    id: number
}