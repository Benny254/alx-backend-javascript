import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 *  * Connect the routes
 *   * @param {Express}  Express application.
 *    */
const mapRoutes = (app) => {
	  app.get('/', AppController.getHomepage);
	  app.get('/students', StudentsController.getAllStudents);
	    app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
