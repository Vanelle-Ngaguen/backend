const {Authors} = require('../models')


//Getting all authors
exports.AllAuthors = async (req,res) => {
    try {
        const Author = await Authors.findAll();
        console.log(Author);
        res.status(201).json({Authors: Author});    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}