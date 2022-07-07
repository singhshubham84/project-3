const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const reviewSchema = new mongoose.Schema({
    bookId: {
        type: ObjectId,
        required:true,
        refs: 'books'
    },
    reviewedBy: {
        type: String,
        trim:true,
        required: true,
        default: "Guest",
        value:"reviewer's name", ///doubt
    },
    reviewedAt: {
        type: Date,
        required:true,
    },
    rating: {
        type: Number,
        required:true
    },
    review: {
        type:String,
        trim:true,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

})
module.exports=mongoose.model('review',reviewSchema)