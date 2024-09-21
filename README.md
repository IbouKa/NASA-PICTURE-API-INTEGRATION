# 🚀 Intégration de l'API NASA PICTURE avec Salesforce
Étapes d'intégration
# 1. 🔗 Configuration du Remote Site Settings
Accéder à Setup > Remote Site Settings.
Ajouter l'URL de l'API NASA :  https://api.nasa.gov/.
# 2. ✅ Trust et Permissions
S'assurer que les utilisateurs disposent des permissions pour accéder à l'objet Apex effectuant les appels API externes.
Ajouter les sites : 
https://api.nasa.gov/ et https://apod.nasa.gov
# 3. 🏷️ Création d'un Custom Label pour la clé API
Accéder à Setup > Custom Labels.
Créer un label :
Label : NASA_API_KEY
Value : ta clé API.
# 4. 🛠️ Récupération de la clé API et des données dans LWC
Importe le Custom Label dans le fichier .js du LWC et appel le web service
# 5. 🌐 Affichage de l'image dans le HTML du LWC
Dans le fichier .html, ajouter une balise <img> pour afficher l'image  :
# 6. Déploiment dans ton org
BOOM vous pouvez prendre votre café maintenant et explorez les belle images
![image](https://github.com/user-attachments/assets/d22bce58-1875-489e-a11c-425eab20f24a)

![image](https://github.com/user-attachments/assets/f05f4e9a-55ac-405e-9fd0-df6cce45286e)

![image](https://github.com/user-attachments/assets/a626019a-4e44-4ca6-9b8c-e387e1c78d46)


