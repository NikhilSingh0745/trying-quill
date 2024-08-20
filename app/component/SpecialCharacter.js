import React from 'react';

// List of emojis or special characters
const specialCharacters = [
  '😊', '😂', '❤️', '👍', '🙏', '🎉', '✨', '🌟', '🔥', '💧',
  // Add more characters or emojis as needed
];

const SpecialCharactersPicker = ({ insertCharacter }) => {
  return (
    <div className="special-characters-picker">
      {specialCharacters.map((char, index) => (
        <button
          key={index}
          className="character-button"
          onClick={() => insertCharacter(char)}
        >
          {char}
        </button>
      ))}
    </div>
  );
};

export default SpecialCharactersPicker;
