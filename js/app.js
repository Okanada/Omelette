// Récupérer les objets
var oeuf = {
    name: "oeuf",
    etat: "cru"
};

var epice = {
    name: "épice",
    etat: "moulu"
};

var champignon = {
    name: "champignon",
    etat: "cru"

};

var beurre = {
    name: "beurre",
    etat: "frais"

}



var bol = {
    name: "bol",
    contenu: []
};

var poele = {
    name: "poele",
    contenu: [],
    cuire(contenu) {
        contenu.forEach(function (aliment) {
            aliment.etat = "cuit"
        });
    },


    melanger(contenu) {
        contenu.forEach(function (aliment) {
            aliment.etat = "mélangé"
        });
    }
};


var mixeur = {
    name: "mixeur",
    mixer(contenu) {
        contenu[0].etat = "mixé";
        contenu[1].etat = "mixé";

    }
};

var gaziniere = {
    name: "gazinière",
    etat: false,
    chauffer(poele) {
        poele.etat = "chauffé";

    }

};

var couteau = {
    name: "couteau",
    couper(aliment) {
        aliment.etat = "coupé";
    }
};

var couverts = {
    name: "couverts",
};


var assiette = {
    name: "assiette",
    contenu: null
};


// FONCTIONS
var casser = function (aliment) {
    aliment.etat = "cassé";

}






// casser les oeufs

casser(oeuf);

// Mettre les oeufs dans le bol

bol.contenu.push(oeuf);


// Mettre des épices dans le bol

bol.contenu.push(epice);

// Le mixeur bat le contenu du bol

mixeur.mixer(bol.contenu);

// La gazinière chauffe la poele

gaziniere.chauffer(poele);

// Mettre du beurre dans la poele 

poele.contenu.push(beurre);

// Verser le contenu du bol dans la poele

poele.contenu = poele.contenu.concat(bol.contenu);

// Le couteau découpe les champignons

couteau.couper(champignon);

// Mettre les champignons dans la poele

poele.contenu.push(champignon);

// Mélanger le contenu de la poele

poele.melanger(poele.contenu);

// La gazinière cuit le contenu de la poele 

poele.cuire(poele.contenu);

// Verser l'omelettre (le contenu de la poele) dans l'assiette



// Manger l'omelette avec les couverts

