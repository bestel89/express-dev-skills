const { getAll, getOne, title } = require("../models/skill")

function index(req, res, next) {
    res.render('index', { skills: getAll(), title });
}

function show(req, res) {
    const {id} = req.params
    console.log(getOne(id))
    res.render('show', {skill: getOne(id)})
}

module.exports = {
    index,
    show,
    title
}