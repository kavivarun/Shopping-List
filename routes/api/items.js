const express = require('express');
const router = express.Router();

// Item Model

const Item = require('../../Models/Item');

// @route Post /api/items
// @desc add an items
// @access public

router.post('/',(req,res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});


// @route GET /api/items
// @desc GET all items
// @access public
router.get('/',(req,res) => {
Item.find()
.sort({date:-1})
.then(item=> res.json(item));
});

// @route Delete /api/items
// @desc delete an items
// @access public
router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then(item => item.remove()
    .then(item => res.json({deleted : true})))
    .catch(err => res.status(404).json({deleted : false}));
});
module.exports = router
