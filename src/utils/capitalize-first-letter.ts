const capitalizeFirstLetter = (word: string): string => {
    return String(word).charAt(0).toUpperCase() + String(word).slice(1);
};

export default capitalizeFirstLetter;
