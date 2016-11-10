
var ApplicationDevoirs = {

    // Méthode lancée lors du lancement pour initialiser
    lancer : function () {
        this.devoirDAO = new DevoirDAO();
        this.devoirs = this.devoirDAO.getListeDevoirs();

        // Installation du proxy pour la redirection lors de changement d'url.
        $(window).on('hashchange', $.proxy(this.naviguer, this));
        this.naviguer();
    },

    // Fonction permettant d'ouvrir la bonne page en fonction du hash dans l'url.
    naviguer : function () {
        // Hash trouvé dans l'url.
        let ancre = window.location.hash;
        // Si pas d'ancre alors on ouvre la page de la liste des devoirs.
        /*if (!ancre){
            this.vue = new ListeDevoirsVue(this.devoirs);

        }else if (ancre.match(/^#ajouter-devoir/)){
            this.ajouterCadeauVue = new AjouterCadeauVue();
            this.ajouterCadeauVue.afficher();
        }else{
            var type = ancre.match(/^#devoir\/([0-9]+)/);
            var idCadeau = type[1];
            var cadeau = this.devoirDAO.getDevoir(idCadeau);
            this.vue = new CadeauVue(cadeau);
        }*/

        this.vue = new ListeDevoirsVue(this.devoirs);
        this.vue.afficher();
    }
};



ApplicationDevoirs.lancer();