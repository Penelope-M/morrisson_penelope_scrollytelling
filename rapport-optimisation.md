rapport-optimisation.md
# Rapport d'optimisation du projet ScrollyTelling

[Page_Speed_Insights-Rapport_du_12_mai_2023_11:49:02] (https://pagespeed.web.dev/analysis/https-penelope-m-github-io-morrisson_penelope_scrollytelling/vr8enrlfrs?form_factor=desktop)

## Problème #1
### Image trop lourde
### Action concrète pour le résoudre: Dimensionnez=les images de taille appropriée sur photoshop afin de réduire le temps de chargement. Par exemple ce image dans le dossier est celle qui est la plus lourde …img/img_arriere_plan/ciel.png , la taille de transfert est 8851,8Kib ce qui est énorme alors que le totale des images est 18519,7Kib.

## Problème #2
### Format d'image trop lourde
### Action concrète pour le résoudre: Diffusez des images aux formats nouvelles génération tels que WebP ry AVIF car ils proposent une meilleur compression que png et jpeg. Par exemple le fichier dans le dossiez img_personnages/output-onlinegiftools.png prologe de 10,16s, une meilleure compression economises de nombreuses secondes.

## Problème #3
### Les éléments d'image ne possèdent pas de width ni de height précise
### Action concrète pour le résoudre: Indiquez une largeur et une hauteur sur les éléments d'images afin de faire une économies de temps pour appercevoir la mise en page