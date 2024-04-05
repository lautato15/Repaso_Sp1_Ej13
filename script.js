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
function removeVowels2(str) {
  let vowels = "aeiouAEIOU";
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) output += str[i];
  }
  return output;
}
  