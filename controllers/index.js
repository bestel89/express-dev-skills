const Skill = require("../models/skill")

function index(req, res, next) {
    res.render('index', { skills: Skill.getAll(), title: Skill.title });
}

function show(req, res) {
    const {id} = req.params
    console.log(Skill.getOne(id))
    res.render('show', {skill: Skill.getOne(id)})
}

function newSkill(req, res) {
    res.render('new', {title: 'Add new skill'})
}

function create(req, res){
    console.log(req.body)
    Skill.create(req.body)
    res.redirect('/')
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/');
}

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
}