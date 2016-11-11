var AjouterDevoirVue = function(){

    this.afficher = function(){
        $("body").html(AjouterDevoirVue.html);
    }

}

AjouterDevoirVue.html = $("#ajouter-devoir-vue").html();