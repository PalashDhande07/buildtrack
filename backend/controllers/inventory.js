const Inventory = require('../modal/Inventory')

exports.inventoryPost = async (req, res) => {
    const newInventory = new Inventory(req.body);  // Use the model to create a new document
    try {
        const savedInventory = await newInventory.save();
        res.status(201).json(savedInventory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
exports.GetData = async(req, res) =>{
    try {
        const inventory = await Inventory.find({}, 'MaterialName Quantity Unit '); 
        res.json(inventory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}