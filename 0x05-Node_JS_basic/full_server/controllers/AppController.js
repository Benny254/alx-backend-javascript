         /**
	*  * This hold miscellaneous route handlers.
	*    */


class AppController {
          static getHomepage(request, response) {
                  response.status(200).send('Hello Alx School!')
                    }
}


export default AppController
module.exports = AppController
