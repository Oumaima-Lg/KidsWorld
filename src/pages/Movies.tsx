import React from 'react';
import { Play, Star, Clock, Calendar, Award } from 'lucide-react';

const Movies = () => {
  const featuredMovies = [
    {
      title: 'Le Roi Lion',
      description: 'L\'épopée de Simba, le jeune lion qui doit reconquérir son royaume',
      year: '1994',
      duration: '88 min',
      rating: 5,
      studio: 'Disney',
      emoji: '🦁',
      color: 'from-yellow-500 to-orange-600',
      awards: ['Oscar', 'Golden Globe']
    },
    {
      title: 'Toy Story',
      description: 'Les aventures extraordinaires des jouets de Andy',
      year: '1995',
      duration: '81 min',
      rating: 5,
      studio: 'Pixar',
      emoji: '🤠',
      color: 'from-blue-500 to-green-500',
      awards: ['Oscar Special', 'Annie Award']
    },
    {
      title: 'La Reine des Neiges',
      description: 'Elsa et Anna dans une aventure magique au royaume d\'Arendelle',
      year: '2013',
      duration: '102 min',
      rating: 5,
      studio: 'Disney',
      emoji: '❄️',
      color: 'from-blue-400 to-purple-500',
      awards: ['Oscar', 'BAFTA']
    },
    {
      title: 'Les Indestructibles',
      description: 'Une famille de super-héros sauve le monde',
      year: '2004',
      duration: '115 min',
      rating: 5,
      studio: 'Pixar',
      emoji: '🦸‍♀️',
      color: 'from-red-500 to-orange-500',
      awards: ['Oscar', 'Annie Award']
    }
  ];

  const movieCategories = [
    {
      name: 'Disney Classiques',
      count: 58,
      emoji: '🏰',
      color: 'from-pink-400 to-purple-500',
      movies: ['Blanche-Neige', 'Cendrillon', 'La Petite Sirène', 'Aladdin']
    },
    {
      name: 'Pixar',
      count: 26,
      emoji: '🚀',
      color: 'from-blue-400 to-green-500',
      movies: ['Cars', 'Nemo', 'Monstres & Cie', 'Coco']
    },
    {
      name: 'DreamWorks',
      count: 42,
      emoji: '🐉',
      color: 'from-green-400 to-teal-500',
      movies: ['Shrek', 'Madagascar', 'Dragons', 'Trolls']
    },
    {
      name: 'Studio Ghibli',
      count: 22,
      emoji: '🌸',
      color: 'from-emerald-400 to-blue-500',
      movies: ['Totoro', 'Chihiro', 'Kiki', 'Ponyo']
    },
    {
      name: 'Illumination',
      count: 15,
      emoji: '🍌',
      color: 'from-yellow-400 to-orange-500',
      movies: ['Moi, moche et méchant', 'Les Minions', 'Pets', 'Sing']
    },
    {
      name: 'Films Familiaux',
      count: 34,
      emoji: '👨‍👩‍👧‍👦',
      color: 'from-purple-400 to-pink-500',
      movies: ['L\'Âge de Glace', 'Rio', 'Ferdinand', 'Moana']
    }
  ];

  const newReleases = [
    {
      title: 'Encanto',
      year: '2021',
      emoji: '🦋',
      description: 'La magie de la famille Madrigal'
    },
    {
      title: 'Luca',
      year: '2021',
      emoji: '🌊',
      description: 'Un été magique en Italie'
    },
    {
      title: 'Raya et le Dernier Dragon',
      year: '2021',
      emoji: '🐲',
      description: 'Une quête épique pour sauver le monde'
    },
    {
      title: 'Soul',
      year: '2020',
      emoji: '🎷',
      description: 'La musique de l\'âme'
    }
  ];

  const topGenres = [
    { name: 'Aventure', icon: '🗺️', percentage: 85 },
    { name: 'Comédie', icon: '😂', percentage: 72 },
    { name: 'Fantaisie', icon: '🦄', percentage: 68 },
    { name: 'Musical', icon: '🎵', percentage: 45 },
    { name: 'Action', icon: '💥', percentage: 38 },
    { name: 'Romance', icon: '💝', percentage: 25 }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            🍿 Cinéma Magique 🍿
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvre les plus beaux films d'animation ! Des classiques Disney aux créations Pixar,
            plonge dans des univers extraordinaires remplis de magie et d'aventures.
          </p>
        </div>

        {/* Movie of the Week */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              🌟 Film de la semaine 🌟
            </h2>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="text-9xl mb-4 text-center md:text-left">🦁</div>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    Le Roi Lion
                  </h3>
                  <p className="text-white/90 mb-6 text-lg">
                    Rejoins Simba dans son voyage extraordinaire pour devenir le roi
                    qu'il est destiné à être. Un classique intemporel !
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                    <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                      <Star className="h-5 w-5 text-yellow-300 mr-2" />
                      <span className="text-white font-semibold">5/5</span>
                    </div>
                    <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                      <Clock className="h-5 w-5 text-white mr-2" />
                      <span className="text-white">88 min</span>
                    </div>
                    <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                      <Calendar className="h-5 w-5 text-white mr-2" />
                      <span className="text-white">1994</span>
                    </div>
                    <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                      <Award className="h-5 w-5 text-white mr-2" />
                      <span className="text-white">Oscar</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="bg-white/20 hover:bg-white/30 rounded-2xl px-10 py-5 text-white font-bold text-2xl transition-colors flex items-center justify-center mx-auto mb-4">
                    <Play className="h-8 w-8 mr-3" />
                    Regarder maintenant
                  </button>
                  <p className="text-white/80 text-sm">
                    🎵 Avec les chansons "Hakuna Matata" et "Can You Feel the Love Tonight"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Movies */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🏆 Films Incontournables 🏆
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredMovies.map((movie, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${movie.color} rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-6xl">{movie.emoji}</div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-300 mr-1" />
                      <span className="text-white font-semibold">{movie.rating}/5</span>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">
                      {movie.studio}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{movie.title}</h3>
                <p className="text-white/90 mb-4">{movie.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/20 rounded-xl p-3 text-center">
                    <div className="text-white font-bold">{movie.year}</div>
                    <div className="text-white/80 text-sm">Année</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-3 text-center">
                    <div className="text-white font-bold">{movie.duration}</div>
                    <div className="text-white/80 text-sm">Durée</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {movie.awards.map((award, awardIndex) => (
                    <span
                      key={awardIndex}
                      className="bg-yellow-500/80 px-3 py-1 rounded-full text-white text-sm font-semibold"
                    >
                      🏆 {award}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-white/20 hover:bg-white/30 rounded-xl py-3 text-white font-semibold transition-colors flex items-center justify-center">
                  <Play className="h-5 w-5 mr-2" />
                  Regarder le film
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Movie Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🎬 Studios et Collections 🎬
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movieCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.color} rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{category.emoji}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-white/90 font-semibold">{category.count} films disponibles</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <p className="text-white font-semibold text-sm">Films populaires :</p>
                  <div className="flex flex-wrap gap-2">
                    {category.movies.map((movie, movieIndex) => (
                      <span
                        key={movieIndex}
                        className="bg-white/20 rounded-full px-3 py-1 text-white text-xs"
                      >
                        {movie}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-white/20 hover:bg-white/30 rounded-xl py-3 text-white font-semibold transition-colors">
                  Explorer la collection →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* New Releases */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🆕 Nouveautés 🆕
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newReleases.map((movie, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors cursor-pointer"
              >
                <div className="text-5xl mb-4">{movie.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2">{movie.title}</h3>
                <p className="text-white/80 text-sm mb-3">{movie.description}</p>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full text-white text-xs font-semibold">
                  {movie.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Genre Statistics */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            📊 Genres Préférés 📊
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topGenres.map((genre, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{genre.icon}</span>
                      <span className="text-white font-semibold">{genre.name}</span>
                    </div>
                    <span className="text-white font-bold">{genre.percentage}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-pink-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${genre.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Movie Theater Experience */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            🎭 Expérience Cinéma à la Maison 🎭
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🍿</div>
              <h3 className="text-lg font-bold text-white mb-2">Pop-corn Magique</h3>
              <p className="text-white/90 text-sm">
                Prépare ton pop-corn préféré pour l'expérience complète !
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛋️</div>
              <h3 className="text-lg font-bold text-white mb-2">Confort Optimal</h3>
              <p className="text-white/90 text-sm">
                Installe-toi confortablement avec tes coussins favoris.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg font-bold text-white mb-2">En Famille</h3>
              <p className="text-white/90 text-sm">
                Partage ces moments magiques avec toute la famille.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-lg font-bold text-white mb-2">Souvenirs Inoubliables</h3>
              <p className="text-white/90 text-sm">
                Crée des souvenirs qui dureront toute une vie !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;