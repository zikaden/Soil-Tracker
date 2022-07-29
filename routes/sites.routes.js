const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Sites = require("../models/SitesModel");
const User = require("../models/UserModel")

//create a new site
router.post("/new", (req, res, next) => {
    console.log(req.body)
    Sites.create({ titleInformation: req.body, tasks: [], user: req.body.user })
        .then((response) => res.json(response))
        .catch((err) => res.json(err));
});



// search sites
router.get("/search/:searchTerm", (req, res) => {
    Sites.find({ $or: [{ 'titleInformation.siteName': req.params.searchTerm }, { 'titleInformation.keywords': req.params.searchTerm }] })
        .then((response) => res.json(response))
        .catch((err) => res.json(err));
});

//update exsiting site
router.post("/update/:siteID", (req, res) => {
    const { siteID } = req.params
    Sites.findByIdAndUpdate(siteID, { titleInformation: req.body, tasks: [] })
        .then((response) => res.json(response))
        .catch((err) => res.json(err));
});

//GET site information for site info
router.get("/:siteID", (req, res) => {
    const { siteID } = req.params
    Sites.findById(siteID)
        .then((response) => res.json(response))
        .catch((err) => res.json(err));
});

//GET site information to sort after date
router.get("/recent/:userID", (req, res) => {
    const { userID } = req.params
    Sites.find({ user: userID })
        .sort({ 'titleInformation.date': -1 })
        .limit(10)
        .then((response) => res.json(response))
        .catch((err) => res.json(err));
});

// DELETE /auth/delete- find user and delete
router.delete('/delete/:siteID', (req, res, next) => {
    const { siteID } = req.params;
    console.log(req.params)
    Sites.findByIdAndDelete(siteID)
        .then(deletedSite => {
            console.log(deletedSite)
            res.status(200).json("deleted")
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router;