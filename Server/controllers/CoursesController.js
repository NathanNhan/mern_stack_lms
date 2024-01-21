const Course = require('../models/Course.js');

class CoursesController {
    createCourse(req, res, next) {
        const newCourse = new Course(req.body);
        newCourse.save()
            .then(savedCourse => res.status(200).json(savedCourse))
            .catch(next);
    }

    updateCourse(req, res, next) {
        Course.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
          )
            .then(updatedCourse => res.status(200).json(updatedCourse))
            .catch(next);
    }

    deleteCourse(req, res, next) {
        Course.findByIdAndDelete(req.params.id)
            .then(res.status(200).json("Course has been deleted."))
            .catch(next);
    }

    getCourse(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.status(200).json(course))
            .catch(next);
    }

    getCourses(req, res, next) {
        const { min, max, ...others } = req.query;
    
        Course.find({
          ...others,
          cheapestPrice: { $gt: min | 1, $lt: max || 999 },
        })
          .limit(req.query.limit)
          .then((courses) => {
            res.status(200).json(courses);
          })
          .catch(next);
      }
}

module.exports = new CoursesController;
