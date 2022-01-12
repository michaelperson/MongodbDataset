/*Afficher le DETAIL des COMMANDES pour tous les clients.*/
db.Client.find
(
    {
       'COMMANDES.DETAILS':{$exists:1}
    }
    ,
    {
        _id:false,
        'COMMANDES.DETAILS':true
    }
)



