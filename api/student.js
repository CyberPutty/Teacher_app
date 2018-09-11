import { Router } from 'express';
<<<<<<< HEAD
import StudentModel from './models/studentSchema';
=======
import { Students } from './models';
>>>>>>> e717b0c9ea70be314614e2a20e53c54582058c01

const student = Router();

student.post('/', (req, res) => {
  // grab student data for our post request
  // anything not in the body will be undefined
  const name = req.body.name;
  const contact = req.body.contact;
  const assignments = req.body.assignments;
  // check for any required attributes and create the student
  if (name) {
    Students
      .create({
        name,
        contact,
        assignments
      })
      .then(student => {
        return res.status(200).json({
          message: 'Student successfully created!',
          data: student
        });
      })
      .catch(err => {
        return res.status(400).json({
          message: 'Student was not created. Error: ' + err.toString()
        });
      });
  } else {
    return res.status(400).json({
      message: 'A name must be provided when creating Students'
    });
  }
});

export default student;