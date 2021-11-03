const Room = require('../model/RoomSchema');
const {request} = require("express");

const saveRoom=(req,resp)=>{
    console.log(req.body);

    const tempRoom = new Room({
        id:req.body.id,
        availability:req.body.availability,
        time:req.body.time
    });

    tempRoom.save().then(response=>{
        resp.status(201).json({state:true, message:'Room Details Saved!'})
    }).catch(error=>{
        resp.status(500).json({state:false, message:'Try Again!'})
    })
}
const updateRoom=(req,resp)=>{
    Room.updateOne({id:req.body.id},{$set:{
            availability:req.body.availability,
            time:req.body.time

        }}).then(response=>{
        if(response.modifiedCount>0){
            resp.status(201).json({state:true, message:'Room availability updated!'});
        }else{
            resp.status(400).json({state:false, message:'Try Again!'});
        }
    }).catch(error=>{
        resp.status(500).json({state:false, message:'Try Again...'})
    })
}
const deleteRoom=(req,resp)=>{
    Room.deleteOne({id:req.headers.id}).then(response=>{
        if(response.deletedCount>0){
            resp.status(201).json({state:true, message:'Room deleted!'});
        }else{
            resp.status(400).json({state:false, message:'Try Again!'});
        }
    }).catch(error=>{
        resp.status(500).json({state:false, message:'Try Again...'})
    })
}
const searchRoom=(req,resp)=>{
    Room.findOne({id: req.headers.id}).then(response=>{
        if(response === null){
            resp.status(400).json({state:false, message:'No such Room Available!'});
        }else{
            resp.status(200).json({state:false, data:response});
        }
    }).catch(error=>{
        resp.status(500).json({state:false, message:'Try Again...'})
    })
}
const getAllRooms=(req,resp)=>{
    Room.find().then(response=>{
        resp.status(200).json({state:false, data:response});
    }).catch(error=>{
        resp.status(500).json({state:false, message:'Try Again...'})
    })
}

module.exports={saveRoom, updateRoom, deleteRoom, searchRoom, getAllRooms}