
import React, { useState } from 'react';
import MoodSelector from '../components/MoodSelector';
import MoodScene from '../components/MoodScene';
import { Mood } from '../types/mood';

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
  };

  const handleTryAgain = () => {
    setSelectedMood(null);
  };

  return (
    <div className="min-h-screen">
      {!selectedMood ? (
        <MoodSelector onMoodSelect={handleMoodSelect} />
      ) : (
        <MoodScene mood={selectedMood} onTryAgain={handleTryAgain} />
      )}
    </div>
  );
};

export default Index;
