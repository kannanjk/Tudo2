import mongoose from "mongoose";
import taskModel from '../Model/TaskModel.js'


export const createTask = async (req, res) => {
    const { text } = req.body
    console.log(text);
    const newTask = new taskModel(req.body)
    const task = await newTask.save()
    console.log(task);
}

export const getTask = async () => {
    const Usertask = await taskModel.find()
    console.log(Usertask);
}

export const deleteTask = async (req, res) => {
    const { id } = req.body
    console.log(id);
    const dlt = await taskModel.findByIdAndDelete({_id:id})
    console.log(dlt);
}

export const editTask = async (req,res)=>{
    const {id} = req.body
    const tsk = await taskModel.findByIdAndUpdate({_id:id},req.body,{new:true})
    console.log(tsk);
} 

export const markAsRead =async ()=>{
    const id = req.body
    const read = await taskModel.findOne({_id:id})
    console.log(read);
}