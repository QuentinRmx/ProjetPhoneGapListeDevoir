var DevoirDAO = function() {

    this.listeDevoirs = [];

    this.initialiser = function() {
        this.initBDD();
    };

    this.listerTousLesDevoirs = function(finalisation) {
        this.baseDeDonnees.transaction(
            // operation
            $.proxy(
                function(operation) {
                    var SQL_SELECTION = "SELECT * FROM devoir";
                    operation.executeSql(SQL_SELECTION, [],
                        $.proxy(
                            function(operation, resultat) {
                                this.listeDevoirs = [];
                                for (var position = 0; position < resultat.rows.length; position++) {
                                    var enregistrementDevoir = resultat.rows.item(position);
                                    var devoir =
                                        new Devoir(
                                            enregistrementDevoir.id,
                                            enregistrementDevoir.nom,
                                            enregistrementDevoir.matiere,
                                            enregistrementDevoir.description);
                                    this.listeDevoirs[this.listeDevoirs.length] = devoir;

                                }
                            }, this));
                },
                this),

            // erreur
            this.reagirErreur,

            // succes
            $.proxy(function() {
                    finalisation(this.listeDevoirs);
                },
                this)
        );
    };

    this.getDevoir = function(id) {
        for (let i in this.listeDevoirs) {
            const item = this.listeDevoirs[i];
            if (item.id == id) {
                return item;
            }
        }
    };

    this.reagirErreur = function(erreur) {
        console.log("ERREUR:SQL:" + erreur.code + ":" + erreur.message);
        alert("ERREUR:SQL:" + erreur.code + ":" + erreur.message);
    }

    this.reagirSucces = function() {
        console.log("SUCCES:SQL:");
        alert("SUCCES:SQL:");
    }

    this.ajouterDevoir = function(devoir) {
        this.baseDeDonnees.transaction(
            function(operation) {
                //alert("ajouterCadeau");
                var SQL_AJOUT = "INSERT INTO devoir (nom, matiere, description) VALUES(?,?,?)";
                var parametres = [devoir.nom, devoir.matiere, devoir.description];
                operation.executeSql(SQL_AJOUT, parametres);
            },
            this.reagirErreur,
            this.reagirSucces
        );
    };

    this.viderBdd = function() {
        this.baseDeDonnees.transaction(
            function(operation) {
                var sql = "Drop Table devoir;"
                operation.executeSql(sql);

                var SQL_CREATION = "CREATE TABLE IF NOT EXISTS devoir(id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(50), matiere VARCHAR(100), description TEXT)";
                operation.executeSql(SQL_CREATION);
            },
            this.reagirErreur,
            this.reagirSucces
        );

    }

    this.initBDD = function() {
        var SQL_CREATION = "CREATE TABLE IF NOT EXISTS devoir(id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(50), matiere VARCHAR(100), description TEXT)";
        this.baseDeDonnees = window.openDatabase("ListeDevoir", "1.0", "Liste de devoirs", 200000);

        this.baseDeDonnees.transaction(
            function(operation) {
                var SQL_CREATION = "CREATE TABLE IF NOT EXISTS devoir(id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(50), matiere VARCHAR(100), description TEXT)";

                operation.executeSql(SQL_CREATION);
            },
            this.reagirErreur,
            this.reagirSucces
        );
    }
};