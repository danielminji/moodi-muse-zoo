
import React from 'react';
import { moods } from '../data/moods';
import { Mood } from '../types/mood';

interface MoodSelectorProps {
  onMoodSelect: (mood: Mood) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ onMoodSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-200 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          🧸 MoodiZoo
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          How are you feeling today? Pick your mood and meet your emotional support buddy 🎧
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {moods.map((mood, index) => (
          <button
            key={mood.id}
            onClick={() => onMoodSelect(mood)}
            className={`
              group relative overflow-hidden
              bg-white bg-opacity-80 backdrop-blur-sm
              hover:bg-opacity-90 transition-all duration-300
              rounded-3xl p-8 md:p-10
              border-2 border-white border-opacity-50
              hover:border-opacity-80
              shadow-lg hover:shadow-xl
              transform hover:scale-105 hover:-translate-y-2
              animate-scale-in
            `}
            style={{ 
              animationDelay: `${index * 100}ms`,
              background: `linear-gradient(135deg, ${mood.colors.primary}20, ${mood.colors.secondary}20)`
            }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {mood.emoji}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {mood.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {mood.description}
              </p>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
          </button>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 text-sm">
          ✨ Each mood comes with a curated Spotify playlist and your personal support pet
        </p>
      </div>
    </div>
  );
};

export default MoodSelector;
