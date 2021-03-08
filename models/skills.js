const skills = [
    { id: 121915, skill: 'Amo popo', acquired: true },
    { id: 031610, skill: 'Deadlift 700', acquired: true },
    { id: 123456, skill: 'Eat Boogers', acquired: false },
    { id: 253219, skill: 'Defeat Muzan', acquired: false }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New skills wouldn't be done :)
    skill.acquired = false;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
};