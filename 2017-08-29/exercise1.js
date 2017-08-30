var superHeroes = [["Batman", "Bruce Wayne"],
["Spiderman", "Peter Parker"],
["The Flash", "Barry Allen"]];

function getIdentity(hero) {
    return hero.join(" is ")
}

console.log(superHeroes.map(getIdentity).join(", "))
