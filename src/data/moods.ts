import { Mood } from '../types/mood';

export const moods: Mood[] = [
  {
    id: 'sad',
    name: 'Sad',
    emoji: '😢',
    description: 'Feeling down and need comfort',
    pet: {
      name: 'Sleepy Sloth',
      image: '🦥',
      quotes: [
        "It's okay to move slowly today. I'll hang here with you.",
        "Your feelings are valid. Want to take a nap together?",
        "Sometimes the best thing is to just... exist. I'm good at that.",
        "You don't have to be productive. Let's just breathe."
      ],
      personality: 'gentle and understanding'
    },
    playlist: {
      name: 'Melancholy Indie',
      spotifyId: '37i9dQZF1DX3YSRoSdA634',
      description: 'Soft indie tracks for when you need to feel your feelings'
    },
    scene: {
      background: 'rainy-window',
      animation: 'gentle-rain',
      ambiance: 'cozy'
    },
    colors: {
      primary: '#6B7280',
      secondary: '#9CA3AF',
      background: 'from-slate-200 to-blue-200'
    }
  },
  {
    id: 'angry',
    name: 'Angry',
    emoji: '😠',
    description: 'Feeling fired up and need to vent',
    pet: {
      name: 'Rebel Goat',
      image: '🐐',
      quotes: [
        "BAAAAAH! Let it out! I'll headbutt whatever's bothering you.",
        "Anger is just energy. Let's channel it into something awesome.",
        "Sometimes you gotta rage. I'll be your angry buddy.",
        "Your feelings are LOUD and VALID. Scream with me!"
      ],
      personality: 'fierce and supportive'
    },
    playlist: {
      name: 'Rage & Release',
      spotifyId: '37i9dQZF1DX4eRU3VnLbPD',
      description: 'High-energy tracks to help you process and release anger'
    },
    scene: {
      background: 'lava-glow',
      animation: 'pulsing-energy',
      ambiance: 'intense'
    },
    colors: {
      primary: '#EF4444',
      secondary: '#F97316',
      background: 'from-red-300 to-orange-300'
    }
  },
  {
    id: 'overthinking',
    name: 'Overthinking',
    emoji: '🤯',
    description: 'Mind racing with too many thoughts',
    pet: {
      name: 'Zen Capybara',
      image: '🐹',
      quotes: [
        "I see your thoughts spinning. Let's sit in the water together.",
        "Your small brain is doing its thing. That's normal. Here, have some calm.",
        "Overthinking means you care. Now let's find some peace.",
        "I'm just gonna vibe here. Join me when you're ready."
      ],
      personality: 'wise and calming'
    },
    playlist: {
      name: 'Lo-Fi Focus',
      spotifyId: '37i9dQZF1DWWQRwui0ExPn',
      description: 'Chill beats to quiet the mental chatter'
    },
    scene: {
      background: 'floating-thoughts',
      animation: 'gentle-drift',
      ambiance: 'meditative'
    },
    colors: {
      primary: '#8B5CF6',
      secondary: '#A78BFA',
      background: 'from-purple-200 to-indigo-200'
    }
  },
  {
    id: 'lonely',
    name: 'Lonely',
    emoji: '😔',
    description: 'Feeling isolated and craving connection',
    pet: {
      name: 'Cuddle Penguin',
      image: '🐧',
      quotes: [
        "You're not alone. I waddle through life with my colony, and you're part of mine now.",
        "Loneliness is temporary. Let's huddle together for warmth.",
        "Even when others feel far away, you've got me. I'm excellent company.",
        "Want to slide on the ice together? Metaphorically, of course."
      ],
      personality: 'warm and companionable'
    },
    playlist: {
      name: 'Cozy Company',
      spotifyId: '37i9dQZF1DX4WYpdgoIcn6',
      description: 'Warm, comforting songs that feel like a hug'
    },
    scene: {
      background: 'aurora-glow',
      animation: 'gentle-shimmer',
      ambiance: 'serene'
    },
    colors: {
      primary: '#06B6D4',
      secondary: '#67E8F9',
      background: 'from-cyan-200 to-teal-200'
    }
  },
  {
    id: 'meh',
    name: 'Meh',
    emoji: '😐',
    description: 'Feeling neutral, uninspired, just existing',
    pet: {
      name: 'Blob Fish',
      image: '🐟',
      quotes: [
        "Meh is a valid emotion. I'm professionally meh.",
        "Some days you're a majestic eagle. Today we're blobs. That's fine.",
        "Being underwhelmed is underrated. Let's embrace the meh.",
        "I exist. You exist. That's honestly impressive enough."
      ],
      personality: 'relatable and unbothered'
    },
    playlist: {
      name: 'Neutral Vibes',
      spotifyId: '37i9dQZF1DX0XUsuxWHRQd',
      description: 'Chill background music for existing peacefully'
    },
    scene: {
      background: 'soft-blobs',
      animation: 'lazy-float',
      ambiance: 'neutral'
    },
    colors: {
      primary: '#6B7280',
      secondary: '#9CA3AF',
      background: 'from-gray-200 to-slate-300'
    }
  },
  {
    id: 'energetic',
    name: 'Energetic',
    emoji: '⚡',
    description: 'Feeling pumped and ready to conquer',
    pet: {
      name: 'Bouncy Rabbit',
      image: '🐰',
      quotes: [
        "YES! I LOVE THIS ENERGY! Let's hop to it!",
        "You're radiating main character energy and I'm here for it!",
        "This is our moment! Time to bounce into action!",
        "Your enthusiasm is contagious! Let's make things happen!"
      ],
      personality: 'enthusiastic and motivating'
    },
    playlist: {
      name: 'High Energy Hits',
      spotifyId: '37i9dQZF1DX76Wlfdnj7AP',
      description: 'Pumped up tracks to match your amazing energy'
    },
    scene: {
      background: 'electric-burst',
      animation: 'dynamic-pulse',
      ambiance: 'energetic'
    },
    colors: {
      primary: '#EAB308',
      secondary: '#F59E0B',
      background: 'from-yellow-200 to-orange-200'
    }
  }
];
