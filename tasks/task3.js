const houses = [
    {name: "Targaryen", motto: "Fire and Blood"},
    {name: "Stark", motto: "Winter is Coming"},
    {name: "Bolton", motto: "Our Blades Are Sharp"},
    {name: "Greyjoy", motto: "We Do Not Sow"},
    {name: "Tully", motto: "Family, Duty, Honor"},
    {name: "Arryn", motto: "As High as Honor"},
    {name: "Lannister", motto: "Hear Me Roar!"},
    {name: "Tyrell", motto: "Growing Strong"},
    {name: "Baratheon", motto: "Ours is the Fury"},
    {name: "Martell", motto: "Unbowed, Unbent, Unbroken"}
    ];
    

function motto1(name) {
    for(let i = 0; i < houses.length; i++) {
        if (houses[i].name === name) {
            return houses[i].motto;
        }
    }
}

function motto2(name) {
    return houses.find(el => el.name === name)?.motto;
}

module.exports = {
    motto1,
    motto2
}