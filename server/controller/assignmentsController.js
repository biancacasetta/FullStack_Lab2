import { addAssignment, fetchAssignments } from "../model/assignmentsModel.js";


// get all assignments
async function getAssignments(req, res, next) {
    await fetchAssignments().then(ass => res.json(ass));
}

// post project assignment
async function postAssignment(req, res, next) {
    const assignment = req.body;
    addAssignment(assignment)
    .then(a => {
        res.status(201).json(a);
    }); //add error
}

export { getAssignments, postAssignment };