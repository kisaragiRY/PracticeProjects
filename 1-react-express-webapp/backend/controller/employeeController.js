"use strict";
const db = require("../models/index");

// const model = db.Employee;
module.exports = {
    read: async(req, res, next) => {
        try{
            const result = await db.Employee.findAll({
                attributes: ['id', 'name', 'gender', 'dept']
            });
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },

    find: async(req, res, next) => {
        try{
            const result = await db.Employee.findAll({
                attributes: ['id', 'name', 'gender', 'dept'],
                where: {
                    id: req.params.id,
                }
            });
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },

    create: async(req, res, next) => {
        try{
            const result = await db.Employee.create({
                name: req.body.formValue.name,
                gender: req.body.formValue.gender,
                dept: req.body.formValue.dept 
            });
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },

    update: async(req, res, next) => {
        try{
            const result = await db.Employee.update(
                {
                    name: req.body.details.name,
                    gender: req.body.details.gender,
                    dept: req.body.details.dept,
                },
                {
                    where: {
                        id: req.params.id,
                    }
                }
            )
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },

    delete: async(req, res, next) => {
        try{
            const result = await db.Employee.destroy({
                where: {
                    id: req.params.id,
                }
            })
            res.send({result: result});
        }catch(err){
            res.status(500).send(err);
        }
    }
}