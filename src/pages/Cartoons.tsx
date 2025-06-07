import React from 'react';
import { Play, Heart, Smile, Star, Clock } from 'lucide-react';

const Cartoons = () => {
  const cartoons = [
    {
      title: 'Tom et Jerry',
      description: 'Les aventures éternelles du chat et de la souris',
      year: '1940',
      episodes: 164,
      rating: 5,
      genre: 'Comédie',
      emoji: '🐱🐭',
      color: 'from-blue-400 to-blue-600',
      isClassic: true
    },
    {
      title: 'Looney Tunes',
      description: 'Bugs Bunny, Daffy Duck et toute la bande',
      year: '1930',
      episodes: 1000,
      rating: 5,
      genre: 'Comédie',
      emoji: '🐰🦆',
      color: 'from-orange-400 to-red-500',
      isClassic: true
    },
    {
      title: 'Les Aristochats',
      description: 'Une famille de chats aristocrates à Paris',
      year: '1970',
      episodes: 52,
      rating: 4,
      genre: 'Aventure',
      emoji: '🐾👑',
      color: 'from-pink-400 to-purple-500',
      isClassic: true
    },
    {
      title: 'Scooby-Doo',
      description: 'Mystères et aventures avec le chien détective',
      year: '1969',
      episodes: 300,
      rating: 4,
      genre: 'Mystère',
      emoji: '🐕🔍',
      color: 'from-green-400 to-teal-500',
      isClassic: true
    },
    {
      title: 'Les Pierrafeu',
      description: 'La famille préhistorique la plus célèbre',
      year: '1960',
      episodes: 166,
      rating: 4,
      genre: 'Famille',
      emoji: '🦕🏠',
      color: 'from-yellow-400 to-orange-500',
      isClassic: true
    },
    {
      title: 'Popeye',
      description: 'Le marin le plus fort grâce aux épinards',
      year: '1929',
      episodes: 234,
      rating: 4,
      genre: 'Aventure',
      emoji: '⚓💪',
      color: 'from-teal-400 to-blue-500',
      isClassic: true
    }
  ];

  const modernCartoons = [
    {
      title: 'Adventure Time',
      description: 'Les aventures fantastiques de Finn et Jake',
      emoji: '🗡️🐕',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Steven Universe',
      description: 'Un garçon et ses amies Crystal Gems',
      emoji: '💎⭐',
      color: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Gravity Falls',
      description: 'Mystères étranges dans une petite ville',
      emoji: '🌲🔍',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'We Bare Bears',
      description: 'Trois ours qui vivent des aventures amusantes',
      emoji: '🐻❄️',
      color: 'from-blue-500 to-teal-500'
    }
  ];

  const characters = [
    { name: 'Mickey Mouse', emoji: '🐭', color: 'from-red-400 to-pink-500' },
    { name: 'Bugs Bunny', emoji: '🐰', color: 'from-orange-400 to-yellow-500' },
    { name: 'Tom', emoji: '🐱', color: 'from-gray-400 to-blue-500' },
    { name: 'Scooby-Doo', emoji: '🐕', color: 'from-brown-400 to-yellow-600' },
    { name: 'Popeye', emoji: '⚓', color: 'from-blue-400 to-teal-500' },
    { name: 'Tweety', emoji: '🐥', color: 'from-yellow-400 to-orange-500' }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            🤡 Monde des Cartoons 🤡
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Plonge dans l'univers coloré et amusant des cartoons ! Des classiques intemporels
            aux créations modernes, découvre tous tes personnages préférés.
          </p>
        </div>

        {/* Featured Cartoon */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              🌟 Cartoon vedette 🌟
            </h2>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="text-8xl mb-4 text-center md:text-left">🐱🐭</div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Tom et Jerry
                  </h3>
                  <p className="text-white/90 mb-6">
                    Redécouvre les aventures hilarantes du chat Tom qui court
                    après la petite souris Jerry ! Un classique intemporel.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                    <div className="flex items-center bg-white/20 px-3 py-2 rounded-full">
                      <Star className="h-4 w-4 text-yellow-300 mr-1" />
                      <span className="text-white">5/5</span>
                    </div>
                    <div className="flex items-center bg-white/20 px-3 py-2 rounded-full">
                      <Play className="h-4 w-4 text-white mr-1" />
                      <span className="text-white">164 épisodes</span>
                    </div>
                    <div className="flex items-center bg-white/20 px-3 py-2 rounded-full">
                      <Clock className="h-4 w-4 text-white mr-1" />
                      <span className="text-white">Depuis 1940</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="bg-white/20 hover:bg-white/30 rounded-2xl px-8 py-4 text-white font-bold text-xl transition-colors flex items-center justify-center mx-auto">
                    <Play className="h-6 w-6 mr-2" />
                    Regarder maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Classic Cartoons */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            👴 Cartoons Classiques 👴
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cartoons.map((cartoon, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${cartoon.color} rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{cartoon.emoji}</div>
                  <div className="flex flex-col items-end space-y-1">
                    <div className="flex items-center bg-white/20 px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 text-yellow-300 mr-1" />
                      <span className="text-white text-sm">{cartoon.rating}/5</span>
                    </div>
                    {cartoon.isClassic && (
                      <span className="bg-yellow-500/80 px-2 py-1 rounded-full text-white text-xs font-bold">
                        Classique
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{cartoon.title}</h3>
                <p className="text-white/90 text-sm mb-4">{cartoon.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/20 rounded-xl p-2 text-center">
                    <div className="text-white font-bold text-sm">{cartoon.year}</div>
                    <div className="text-white/80 text-xs">Année</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-2 text-center">
                    <div className="text-white font-bold text-sm">{cartoon.episodes}</div>
                    <div className="text-white/80 text-xs">Épisodes</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">
                    {cartoon.genre}
                  </span>
                  <button className="bg-white/20 hover:bg-white/30 rounded-xl px-4 py-2 text-white font-semibold transition-colors">
                    <Play className="h-4 w-4 inline mr-1" />
                    Voir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Cartoons */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🆕 Cartoons Modernes 🆕
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modernCartoons.map((cartoon, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${cartoon.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-5xl mb-4">{cartoon.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-3">{cartoon.title}</h3>
                <p className="text-white/90 text-sm mb-4">{cartoon.description}</p>
                <button className="bg-white/20 hover:bg-white/30 rounded-xl px-4 py-2 text-white font-semibold transition-colors text-sm">
                  Découvrir →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite Characters */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            ❤️ Personnages Favoris ❤️
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {characters.map((character, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${character.color} rounded-2xl p-4 text-center hover:scale-110 transition-transform cursor-pointer`}
              >
                <div className="text-4xl mb-2">{character.emoji}</div>
                <h3 className="text-white font-bold text-sm">{character.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Activities */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🎯 Activités Amusantes 🎯
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-bold text-white mb-2">Coloriages</h3>
              <p className="text-white/80 text-sm">Colorier tes personnages préférés</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">🧩</div>
              <h3 className="text-lg font-bold text-white mb-2">Puzzles</h3>
              <p className="text-white/80 text-sm">Reconstituer des images de cartoons</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-lg font-bold text-white mb-2">Chansons</h3>
              <p className="text-white/80 text-sm">Écouter les thèmes musicaux</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-lg font-bold text-white mb-2">Jeux</h3>
              <p className="text-white/80 text-sm">Jouer avec tes héros favoris</p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            🤓 Savais-tu que... ? 🤓
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎬</div>
              <p className="text-white">
                <strong>Mickey Mouse</strong> était à l'origine appelé Mortimer !
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🥕</div>
              <p className="text-white">
                <strong>Bugs Bunny</strong> mange 25 tonnes de carottes par an dans les dessins animés !
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💪</div>
              <p className="text-white">
                <strong>Popeye</strong> a popularisé la consommation d'épinards chez les enfants !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartoons;