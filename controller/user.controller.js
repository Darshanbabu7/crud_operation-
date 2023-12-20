const {usercollection,productcollection} = require("../model/user.model")
const jsonwebtoken = require('jsonwebtoken')
const express = require('express')
let app=express();
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
let addUsers = async(req,res)=>{

    try{
        let{fullname,email,mobile,password,age}=req.body
        let isEmailAvailable = await usercollection.findOne({email})

        if(!isEmailAvailable)
        {
            let isMobileAvailable = await usercollection.findOne({mobile})

            if(!isMobileAvailable)
            {
                let user = await usercollection.create({fullname,email,mobile,password,age})
                return res.status(201).json({error:false, message:"user added successfully", data:user})
            }
            else
            {
               return res.status(409).json({error:true, message:"mobile is already exist"})
            }

        }
        else
        {
            res.status(401).json({error:true, message:"Email is already exist"})
        }

    }
    catch(err){
        res.status(401).json({error:true, message:"htfffi"})
    }
}




let getUsers =async (req,res)=>{

    try{
        let allusers = await usercollection.find({})

        return res.json(await productcollection.findOne({}))
        
        if(allusers.length === 0)
        {
           return res.status(201).json({error:false , message:"no user found"})
        }
        res.status(201).json({error:false, message:"user fetched successfully",data:allusers})
    }
    catch(err){
        res.status(403).json({error:true , message:err.message})
    }  
}



let getSingleUser =async (req,res)=>{

    try
    {
        let{id}= req.params
        let singleuser = await usercollection.findById({_id:id})

        if(!singleuser)
        {
            res.status(201).json({err:false, message:"user not found", })
        }
        res.status(201).json({error:false, message:"user fetched successfully", data:singleuser})    
    }
    catch(err)
    {
        res.status(404).json({error:true, message:err.message})  
    }

       }
let updateUser=async (req,res)=>{

    try
    {
        let{id} = req.params
        let{fullname} = req.body
        let updateduser = await usercollection.findByIdAndUpdate({_id:id},{fullname})

        if(!updateduser)
        {
            res.status(2)
        }
        res.status(201).json({error:false , message:"user update successfully" , data:updateduser})
    }
    catch(err)
    {
        res.status(404).json({error:true, message:"update incomplete"})
    }

 }
let deleteUser= async(req,res)=>{
        try
        {
            let{id}=req.params
            let deleteduser = await usercollection.deleteOne({_id:id})
            
            if(!deleteduser)
            {
                res.status(201).json({error:false , message:"user  not found"})
            }
            res.status(201).json({error:false , message:"user  deleted successfully", data:deleteduser})
        }
        catch(err)
        {
            res.status(404).json({error:true, message:"user not deleted"})
        }
        }

   let validateUser = async(req,res,next)=>{

    try
    {
        let{email,password} = req.body
        let isUserAvailable = await usercollection.findOne({email})

        if(isUserAvailable)
        {
           if(isUserAvailable.password === password) 
           {
           
            res.status(201).json({error:false,message:"login successfully"})
           }     
           else
           {
            res.status(404).json({error:true, message:"invalid password"})
           }
        }
        else
        {
            res.status(404).json({error:true, message:"user not exists"})
        }
    }
    catch(err)
    {
        res.status(404).json({message:err.message})
    }


}

        module.exports ={
            addUsers,
            getUsers,
            getSingleUser,
            updateUser,
            deleteUser,
            validateUser
            }