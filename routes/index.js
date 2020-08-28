const express = require("express");
const AdminModel = require("../model/user");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({name: "Sahil Sharma"});
});

router.post("/admin", async (req, res, next) => {
    const adminData = req.body;
    const admin = new AdminModel(adminData);
    const result = await admin.save();
    res.json({result});
});

router.get("/admin", async (req, res, next) => {
    const user = await AdminModel.find().exec();
    res.json({user});
});

module.exports = router;