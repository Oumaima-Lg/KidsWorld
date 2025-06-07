import React from 'react';
import { BookOpen, Calculator, Globe, Palette, Music, Star } from 'lucide-react';

const Lessons = () => {
  const subjects = [
    {
      title: 'Mathématiques',
      description: 'Apprends les chiffres en t\'amusant avec tes héros',
      icon: Calculator,
      lessons: 45,
      color: 'from-blue-400 to-blue-600',
      emoji: '🔢',
      topics: ['Addition', 'Soustraction', 'Formes', 'Nombres']
    },
    {
      title: 'Français',
      description: 'Découvre les lettres et forme tes premiers mots',
      icon: BookOpen,
      lessons: 38,
      color: 'from-green-400 to-green-600',
      emoji: '📝',
      topics: ['Alphabet', 'Lecture', 'Écriture', 'Vocabulaire']
    },
    {
      title: 'Sciences',
      description: 'Explore le monde qui t\'entoure avec curiosité',
      icon: Globe,
      lessons: 29,
      color: 'from-purple-400 to-purple-600',
      emoji: '🔬',
      topics: ['Nature', 'Animaux', 'Espace', 'Corps humain']
    },
    {
      title: 'Art créatif',
      description: 'Expression artistique et créativité sans limites',
      icon: Palette,
      lessons: 33,
      color: 'from-pink-400 to-pink-600',
      emoji: '🎨',
      topics: ['Dessin', 'Coloriage', 'Bricolage', 'Création']
    },
    {
      title: 'Musique',
      description: 'Découvre les sons, rythmes et mélodies',
      icon: Music,
      lessons: 25,
      color: 'from-yellow-400 to-orange-500',
      emoji: '🎵',
      topics: ['Chansons', 'Instruments', 'Rythme', 'Danse']
    },
    {
      title: 'Anglais',
      description: 'Premiers mots en anglais avec tes personnages favoris',
      icon: Globe,
      lessons: 31,
      color: 'from-red-400 to-red-600',
      emoji: '🇬🇧',
      topics: ['Mots simples', 'Couleurs', 'Animaux', 'Salutations']
    }
  ];

  const featuredLessons = [
    {
      title: 'Compter avec les Trolls',
      subject: 'Mathématiques',
      duration: '15 min',
      age: '4-6 ans',
      emoji: '🧚‍♀️',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'L\'Alphabet de Mickey',
      subject: 'Français',
      duration: '20 min',
      age: '3-5 ans',
      emoji: '🐭',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Les Animaux de la Jungle',
      subject: 'Sciences',
      duration: '12 min',
      age: '5-7 ans',
      emoji: '🦁',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Chanter avec Moana',
      subject: 'Musique',
      duration: '18 min',
      age: '4-8 ans',
      emoji: '🌺',
      color: 'from-orange-500 to-pink-500'
    }
  ];

  const achievements = [
    { title: 'Premier pas', description: 'Première leçon terminée', emoji: '👶', unlocked: true },
    { title: 'Petit génie', description: '10 leçons de maths', emoji: '🧠', unlocked: true },
    { title: 'Lecteur débutant', description: '5 leçons de français', emoji: '📖', unlocked: false },
    { title: 'Artiste en herbe', description: '3 créations artistiques', emoji: '🎨', unlocked: false },
    { title: 'Explorateur', description: '15 leçons de sciences', emoji: '🔍', unlocked: false },
    { title: 'Musicien', description: '5 chansons apprises', emoji: '🎼', unlocked: false }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            📚 École Magique 📚
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Apprends en t'amusant ! Des leçons interactives avec tes personnages préférés
            pour découvrir le monde qui t'entoure.
          </p>
        </div>

        {/* Progress Dashboard */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              🌟 Ton Progression 🌟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🏆</div>
                <div className="text-2xl font-bold text-white">12</div>
                <p className="text-white/80">Leçons terminées</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-white">36</div>
                <p className="text-white/80">Étoiles gagnées</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-white">4</div>
                <p className="text-white/80">Objectifs atteints</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🔥</div>
                <div className="text-2xl font-bold text-white">7</div>
                <p className="text-white/80">Jours de suite</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Lessons */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            ✨ Leçons du jour ✨
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredLessons.map((lesson, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${lesson.color} rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{lesson.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{lesson.title}</h3>
                  <p className="text-white/90 text-sm mb-4">{lesson.subject}</p>
                  <div className="space-y-2 mb-6">
                    <div className="bg-white/20 rounded-full px-3 py-1 text-white text-sm">
                      ⏰ {lesson.duration}
                    </div>
                    <div className="bg-white/20 rounded-full px-3 py-1 text-white text-sm">
                      👶 {lesson.age}
                    </div>
                  </div>
                  <button className="bg-white/20 hover:bg-white/30 rounded-xl px-6 py-2 text-white font-semibold transition-colors">
                    Commencer →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subjects */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            📖 Matières d'apprentissage 📖
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${subject.color} rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{subject.emoji}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{subject.title}</h3>
                  <p className="text-white/90 mb-4">{subject.description}</p>
                  <div className="bg-white/20 rounded-full px-4 py-2 inline-block">
                    <span className="text-white font-semibold">{subject.lessons} leçons</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <p className="text-white font-semibold text-sm">Sujets couverts :</p>
                  <div className="flex flex-wrap gap-2">
                    {subject.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="bg-white/20 rounded-full px-3 py-1 text-white text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-white/20 hover:bg-white/30 rounded-xl py-3 text-white font-semibold transition-colors">
                  Explorer →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🏆 Tes Récompenses 🏆
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`rounded-2xl p-4 text-center transition-all ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg hover:scale-105'
                    : 'bg-white/10 backdrop-blur-sm opacity-50'
                }`}
              >
                <div className={`text-3xl mb-2 ${achievement.unlocked ? '' : 'grayscale'}`}>
                  {achievement.emoji}
                </div>
                <h3 className={`text-sm font-bold mb-1 ${
                  achievement.unlocked ? 'text-white' : 'text-white/60'
                }`}>
                  {achievement.title}
                </h3>
                <p className={`text-xs ${
                  achievement.unlocked ? 'text-white/90' : 'text-white/40'
                }`}>
                  {achievement.description}
                </p>
                {achievement.unlocked && (
                  <div className="mt-2">
                    <span className="bg-white/20 rounded-full px-2 py-1 text-white text-xs">
                      ✓ Débloqué
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Learning Tips */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            💡 Conseils d'apprentissage 💡
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-white mb-2">Prends ton temps</h3>
              <p className="text-white/90">
                Apprends à ton rythme, il n'y a pas de pression !
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Répète pour retenir</h3>
              <p className="text-white/90">
                N'hésite pas à refaire les leçons pour bien comprendre.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-2">Amuse-toi bien</h3>
              <p className="text-white/90">
                L'apprentissage doit toujours être amusant et joyeux !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;