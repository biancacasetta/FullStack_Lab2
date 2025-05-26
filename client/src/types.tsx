export type Assignment = {
    employee_id: string,
    employee_name: string,
    project_name: string,
    start_date: Date
}

export type AssignmentResponse = {
    employee_id: {
        employee_id: string,
        full_name: string,
    },
    project_code: {
        project_name: string,
    }
    start_date: Date
}