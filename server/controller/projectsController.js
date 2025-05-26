import { addProject } from "../model/projectsModel.js";

// post project
export async function postProject(req, res, next) {
    const project = req.body;
    addProject(project)
    .then(p => {
        res.status(201).json(p);
    });
}