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

    create: async(req, res, next) => {
        try{
            const result = await db.Employee.create({
                name: req.body.name,
                gender: req.body.gender,
                dept: req.body.dept,
            });
            res.send(res);
        }catch(err){
            res.status(500).send(err);
        }
    },

    update: async(req, res, next) => {
        try{
            const result = await db.Employee.update(
                {
                    name: req.body.name,
                    gender: req.body.gender,
                    dept: req.body.dept,
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
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    }
}