var AjouterDevoirVue = function(devoir){

    this.afficher = function(actionAjouterDevoir){
        $("body").html(AjouterDevoirVue.html);
        $("#formAjoutDevoir").on("submit", $.proxy(this.ajouterDevoir, this));

        if (devoir != null){
        	$("#champs-nom").val(devoir.nom);
        	$("#champs-matiere").val(devoir.matiere);
        	$("#champs-description").val(devoir.description);
        }

        this.actionAjouterDevoir = actionAjouterDevoir;
    }

    this.ajouterDevoir = function(){
    	var nom = $("#champs-nom").val();
    	var matiere = $("#champs-matiere").val();
    	var description = $("#champs-description").val();
    	var devoir = new Devoir(id=null, nom, matiere, description);
    	this.actionAjouterDevoir(devoir);
    	window.location.hash = "";
    	event.preventDefault();
    	
    }

}

AjouterDevoirVue.html = $("#ajouter-devoir-vue").html();