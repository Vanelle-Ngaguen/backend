const express = require('express')
const {Quotes} = require('../models/newquotes');
const {Newquotes} = require('../models');
const {Op} = require('sequelize');
const {Sequelize} = require('sequelize')


//getting all quotes 
exports.Getquotes = async (req, res) => {

    try {
        const Collection = await Newquotes.findAll();
        res.status(201).json({Quotes: Collection});

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  }

//getting romantic quotes
exports.romantic = async (req, res) =>{
    try {
        const Collection =await Newquotes.findAll({ where: { type:"Romantic" }});
        res.status(201).json({Quotes: Collection});
    } catch (error) {
        res.status(400).json({ error: error.message });   
    }
}

//getting Motivation quotes
exports.motivation = async (req, res) =>{
    try {
        const Collection =await Newquotes.findAll({ where: { type:"Motivation" }});
        res.status(201).json({Quotes: Collection});
    } catch (error) {
        res.status(400).json({ error: error.message });   
    }
}

//getting inspiration quotes
exports.inspiration = async (req, res) =>{
    try {
        const Collection =await Newquotes.findAll({ where: { type:"Inspiration" }});
        res.status(201).json({Quotes: Collection});
    } catch (error) {
        res.status(400).json({ error: error.message });   
    }
}

//getting Quote of the day
exports.daily = async (req,res) => {
    try {
        const Collection = await Newquotes.findOne({
            order: Sequelize.literal('RANDOM()')
          });
        res.status(201).json({Quotes: Collection});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}