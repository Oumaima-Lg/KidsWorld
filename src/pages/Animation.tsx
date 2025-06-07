import React from 'react';
import { Play, Pause, SkipForward, SkipBack, Star } from 'lucide-react';

const Animation = () => {
  const tutorials = [
    {
      title: 'Premiers pas en animation',
      description: 'Apprends les bases de l\'animation avec des exercices simples',
      duration: '15 min',
      level: 'Débutant',
      thumbnail: '🎬',
      color: 'from-blue-400 to-purple-500'
    },
    {
      title: 'Animation de personnages',
      description: 'Découvre comment donner vie à tes personnages préférés',
      duration: '25 min',
      level: 'Intermédiaire',
      thumbnail: '🤖',
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'Effets spéciaux magiques',
      description: 'Crée des effets spectaculaires comme un vrai magicien',
      duration: '20 min',
      level: 'Avancé',
      thumbnail: '✨',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Animation 2D classique',
      description: 'Les techniques traditionnelles des grands studios',
      duration: '30 min',
      level: 'Intermédiaire',
      thumbnail: '🎭',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const tools = [
    { name: 'Crayon magique', icon: '✏️', description: 'Pour dessiner tes premières animations' },
    { name: 'Table lumineuse', icon: '💡', description: 'Pour voir à travers tes dessins' },
    { name: 'Flipbook', icon: '📖', description: 'Pour créer des animations simples' },
    { name: 'Ordinateur', icon: '💻', description: 'Pour les animations numériques' }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            🎬 Animation Magique 🎬
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvre les secrets de l'animation ! Apprends à créer tes propres dessins animés
            et donne vie à tes personnages préférés.
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              🌟 Vidéo du jour 🌟
            </h2>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-center">
              <div className="text-8xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Comment Mickey Mouse prend vie
              </h3>
              <div className="flex justify-center space-x-4 mb-6">
                <button className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors">
                  <SkipBack className="h-6 w-6 text-white" />
                </button>
                <button className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors">
                  <Play className="h-8 w-8 text-white" />
                </button>
                <button className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors">
                  <SkipForward className="h-6 w-6 text-white" />
                </button>
              </div>
              <p className="text-white/90">Durée : 12 minutes</p>
            </div>
          </div>
        </div>

        {/* Tutorials */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            📚 Tutoriels d'Animation 📚
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${tutorial.color} rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{tutorial.thumbnail}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-white/90 mb-4">{tutorial.description}</p>
                </div>
                
                <div className="flex justify-between items-center bg-white/20 rounded-2xl p-4">
                  <div className="text-white">
                    <div className="font-semibold">⏰ {tutorial.duration}</div>
                    <div className="text-sm">📊 {tutorial.level}</div>
                  </div>
                  <button className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors">
                    <Play className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🛠️ Outils d'Animation 🛠️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-white/80 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            🤓 Le savais-tu ? 🤓
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <p className="text-white">
                Il faut <strong>24 images</strong> pour créer 1 seconde d'animation !
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏰</div>
              <p className="text-white">
                Le premier dessin animé de <strong>Disney</strong> était Steamboat Willie en 1928 !
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <p className="text-white">
                Toy Story a pris <strong>4 ans</strong> à créer avec des ordinateurs !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;