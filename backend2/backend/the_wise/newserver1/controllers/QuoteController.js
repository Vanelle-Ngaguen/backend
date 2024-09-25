const {Quotes} = require('../models')

//getting quotes by collection
exports.collection = async (req, res) => {

    const {collect} = req.body;
    console.log(req.body);
    try {
        const Collection = await Quotes.findAll({ where: { collection: collect}, });
        res.status(201).json({Quotes: Collection});

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  }