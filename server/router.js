import express from 'express';
import { postEmployee } from './controller/employeesController.js';
import { postProject } from './controller/projectsController.js';
import { getAssignments, postAssignment } from './controller/assignmentsController.js';

export const router = express.Router();

// routes
router.post("/api/employees", postEmployee);
router.post("/api/projects", postProject);
router.post("/api/project_assignments", postAssignment);
router.get("/api/project_assignments", getAssignments);