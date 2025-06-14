
export interface Mood {
  id: string;
  name: string;
  emoji: string;
  description: string;
  pet: Pet;
  playlist: Playlist;
  scene: Scene;
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
}

export interface Pet {
  name: string;
  image: string;
  quotes: string[];
  personality: string;
}

export interface Playlist {
  name: string;
  spotifyId: string;
  description: string;
}

export interface Scene {
  background: string;
  animation: string;
  ambiance: string;
}
