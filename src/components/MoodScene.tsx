
import React, { useState, useEffect } from 'react';
import { Mood } from '../types/mood';

interface MoodSceneProps {
  mood: Mood;
  onTryAgain: () => void;
}

const MoodScene: React.FC<MoodSceneProps> = ({ mood, onTryAgain }) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showQuote, setShowQuote] = useState(true);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setShowQuote(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % mood.pet.quotes.length);
        setShowQuote(true);
      }, 500);
    }, 8000);

    return () => clearInterval(quoteInterval);
  }, [mood.pet.quotes.length]);

  const spotifyEmbedUrl = `https://open.spotify.com/embed/playlist/${mood.playlist.spotifyId}?utm_source=generator&theme=0`;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${mood.colors.background} relative overflow-hidden`}>
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="animate-pulse">
          {mood.scene.animation === 'gentle-rain' && (
            <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-transparent opacity-50"></div>
          )}
          {mood.scene.animation === 'pulsing-energy' && (
            <div className="absolute inset-0 bg-gradient-radial from-red-400 to-transparent opacity-40 animate-pulse"></div>
          )}
          {mood.scene.animation === 'gentle-drift' && (
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-bounce"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + i * 10}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '3s'
                  }}
                ></div>
              ))}
            </div>
          )}
          {mood.scene.animation === 'gentle-shimmer' && (
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-teal-200 opacity-30 animate-pulse"></div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={onTryAgain}
            className="px-6 py-3 bg-white bg-opacity-80 backdrop-blur-sm rounded-full text-gray-800 font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            ← Try Another Mood
          </button>
          <div className="text-right">
            <h1 className="text-2xl font-bold text-gray-800">
              {mood.emoji} {mood.name} Mood
            </h1>
            <p className="text-gray-600">{mood.description}</p>
          </div>
        </div>

        {/* Main Scene */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          {/* Pet Section */}
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <div className="text-8xl mb-4 animate-bounce" style={{ animationDuration: '2s' }}>
                {mood.pet.image}
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Meet {mood.pet.name}
              </h2>
              <p className="text-gray-600 italic">
                Your {mood.pet.personality} companion
              </p>
            </div>

            {/* Quote Bubble */}
            <div className="relative">
              <div className={`
                bg-gradient-to-r from-gray-100 to-gray-50
                rounded-2xl p-6 shadow-inner
                transform transition-all duration-500
                ${showQuote ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}
              `}>
                <div className="text-lg text-gray-800 leading-relaxed text-center">
                  "{mood.pet.quotes[currentQuote]}"
                </div>
              </div>
              {/* Speech bubble tail */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-100 rotate-45"></div>
            </div>

            <div className="mt-6 text-center">
              <div className="flex justify-center space-x-2">
                {mood.pet.quotes.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentQuote ? mood.colors.primary : 'bg-gray-300'
                    }`}
                    style={{
                      backgroundColor: index === currentQuote ? mood.colors.primary : undefined
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Spotify Section */}
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                🎧 Your Mood Playlist
              </h3>
              <p className="text-gray-600">
                {mood.playlist.name}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {mood.playlist.description}
              </p>
            </div>

            <div className="aspect-square w-full max-w-md mx-auto">
              <iframe
                src={spotifyEmbedUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-2xl shadow-lg"
              ></iframe>
            </div>

            <div className="mt-6 text-center">
              <a
                href={`https://open.spotify.com/playlist/${mood.playlist.spotifyId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Open in Spotify
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            ✨ Feeling different? Try another mood anytime • Made with 💙 for your emotional wellbeing
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoodScene;
