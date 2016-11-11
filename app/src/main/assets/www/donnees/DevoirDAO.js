var DevoirDAO = function () {
    this.listeDevoir = [
        {'id':1, 'nom':'EFC Ethique', 'matiere':'Ethique', 'description':'Préparer le dossier d\'éthique'},
        {'id':2, 'nom':'Application Android', 'matiere':'Android', 'description':'Coder l\'application android avec PhoneGap'},
        {'id':3, 'nom':'Application Pool de Hockey', 'matiere':'Base De Données', 'description':'Coder l\'application de gestion de pool de hockey en VB.NET'}
    ];

    this.getListeDevoirs = function () {
        return this.listeDevoir;
    };

    this.getDevoir = function (id) {
        for(let i in this.listeDevoir){
            const item = this.listeDevoir[i];
            if (item.id == id){
                return item;
            }
        }
    };
};