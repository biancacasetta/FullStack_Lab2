import { employees } from '../database.js';

// add a new employee
export async function addEmployee(emp) {
    const e = new employees(emp);
    return await e.save()
    .catch(err => {
        throw err;
    });
}