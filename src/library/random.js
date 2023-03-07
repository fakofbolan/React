const adjectives = ["nice", "good", "smart"];
const nouns = ["fak", "eat", "bolan"];

export const getRandomName = () => {
  const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
  const nounIndex = Math.floor(Math.random() * nouns.length);
  return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
};
