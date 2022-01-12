
/*Afficher le NOM et l’ADRESSE des clients habitant à Toulouse*/
db.Client.find
(
   {
      'LOCALITE' : {$eq:'Toulouse'} 
   }
   ,
   {
       'NOM':true,
       'ADRESSE':1,
       '_id':false 
   }
)
   


