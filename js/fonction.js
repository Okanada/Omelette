var maFonction = function () {
    console.log(" je suis executé");
};


//bloc d'instructions// 


{

}


var couleur = {
    color: "jaune"
};
var oeuf = {
    etat: "cru",
    name: "Kojak",
    centre: couleur,
    quantité: "3",
    coquille: true
};



var champignon = {
    etat: "cru",
    name: "Toad",
    color: "beige"
};


var poivre = {
    color: "black",
    name: "poivre"
};
var sel = {
    color: "rose",
    name: "sel"
};
var piment = {
    color: "red",
    name: "piment"
};
var epices = {
    name: "Caliente",
    contenu: []
};




var butter = {
    name: "Olga",
    color: "yellow",
    poids: "50g"
};



var omelette = {
    name: "Dexter",
    contenu: [oeuf, champignon, epices, butter],

};

// Ustensiles

var couteau = {
    color: "argent",
    couper() { }
}
var fourchette = {
    color: "argent",
    piquer() { }
}
var couverts = {
    contenu: [couteau, fourchette]
}

var bol = {
    poids: "100g",
    contenu: []
};

var poele = {
    poids: "300g",
    color: "black",
    contenu: null,
    cuire() { }

}

var gazinière = {
    puissance: "moyen",
    name: "Combustor",
    etat: false,
    chauffer() { }
}

var assiette = {
    poids: "100g",
    contenu: null
}





var mixeur = {
    puissance: "fort",
    etat: false,
    contenu: [],
    mixer() {
    }
};

var mixage = {
    contenu: [oeuf, epices],
    melange: false,
};