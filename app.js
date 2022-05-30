const express = require('express');
const app = express();
const courses = require('./routes/courses')
const connectDB = require('./db/connect')
require('dotenv').config()
// security packages
const cors = require('cors')
const xss = require('xss-clean')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json());
app.use(cors());
app.use(xss());

app.get('/', (req, res) => {
    res.send('Courses Api')
})
// route
app.use('/api/v1/courses', courses)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
