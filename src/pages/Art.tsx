import React from 'react';
import { Palette, Brush, Pencil, Eraser } from 'lucide-react';

const Art = () => {
  const characters = [
    {
      name: 'Mickey Mouse',
      difficulty: 'Facile',
      time: '15 min',
      steps: 5,
      color: 'from-red-400 to-pink-500',
      emoji: '🐭'
    },
    {
      name: 'Pikachu',
      difficulty: 'Facile',
      time: '20 min',
      steps: 6,
      color: 'from-yellow-400 to-orange-500',
      emoji: '⚡'
    },
    {
      name: 'Elsa (Frozen)',
      difficulty: 'Moyen',
      time: '35 min',
      steps: 8,
      color: 'from-blue-400 to-purple-500',
      emoji: '❄️'
    },
    {
      name: 'Spiderman',
      difficulty: 'Difficile',
      time: '45 min',
      steps: 10,
      color: 'from-red-500 to-blue-500',
      emoji: '🕷️'
    }
  ];

  const techniques = [
    {
      title: 'Dessin au crayon',
      description: 'Apprends les techniques de base du dessin',
      icon: '✏️',
      color: 'from-gray-400 to-gray-600'
    },
    {
      title: 'Coloriage magique',
      description: 'Découvre comment utiliser les couleurs',
      icon: '🌈',
      color: 'from-pink-400 to-purple-500'
    },
    {
      title: 'Dessin numérique',
      description: 'Crée tes œuvres sur tablette',
      icon: '📱',
      color: 'from-blue-400 to-green-500'
    },
    {
      title: 'Peinture à l\'eau',
      description: 'Techniques de peinture pour débutants',
      icon: '🎨',
      color: 'from-green-400 to-blue-500'
    }
  ];

  const supplies = [
    { name: 'Crayons de couleur', icon: '🖍️', description: 'Pour colorier tes dessins' },
    { name: 'Feutres', icon: '🖊️', description: 'Pour des traits nets et précis' },
    { name: 'Papier spécial', icon: '📄', description: 'Le bon papier pour dessiner' },
    { name: 'Gomme magique', icon: '🧽', description: 'Pour corriger tes erreurs' }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            🎨 Atelier d'Art 🎨
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Apprends à dessiner tes personnages préférés ! Suis nos tutoriels étape par étape
            et deviens un vrai petit artiste.
          </p>
        </div>

        {/* Featured Drawing */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              🌟 Dessin du jour 🌟
            </h2>
            <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="text-8xl mb-4 text-center">🦄</div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Licorne Magique
                  </h3>
                  <p className="text-white/90 mb-6">
                    Apprends à dessiner une licorne colorée avec une crinière arc-en-ciel !
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <span className="bg-white/20 px-4 py-2 rounded-full text-white">
                      ⏰ 25 min
                    </span>
                    <span className="bg-white/20 px-4 py-2 rounded-full text-white">
                      📊 Facile
                    </span>
                    <span className="bg-white/20 px-4 py-2 rounded-full text-white">
                      👣 7 étapes
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <button className="bg-white/20 hover:bg-white/30 rounded-2xl px-8 py-4 text-white font-bold text-xl transition-colors">
                    Commencer à dessiner →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Character Tutorials */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            👥 Apprends à dessiner tes héros 👥
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {characters.map((character, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${character.color} rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{character.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {character.name}
                  </h3>
                  <div className="space-y-2 mb-6">
                    <div className="bg-white/20 rounded-full px-3 py-1 text-white text-sm">
                      📊 {character.difficulty}
                    </div>
                    <div className="bg-white/20 rounded-full px-3 py-1 text-white text-sm">
                      ⏰ {character.time}
                    </div>
                    <div className="bg-white/20 rounded-full px-3 py-1 text-white text-sm">
                      👣 {character.steps} étapes
                    </div>
                  </div>
                  <button className="bg-white/20 hover:bg-white/30 rounded-xl px-6 py-2 text-white font-semibold transition-colors">
                    Dessiner →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Art Techniques */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🖌️ Techniques d'Art 🖌️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techniques.map((technique, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${technique.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-5xl mb-4">{technique.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{technique.title}</h3>
                <p className="text-white/90 text-sm">{technique.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Art Supplies */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🎒 Matériel d'Artiste 🎒
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supplies.map((supply, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">{supply.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{supply.name}</h3>
                <p className="text-white/80 text-sm">{supply.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            🖼️ Galerie des Petits Artistes 🖼️
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['🦋', '🌺', '🐱', '🌈', '🏰', '🚀', '🎈', '⭐'].map((emoji, index) => (
              <div
                key={index}
                className="bg-white/20 rounded-2xl p-6 text-center hover:bg-white/30 transition-colors cursor-pointer"
              >
                <div className="text-4xl mb-2">{emoji}</div>
                <p className="text-white text-sm">Œuvre #{index + 1}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-white/90 mb-4">
              Partage tes créations avec nous !
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-2xl px-8 py-3 text-white font-bold transition-colors">
              📤 Télécharger mon dessin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;