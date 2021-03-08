const skill = require('../models/skills');
module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};
function deleteSkill(req, res) {
    skill.deleteOne(req.params.id);
    res.redirect('/skills');
}
function newSkill(req, res) {
    res.render('skills/new');
}
function index(req, res) {
    res.render('skills/index', {
        skills: skill.getAll()
    });
}
function show(req, res) {
    res.render('skills/show', {
        skill: skill.getOne(req.params.id)
    })
}
function create(req, res) {
    skill.create(req.body);
    res.redirect('skills');
}
