// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#2450976
export default function shuffleArray (original) {
  const array = original.slice()
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
