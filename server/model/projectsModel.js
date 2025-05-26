import { projects } from '../database.js';

// add a new project
export async function addProject(proj) {
    const p = new projects(proj);
    return await p.save()
    .catch(err => {
        throw err;
    });
}