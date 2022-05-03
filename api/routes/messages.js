const router = require("express").Router();
const Message = require("../models/Message");

//add a message
router.post("/", async(req, res) => {
    const newMessage = new Message(req.body)

    try {
      const savedMessage = await newMessage.save();
      res.status(200).json(savedMessage)


    }catch(err) {
        res.status(500).json(err)
    }
})

//get a message
router.get("/:conversationId", async(reaq, res) => {
    try {
    const messages = new Message.find({
        conversationId: req.params.conversationId,

    })

    res.status(200).json(messages)
    } catch(err) {
        res.status(500).json(err)
    }
} )

module.exports = router;
