
var ApplicationDevoirs = {

    // Méthode lancée lors du lancement pour initialiser
    lancer : function () {
        this.devoirDAO = new DevoirDAO();
        this.devoirDAO.initialiser();
        //this.devoirs = this.devoirDAO.listerTousLesDevoirs();

        // Installation du proxy pour la redirection lors de changement d'url.
        $(window).on('hashchange', $.proxy(this.naviguer, this));
        this.naviguer();
    },

    // Fonction permettant d'ouvrir la bonne page en fonction du hash dans l'url.
    naviguer : function () {
        // Hash trouvé dans l'url.
        let ancre = window.location.hash;
        // Si pas d'ancre alors on ouvre la page de la liste des devoirs.
        if (!ancre){
            this.devoirDAO.listerTousLesDevoirs($.proxy(this.afficherTousLesDevoirs, this)); 
        }else if (ancre.match(/^#ajouter-devoir/)){
            this.vue = new AjouterDevoirVue(null);
            this.vue.afficher($.proxy(this.sauvegarderNouveauDevoir, this)); 
        }else if (ancre.match(/^#viderBdd/)){
            this.devoirDAO.viderBdd();
            window.location.hash = "";
        }else{
            var type = ancre.match(/^#devoir\/([0-9]+)/);
            var idDevoir = type[1];
            var devoir = this.devoirDAO.getDevoir(idDevoir);
            this.vue = new AjouterDevoirVue(devoir);
            this.vue.afficher($.proxy(this.sauvegarderNouveauDevoir, this));
        }
    },

    sauvegarderNouveauDevoir : function(devoir){
        this.devoirDAO.ajouterDevoir(devoir);
    },
  
  afficherTousLesDevoirs : function(listeDevoirs){
    this.vue = new ListeDevoirsVue(listeDevoirs);
    this.vue.afficher();      
  }
};

ApplicationDevoirs.lancer();