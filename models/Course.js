const mongoose = require('mongoose'), Schema = mongoose.Schema;

const TypeSchema = new mongoose.Schema({
    type: {
        type:String,
        required:[true, 'must provide a type of course'],
        unique:true,
        trim:true
    }  
}
)
const Type = mongoose.model('Type', TypeSchema)

const UnivSchema = new mongoose.Schema({
    university: {
        type:String,
        required:[true, 'must provide a type of university'],
        unique:true,
        trim:true
    }  
}
)
const Univ = mongoose.model('University', UnivSchema)

const CourseSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'must provide a name'],
        trim:true,
        maxlength:[30, 'name cannot be more than 30 characters']
    },
    type: {
        type: Schema.Types.ObjectId,
        ref:"Type"
    },
    university: {
        type: Schema.Types.ObjectId,
        ref:"University"
    },    
}
)
const Course = mongoose.model('Course', CourseSchema)


module.exports = {Type, Univ, Course}


/*const CourseSchema = new mongoose.Schema({
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
        enum: {
            values:['University of Vicenza','University of Verona','University of Brescia','University of Milano','University of Catania','University of Rome','University of Macerata'],
            message:'{VALUE} is not supported'
        },
        trim:true
    }

},
{
    collation: { locale: 'en', strength: 2 }
}
)

module.exports = mongoose.model('Course', CourseSchema)*/