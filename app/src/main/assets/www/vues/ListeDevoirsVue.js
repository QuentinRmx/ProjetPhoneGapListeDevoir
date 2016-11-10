var ListeDevoirsVue = function(devoirs){

    // Fonction affichant la page
    this.afficher = function(){
        $("body").html(ListeDevoirsVue.html);

        var ulDevoirs = $("#ul-liste-devoir");


        var htmlListe = "";
        for (var i in devoirs){
            var devoir = devoirs[i];
            htmlListe += ListeDevoirsVue.htmlItem
                .replace("{ID}", devoir.id)
                .replace("{NOM}", devoir.nom);
        }
        ulDevoirs.html(htmlListe);
    }
};

ListeDevoirsVue.html = $("#page-liste-devoir").html();
ListeDevoirsVue.htmlItem = $("#item-devoir").html();