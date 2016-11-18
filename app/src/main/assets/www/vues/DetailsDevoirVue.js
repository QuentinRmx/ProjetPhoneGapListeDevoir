var DetailsDevoirVue = function(devoir){

	this.devoir = devoir;

    // Fonction afficant la page de détail
    this.afficher = function(){
        var html = DetailsDevoirVue.html
            .replace("{NOM}", this.devoir.nom)
            .replace("{DESCRIPTION}", devoir.description)
            .replace("{MATIERE}", devoir.matiere);

        $("body").html(html);
    }
};
DetailsDevoirVue.html = $("#detail-devoir-vue").html();