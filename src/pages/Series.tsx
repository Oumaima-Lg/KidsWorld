import React from 'react';
import { Play, Star, Clock, Users } from 'lucide-react';

const Series = () => {
  const popularSeries = [
    {
      title: 'Pat Patrouille',
      description: 'Les aventures héroïques des chiots sauveteurs',
      rating: 5,
      episodes: 156,
      duration: '22 min',
      ageGroup: '3-7 ans',
      emoji: '🐕‍🦺',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Peppa Pig',
      description: 'Les aventures quotidiennes de Peppa et sa famille',
      rating: 5,
      episodes: 320,
      duration: '5 min',
      ageGroup: '2-6 ans',
      emoji: '🐷',
      color: 'from-pink-400 to-pink-600'
    },
    {
      title: 'Les Pyjamasques',
      description: 'Trois amis deviennent des super-héros la nuit',
      rating: 4,
      episodes: 130,
      duration: '24 min',
      ageGroup: '4-8 ans',
      emoji: '🦸',
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Miraculous',
      description: 'Ladybug et Chat Noir protègent Paris',
      rating: 5,
      episodes: 104,
      duration: '22 min',
      ageGroup: '6-12 ans',
      emoji: '🐞',
      color: 'from-red-400 to-red-600'
    }
  ];

  const categories = [
    {
      name: 'Aventure',
      icon: '🗺️',
      count: 45,
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Comédie',
      icon: '😂',
      count: 62,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Éducatif',
      icon: '📚',
      count: 38,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Fantastique',
      icon: '🦄',
      count: 29,
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Super-héros',
      icon: '💪',
      count: 24,
      color: 'from-red-400 to-pink-500'
    },
    {
      name: 'Animaux',
      icon: '🐾',
      count: 51,
      color: 'from-teal-400 to-green-500'
    }
  ];

  const newEpisodes = [
    { title: 'La Grande Course', series: 'Pat Patrouille', emoji: '🏁' },
    { title: 'Le Jardin Magique', series: 'Peppa Pig', emoji: '🌻' },
    { title: 'Mission Nocturne', series: 'Les Pyjamasques', emoji: '🌙' },
    { title: 'Le Mystère du Papillon', series: 'Miraculous', emoji: '🦋' }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            📺 Séries Magiques 📺
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvre tes séries préférées ! Aventures, rires, apprentissage...
            Il y en a pour tous les goûts et tous les âges.
          </p>
        </div>

        {/* Featured Series */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              🌟 Série de la semaine 🌟
            </h2>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="text-8xl mb-4 text-center md:text-left">🐕‍🦺</div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Pat Patrouille
                  </h3>
                  <p className="text-white/90 mb-6">
                    Rejoins Ryder et ses héroïques chiots sauveteurs dans leurs
                    incroyables missions de sauvetage !
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                    <div className="flex items-center bg-white/20 px-3 py-2 rounded-full">
                      <Star className="h-4 w-4 text-yellow-300 mr-1" />
                      <span className="text-white">5/5</span>
                    </div>
                    <div className="flex items-center bg-white/20 px-3 py-2 rounded-full">
                      <Play className="h-4 w-4 text-white mr-1" />
                      <span className="text-white">156 épisodes</span>
                    </div>
                    <div className="flex items-center bg-white/20 px-3 py-2 rounded-full">
                      <Users className="h-4 w-4 text-white mr-1" />
                      <span className="text-white">3-7 ans</span>
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

        {/* Popular Series */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🔥 Séries les plus populaires 🔥
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularSeries.map((series, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${series.color} rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-6xl">{series.emoji}</div>
                  <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-300 mr-1" />
                    <span className="text-white font-semibold">{series.rating}/5</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{series.title}</h3>
                <p className="text-white/90 mb-4">{series.description}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="bg-white/20 rounded-xl p-3 text-center">
                    <div className="text-white font-bold">{series.episodes}</div>
                    <div className="text-white/80 text-xs">Épisodes</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-3 text-center">
                    <div className="text-white font-bold">{series.duration}</div>
                    <div className="text-white/80 text-xs">Durée</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-3 text-center">
                    <div className="text-white font-bold">{series.ageGroup}</div>
                    <div className="text-white/80 text-xs">Âge</div>
                  </div>
                </div>
                
                <button className="w-full bg-white/20 hover:bg-white/30 rounded-xl py-3 text-white font-semibold transition-colors flex items-center justify-center">
                  <Play className="h-5 w-5 mr-2" />
                  Regarder
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🎭 Catégories 🎭
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.count} séries</p>
              </div>
            ))}
          </div>
        </div>

        {/* New Episodes */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🆕 Nouveaux épisodes 🆕
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newEpisodes.map((episode, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <div className="text-5xl mb-4 text-center">{episode.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2">{episode.title}</h3>
                <p className="text-white/80 text-sm mb-4">{episode.series}</p>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl py-2 text-white font-semibold transition-colors">
                  Nouveau !
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            📊 Statistiques Amusantes 📊
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎬</div>
              <div className="text-3xl font-bold text-white mb-2">247</div>
              <p className="text-white/90">Séries disponibles</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⏰</div>
              <div className="text-3xl font-bold text-white mb-2">5,832</div>
              <p className="text-white/90">Épisodes au total</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">😊</div>
              <div className="text-3xl font-bold text-white mb-2">1M+</div>
              <p className="text-white/90">Enfants heureux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Series;