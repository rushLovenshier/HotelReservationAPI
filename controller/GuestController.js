const Guest = require('../model/GuestSchema');
const {request} = require("express");

const saveGuest=(req,resp)=>{

    console.log(req.body);

    const tempGuest = new Guest({
        id:req.body.id,
        name:req.body.name,
        nic:req.body.nic,
        email:req.body.email
    });
    tempGuest.save().then(response=>{
        resp.status(201).json({state:true, message:'saved!'})
    }).catch(error=>{
        resp.status(500).json({state:false, message:'something went wrong!'})
    })
}
const updateGuest=(req,resp)=>{
    Guest.updateOne({id:req.body.id},{$set:{
            name:req.body.name,
            nic:req.body.nic,
            email:req.body.email
        }}).then(response=>{
        if(response.modifiedCount>0){
            resp.status(201).json({state:true, message:'Updated'});
        }else{
            resp.status(400).json({state:false, message:'Try Again'});
        }
    }).catch(error=>{
        resp.status(500).json({state:false, message:'Try Again...'});
    })
}
const deleteGuest=(req,resp)=>{
    Guest.deleteOne({id:req.headers.id}).then(response=>{
        if(response.deletedCount>0){
            resp.status(201).json({state:true, message:'Guest Deleted!'});
        }else{
            resp.status(400).json({state:false, message:'Try Again'});
        }
    }).catch(error=>{
        resp.status(500).json({state:false, message:'Try Again...'});
    })
}
const searchGuest=(req,resp)=>{
    Guest.findOne({id:req.headers.id}).then(response=>{
        if(response === null){
            resp.status(400).json({state:false, message:'No such Guest'});
        }else{
            resp.status(200).json({state:false, data:response});
        }
    }).catch(error=>{
        resp.status(500).json({state:false, message:'Try Again...'});
    })
}
const getAllGuests=(req,resp)=>{
    Guest.find().then(response=>{
        resp.status(200).json({state:false, data:response});
    }).catch(error=>{
        resp.status(500).json({state:false, message:'Try Again...'});
    })
}

module.exports={saveGuest, updateGuest, deleteGuest, searchGuest, getAllGuests}