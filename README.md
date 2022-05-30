# RESTful JSON APIs for a training platform.

In this project I created a RESTful JSON APIs using Express js, which provides a way for insertion of the courses offered by the platform intothe database. Users can interact with the database by retrieving a list of courses, as well as adding, updating and deleting courses in the database.

## Technologies Used

- Node.js
- Express js
- MongoDB/Mongoose
- 
## Installation

- Download or clone from Github
- Run `npm install`
- Create your database with MongoDB/Mongosoe
- Create your .env file with your database credentials
- Run 'npm start' to set the browser 


## REST API Endpoints

### Course

- `GET /api/v1/courses` - Returns all courses.
- `GET /api/v1/courses:id` - Returns the course for the provided course ID
- `GET /api/v1/courses/all/query` - Returns the courses for the provided query using the parameters in the database
- `GET /api/v1/courses/:type/:name` - Returns the course for the provided type and name
- `POST /api/v1/courses` - Creates a course
- `PATCH /api/v1/courses/:type` - Updates a course specifying any type param and returns no content
- `PATCH /api/v1/courses/:type/:name` - Updates a course specifying any type and name params
- `PATCH /api/v1/courses/uni/course/:university` - Updates a course specifying university params
- `DELETE /api/v1/courses/:type` - Deletes a course using type params
- `DELETE /api/v1/courses/:type/:name` - Deletes a course using type & name params
- `DELETE /api/v1/courses/uni/course/:university` - Deletes a course using university params

### Tests

- Postman can be used to test the REST API.

## Error Messages

- Error messages are always returned in an array of error objects

### Validation

- Course: `name`, `type`, `university` are required and case insensitive

## Links
Link to App:
https://courses-catalog-api.herokuapp.com/api/v1/courses
Link to Github:
https://github.com/oglili/course-api

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
