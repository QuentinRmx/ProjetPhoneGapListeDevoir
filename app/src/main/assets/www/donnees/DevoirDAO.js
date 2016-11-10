var DevoirDAO = function () {
    this.listeDevoir = [
        {'id':1, 'nom':'EFC Ethique', 'description':'Préparer le dossier d\'éthique'},
        {'id':2, 'nom':'Application Android', 'description':'Coder l\'application android avec PhoneGap'},
        {'id':3, 'nom':'Application Pool de Hockey', 'description':'Coder l\'application de gestion de pool de hockey en VB.NET'}
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