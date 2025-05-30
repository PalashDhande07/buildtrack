const newConstruction = require('../modal/newConstruction');

exports.NewSite = async(req, res) => {
 const newSite = new newConstruction(req.body);
    try {
        const savedSite = await newSite.save();
        res.status(201).json(savedSite);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

};

exports.GetData = async(req, res) =>{
    try {
        const sites = await newConstruction.find({}, 'siteName siteCode address'); 
        res.json(sites);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}