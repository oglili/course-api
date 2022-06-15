# RESTful JSON APIs for a training platform.

In this project I created a RESTful JSON APIs using Express js, which provides a way for insertion of the courses offered by the platform into the database. Users can interact with the database by retrieving a list of courses, as well as adding, updating and deleting courses in the database.

## Technologies Used

- Node.js
- Express js
- MongoDB/Mongoose

## Installation

- Download or clone from Github
- Run `npm install`
- Create your database with MongoDB/Mongosoe
- Create your .env file with your database credentials
- Run 'npm start' to set the browser 


## REST API Endpoints

### Course

- `GET /api/v1/courses` - Returns all courses or for the provided query using the parameters in the database. 
   Example: /api/v1/courses?name=Economics&university=University%20of%20Verona
- `GET /api/v1/courses:id` - Returns the course for the provided course ID
   Example: /api/v1/courses/6291eb733531b12f74618fa4
- `POST /api/v1/courses` - Creates a course
   Example: /api/v1/courses
- `POST /api/v1/courses/all` - Creates a course using any parameters in the database
   Example: /api/v1/courses/all?university=University of Macerata
- `PATCH /api/v1/courses/:id` - Updates a course specifying the id
   Example: /api/v1/courses/62910b7ee27b561b58fcb5ae
- `DELETE /api/v1/courses/:id` - Deletes a course specifying the id
   Example: /api/v1/courses/62910b7ee27b561b58fcb5ae
- `PATCH /api/v1/courses/:all` - Updates a course specifying any parameters
   Example: /api/v1/courses/course/Matematics
- `DELETE /api/v1/courses/:all` - Deletes a course specifying any parameters
   Example: /api/v1/courses/course/University of Vicenza

### Tests

- Postman can be used to test the REST API.

## Error Messages

- Error messages are always returned in an array of error objects

### Validation

- Course: `name`, `type`, `university` are required and case insensitive
- Universities valid are: `University of Vicenza`, `University of Verona`, `University of Brescia`, `University of Milano`, `University of Catania`, `University of Rome` and `University of Macerata` 

## Links
Link to App:
https://courses-catalog-api.herokuapp.com/api/v1/courses

Link to Github:
https://github.com/oglili/course-api

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
