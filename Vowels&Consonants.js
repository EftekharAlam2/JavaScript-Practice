function countVowelsAndConsonants(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char.match(/[a-zA-Z]/)) {
      consonantCount++;
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

const inputString = "d";
const result = countVowelsAndConsonants(inputString);

console.log("Input String:", inputString);
console.log("Number of vowels:", result.vowels);
console.log("Number of consonants:", result.consonants);
