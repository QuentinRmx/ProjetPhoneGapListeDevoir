var Devoir = function(id, nom, matiere, description)
{
  this.construire = function()
  {
    this.id = id;
    this.nom = nom;
    this.matiere = matiere;
    this.description = description;
  }
  
  this.construire();
}