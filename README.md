# RESTful JSON APIs for Reach17 training platform.

Reach17 is a UN goal-based training platform that will need to catalog the courses it will offer.

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

- `GET /api/v1/courses` - Returns all courses.   
- `GET /api/v1/courses/type` - Returns all course types.
- `GET /api/v1/courses/univ` - Returns all course universities.
- `POST /api/v1/courses` - Creates a course.
- `POST /api/v1/courses/type` - Creates a course type.
- `POST /api/v1/courses/univ` - Creates a university.
- `PUT /api/v1/courses/:id` - Updates a course specifying the id.
- `PUT /api/v1/courses/type/:id` - Updates a type specifying the id.
- `PUT /api/v1/courses/univ/:id` - Updates a university specifying the id.
- `DELETE /api/v1/courses/:id` - Deletes a course specifying the id.
- `DELETE /api/v1/courses/type/:id` - Deletes a type specifying the id.
- `DELETE /api/v1/courses/univ/:id` - Deletes a university specifying the id.
- `GET /api/v1/courses/:name/:university` - Returns a course with the course name and university params. 
- `GET /api/v1/courses/all/course/univ/cat` - Returns courses with the courses name and universities.
- `GET /api/v1/courses/all/course/type` - Returns courses showing the courses name and types.   



### Tests

- Postman can be used to test the REST API.

## Error Messages

- Error messages are always returned in an array of error objects


## Link

Link to App:
https://course-cat-api.herokuapp.com/api/v1/courses

Link to Github:
https://github.com/oglili/course-api

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
