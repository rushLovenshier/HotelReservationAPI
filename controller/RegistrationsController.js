const Registration = require('../model/RegistrationsSchema');
const {request} = require("express");

const saveRegistration=(req,resp)=>{
    console.log(req.body);

    const tempRegistration = new Registration({
        nic: req.body.nic,
        name:req.body.name,
        id:req.body.id,
        time:req.body.time
    });

    tempRegistration.save().then(response=>{
        resp.status(201).json({state:true, message:'Registration Details Saved!'})
    }).catch(error=>{
        resp.status(500).json({state:false, message:'Try Again!'})
    })
}
const updateRegistration=(req,resp)=>{
    Registration.updateOne({nic:req.body.nic},{$set:{
            name:req.body.name,
            id:req.body.id,
            time:req.body.time

        }}).then(response=>{
        if(response.modifiedCount>0){
            resp.status(201).json({state:true, message:'Registration updated!'});
        }else{
            resp.status(400).json({state:false, message:'Try Again!'});
        }
    }).catch(error=>{
        resp.status(500).json({state:false, message:'Try Again...'})
    })
}
const deleteRegistration=(req,resp)=>{
    Registration.deleteOne({nic:req.headers.nic}).then(response=>{
        if(response.deletedCount>0){
            resp.status(201).json({state:true, message:'Registration canceled!'});
        }else{
            resp.status(400).json({state:false, message:'Try Again!'});
        }
    }).catch(error=>{
        resp.status(500).json({state:false, message:'Try Again...'})
    })
}
const searchRegistration=(req,resp)=>{
    Registration.findOne({nic: req.headers.nic}).then(response=>{
        if(response === null){
            resp.status(400).json({state:false, message:'No such Registration Available!'});
        }else{
            resp.status(200).json({state:false, data:response});
        }
    }).catch(error=>{
        resp.status(500).json({state:false, message:'Try Again...'})
    })
}
const getAllRegistrations=(req,resp)=>{
    Registration.find().then(response=>{
        resp.status(200).json({state:false, data:response});
    }).catch(error=>{
        resp.status(500).json({state:false, message:'Try Again...'})
    })
}

module.exports={saveRegistration, deleteRegistration, updateRegistration, searchRegistration, getAllRegistrations}