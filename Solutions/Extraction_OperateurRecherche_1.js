/*Afficher le NOM des clients dont le COMPTE est strictement n�gatif*/
db.Client.find(
    {
        'COMPTE':{$lt:0}
    }
,
    {
        _id:0,
        'NOM':true
    }
)






