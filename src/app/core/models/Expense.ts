export interface Expense {
    userId: string;
    expenseId: number;
    amount: string;
    title: string;
    description: string;
    expenseDate: string;
    created: string;
}

export interface User {
    userId: string;
    userName: string;
    email: string;
}
