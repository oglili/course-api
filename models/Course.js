const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'must provide a name'],
        trim:true,
        maxlength:[30, 'name cannot be more than 30 characters']
    },
    type: {
        type:String,
        required:[true, 'must provide a type of course'],
        trim:true
    },
    university: {
        type:String,
        required:[true, 'must provide the university name'],
        trim:true
    }

},
{
    collation: { locale: 'en', strength: 2 }
}
)

module.exports = mongoose.model('Course', CourseSchema)