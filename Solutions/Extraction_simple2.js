/*Afficher le NOM, le COMPTE et les COMMANDES des clients habitant à Poitiers.*/
db.Client.find
(
   {
       'LOCALITE':'Poitiers'
   }
   ,
   {
       'COMMANDES':1,
       'NOM':1,
       'COMPTE':1,
       '_id':0
   }

)




