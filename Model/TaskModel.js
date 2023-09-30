import mongoose from "mongoose";

const TaskSchma = mongoose.Schema({
    text:{
        type:String
    },
    compleated:{
        type:Boolean,
        default:false
    }
})

const taskModel = mongoose.model('task',TaskSchma)
export default  taskModel