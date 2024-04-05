function removeVowels(str) {
  let vowels = "aeiouAEIOU";
  let output = str.split("");
  for (let i = 0; i < output.length; i++) {
    if (vowels.includes(output[i])) {
      output.splice(i, 1);
      i--;
    }
  }
  return output.join("");
}
