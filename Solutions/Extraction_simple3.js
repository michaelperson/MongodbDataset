/*Afficher tous les champs sauf le champ CAT pour tous les clients*/
db.Client.find
(
    {
        /*pas filtres*/
    }
    ,
    {
        'CAT':0
    }
)




