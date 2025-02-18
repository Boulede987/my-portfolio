import React from 'react';
import "../globals.css";

const PortfolioGrid = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Adresse URL du portfolio :</h1>
      
      {/* Main Grid Container */}
      <div className="border border-black">
        {/* Header Row */}
        <div className="grid grid-cols-7 border-b border-black">
          <div className="col-span-1 p-2 border-r border-black flex items-center justify-center">
            <div className="transform -rotate-45 origin-center text-center font-semibold">
              Réalisations professionnelles<br/>
              (intitulé et liste des documents et productions associés)
            </div>
          </div>
          <div className="col-span-1 p-2 border-r border-black flex flex-col items-center justify-center text-center">
            <span className="font-semibold">Période (sous la forme du JJ/MM/AA au JJ/MM/AA)</span>
          </div>
          <div className="col-span-1 p-2 border-r border-black text-center">
            <span className="font-semibold">1. Gérer le patrimoine informatique</span>
            <div className="grid grid-cols-1 gap-2 mt-2 text-xs">
              <span>a • Recenser et identifier les ressources numériques</span>
              <span>b • Exploiter les référentiels, normes et standards adoptés par le prestataire informatique</span>
              <span>c • Mettre en place et vérifier les niveaux d'habilitation associés à un service informatique</span>
              <span>d • Vérifier les conditions de la continuité d'un service informatique</span>
              <span>e • Gérer des sauvegardes</span>
              <span>f • Vérifier le respect des règles d'utilisation des ressources</span>
            </div>
          </div>
          <div className="col-span-1 p-2 border-r border-black text-center">
            <span className="font-semibold">2. Répondre aux incidents et aux demandes d'assistance et d'évolution</span>
            <div className="grid grid-cols-1 gap-2 mt-2 text-xs">
              <span>a • Collecter, suivre et orienter des demandes</span>
              <span>b • Traiter des demandes concernant les services réseau et système, applicatifs</span>
              <span>c • Traiter des demandes concernant les applications</span>
            </div>
          </div>
          <div className="col-span-1 p-2 border-r border-black text-center">
            <span className="font-semibold">3. Développer la présence en ligne de l'organisation</span>
            <div className="grid grid-cols-1 gap-2 mt-2 text-xs">
              <span>a • Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques</span>
              <span>b • Référencer les services en ligne de l'organisation et mesurer leur visibilité</span>
              <span>c • Participer à l'évolution d'un site Web exploitant les données de l'organisation</span>
            </div>
          </div>
          <div className="col-span-1 p-2 border-r border-black text-center">
            <span className="font-semibold">4. Travailler en mode projet</span>
            <div className="grid grid-cols-1 gap-2 mt-2 text-xs">
              <span>a • Analyser les objectifs et les modalités d'organisation d'un projet</span>
              <span>b • Planifier les activités</span>
              <span>c • Évaluer les indicateurs de suivi d'un projet et analyser les écarts</span>
            </div>
          </div>
          <div className="col-span-1 p-2 text-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="p-1 border-r border-black text-center">
                <span className="font-semibold">5. Mettre à disposition des utilisateurs un service informatique</span>
                <div className="grid grid-cols-1 gap-2 mt-2 text-xs">
                  <span>a • Réaliser les tests d'intégration et d'acceptation d'un service</span>
                  <span>b • Accompagner les utilisateurs dans la mise en place d'un service</span>
                </div>
              </div>
              <div className="p-1 text-center">
                <span className="font-semibold">6. Organiser son développement professionnel</span>
                <div className="grid grid-cols-1 gap-2 mt-2 text-xs">
                  <span>a • Mettre en place son environnement d'apprentissage personnel</span>
                  <span>b • Mettre en œuvre des outils et stratégies de veille informationnelle</span>
                  <span>c • Gérer son identité professionnelle</span>
                  <span>d • Développer son projet professionnel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Rows */}
        {/* Row 1 */}
        <div className="grid grid-cols-7 border-b border-black">
          <div className="col-span-1 p-2 border-r border-black">
            <span className="font-semibold">Projet JPO</span>
          </div>
          <div className="col-span-1 p-2 border-r border-black">
            <div className="text-sm">Réalisation en cours de formation</div>
            <div className="text-sm">
              23/02/24<br/>
              au<br/>
              15/03/24<br/>
              14/02/24
            </div>
          </div>
          <div className="col-span-1 p-2 border-r border-black">
            <span>a. Le truc de M.Hebrahoul</span>
          </div>
          <div className="col-span-1 p-2 border-r border-black">
            <span className="text-xs">a. "GLPI/Redmine/ Tickets" Voir plus profond à quoi ça sert</span>
          </div>
          <div className="col-span-1 p-2 border-r border-black">
            <span className="text-xs">a. L'image de l'entreprise sur les réseaux sociaux b. Site/Doc pour voir si on est en retard</span>
          </div>
          <div className="col-span-1 p-2 border-r border-black">
            <span className="text-xs">a. Un cahier des charges b. Excel de suivi des tâches c. Docs pour voir si on est en retard</span>
          </div>
          <div className="col-span-1 p-2">
            <span className="text-xs">a. Test avec les utilisateurs b. Les aider si c. Tutoriels/explication</span>
          </div>
        </div>
        
        {/* Row 2 */}
        <div className="grid grid-cols-7 border-b border-black">
          <div className="col-span-1 p-2 border-r border-black">
            <span className="font-semibold">B3 Crédit Céleste (cisco)</span>
          </div>
          <div className="col-span-1 p-2 border-r border-black">
            <div className="text-sm">
              au<br/>
              03/03/24
            </div>
          </div>
          <div className="col-span-1 p-2 border-r border-black"></div>
          <div className="col-span-1 p-2 border-r border-black"></div>
          <div className="col-span-1 p-2 border-r border-black"></div>
          <div className="col-span-1 p-2 border-r border-black"></div>
          <div className="col-span-1 p-2"></div>
        </div>
        
        {/* Row 3 */}
        <div className="grid grid-cols-7">
          <div className="col-span-1 p-2 border-r border-black">
            <span className="font-semibold">Projet Fournil</span>
          </div>
          <div className="col-span-1 p-2 border-r border-black">
            <div className="text-sm">
              12/04/24<br/>
              au
            </div>
          </div>
          <div className="col-span-1 p-2 border-r border-black"></div>
          <div className="col-span-1 p-2 border-r border-black"></div>
          <div className="col-span-1 p-2 border-r border-black"></div>
          <div className="col-span-1 p-2 border-r border-black"></div>
          <div className="col-span-1 p-2"></div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;