import { addEmployee } from '../model/employeesModel.js';
import bcrypt from 'bcrypt';

// post employee
export async function postEmployee(req, res, next) {
    let pwd = req.body.pwd;
    pwd = await bcrypt.hash(pwd, 5);
    const emp = req.body;
    emp.hashed_password = pwd;
    addEmployee(emp)
    .then(e => {
        res.status(201).json(e);
    });
}