import mongoose, { SchemaTypes } from "mongoose";
import 'dotenv/config';

// create connection to database
mongoose.connect(process.env.CONNECTION_URL);

// create schemas for collections
// employees

const empSchema = new mongoose.Schema({
    employee_id: {
        type: Number,
        unique: true,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    }
});

// projects

const projSchema = new mongoose.Schema({
    project_code: {
        type: String,
        unique: true,
        required: true
    },
    project_name: {
        type: String,
        required: true
    },
    project_description: {
        type: String,
        required: true
    }
});

// project assignments

const proAssSchema = new mongoose.Schema({
    employee_id: {
        type: SchemaTypes.ObjectId,
        ref: 'employees' 
    },
    project_code: {
        type: SchemaTypes.ObjectId,
        ref: 'projects'
    },
    start_date: {
        type: Date,
        required: true
    }
});

// create collections

const employees = mongoose.model("employees", empSchema);
const projects = mongoose.model("projects", projSchema);
const assignments = mongoose.model("assignments", proAssSchema);

export { employees, projects, assignments };