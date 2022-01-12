/*Afficher le NOM et la LOCALITE des clients dont le COMPTE est vide
*/

db.Client.find(
    {
        'COMPTE':{$eq:0}
    }
,
    {
        'NOM':1,
        'LOCALITE':1
    }
)





