import { assignments } from '../database.js';

// fetch all project assignments
async function fetchAssignments() {
   return await assignments.find()
   .populate('employee_id')
   .populate('project_code')
   .sort({start_date: -1})
   .limit(5);
}

// add a new project assignment
async function addAssignment(ass) {
    const a = assignments(ass);
    return await a.save()
    .catch(err => {
        throw err;
    });
}

export { fetchAssignments, addAssignment };