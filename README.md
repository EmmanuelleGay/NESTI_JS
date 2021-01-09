# NESTI_JS

Projet fil rouge : partie 1
Composant développé en Javascript

Contexte :

L’entreprise Nesti souhaite se diversifier, envisage un grand projet appelé, projet Fil Rouge.
Mais avant de s’engager avec vous, l’entreprise souhaite un échantillon de votre travail et de
votre professionnalisme.
Pour cela, L’entreprise Nesti vous propose de développer un composant JS qui devra être
intégrable dans un plus grand projet.

Objectif :

Le but de ce composant est de permettre la recommandation de recette pour les utilisateurs
qui sont en manque d’inspiration.
L’outil doit être rapide d’utilisation et intuitif.
Composant métier en JS : Sweep or Keep
Une succession de cartes
illustrées sont présentées à
l’utilisateur, comme si ces
cartes étaient empilées. Sur
chaque carte la possibilité
de garder ou de passer.
Une liste d'ingrédients
conservés permet de
proposer une ou plusieurs
recettes à l’utilisateur.

Par exemple :
- Chocolat ⇒ keep
- Fraise ⇒ sweep
- Banane ⇒ keep

Avec les ingrédients gardés
( keep ) l’algorithme doit
proposer une recette qui contient ces ingrédients :
Par exemple : Chocolat + Banane ⇒ Recette recommandée : “Banana split”
Nb : L'algorithme peut proposer une ou plusieurs recettes recommandées. Les recettes
proposées sont illustrées par des images libres de droit. Elles doivent donner envie de
cuisiner, ou de goûter !

Événement :

Au clic de “Sweep” ou “Keep” la première carte passe derrière les autres.
Et on recommence, avec l’ingrédient suivant, et ainsi de suite ...

Contraintes :

1. Le nom des variables et les commentaires sont en anglais
2. Création et utilisation d’une classe Card pour chaque carte d’ingrédient.
3. Les recettes seront stockées dans un fichier JSON
4. Le nombre d’ingrédients doit être suffisamment grand pour avoir des résultats
probants. Minimum 20 recettes.
5. Utilisation d’image libre de droit
6. Effet “Superposition” des cartes
7. Travail à réaliser en groupe :
a. Utilisation d’un outil de versionning
b. Participation équitable entre les développeurs participants ( vérification des
commits )
c. Tous les développeurs participants devront être capable d’expliquer le code.
d. Chaque développeur aura une version finale de la réalisation
e. Compte rendu écrit de réunion seront rédigés à intervalle régulier par chaque
développeur participant.

Livrable :

L1-1 Composant JS fonctionnel et déployé sur un serveur accessible en ligne,
dont on fournira l’adresse url
L1-2 Code source via un accès d’un repo public sur github ( par exemple )
L1-3 Documentation sur le fonctionnement du code, des algorithmes,
recherches techniques réalisées au cours du développement. Cette
documentation doit être illustrée par des captures d’écran et clairement
expliquer le fonctionnement du code.
L1-4 Source des images qui sont utilisés pour le composant
L1-5 Rapport de réunion écrit et daté attestant des échanges réalisés entre
les différents développeurs
