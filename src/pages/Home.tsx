import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Palette, Book, Tv, Film, Star } from 'lucide-react';

const Home = () => {
  const categories = [
    {
      title: 'Animation',
      description: 'Découvre comment créer tes propres animations',
      icon: Play,
      path: '/animation',
      color: 'from-blue-400 to-purple-500',
      emoji: '🎬'
    },
    {
      title: 'Art',
      description: 'Apprends à dessiner tes personnages préférés',
      icon: Palette,
      path: '/art',
      color: 'from-pink-400 to-red-500',
      emoji: '🎨'
    },
    {
      title: 'Séries',
      description: 'Explore tes séries animées favorites',
      icon: Tv,
      path: '/series',
      color: 'from-green-400 to-blue-500',
      emoji: '📺'
    },
    {
      title: 'Leçons',
      description: 'Apprends en t\'amusant avec nos cours',
      icon: Book,
      path: '/lessons',
      color: 'from-yellow-400 to-orange-500',
      emoji: '📚'
    },
    {
      title: 'Cartoons',
      description: 'Découvre des cartoons amusants et colorés',
      icon: Star,
      path: '/cartoons',
      color: 'from-purple-400 to-pink-500',
      emoji: '🤡'
    },
    {
      title: 'Films',
      description: 'Regarde les meilleurs films d\'animation',
      icon: Film,
      path: '/movies',
      color: 'from-teal-400 to-green-500',
      emoji: '🍿'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-bounce">
            🌈 Bienvenue 🌈
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 font-medium">
            Dans le monde magique des cartoons !
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-12">
            <p className="text-xl text-white font-medium leading-relaxed">
              Explore, apprends et amuse-toi avec tes personnages préférés.
              Découvre l'art de l'animation, dessine, regarde tes séries favorites et bien plus encore !
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Que veux-tu découvrir ? ✨
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.path}
                to={category.path}
                className="group transform hover:scale-105 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${category.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300`}>
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-pulse">
                      {category.emoji}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {category.title}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {category.description}
                    </p>
                    <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 inline-block group-hover:bg-white/30 transition-colors">
                      <span className="text-white font-semibold">Découvrir →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              🎉 Prêt pour l'aventure ? 🎉
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Chaque page est remplie de surprises et d'activités amusantes !
            </p>
            <div className="flex justify-center space-x-4 text-4xl animate-bounce">
              <span>🎨</span>
              <span>🎬</span>
              <span>📚</span>
              <span>🌟</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;