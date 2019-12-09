class Formatter {
  static capitalize(string) {
    let letters = string.split('')
    let first = letters.shift()
    letters.unshift(first.toUpperCase())
    return letters.join('')
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(string) {
    let allLetters = string.split('')
    let firstCap = allLetters.shift().toUpperCase();
    allLetters.unshift(firstCap);
    let words = allLetters.join('').split(' ');
    return words.map(
      function(word) {
        const littles = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
        if (littles.includes(word)) {
          return word
        } else {
          let letters = word.split('');
          let first = letters.shift();
          letters.unshift(first.toUpperCase());
          return letters.join('');;
        }
      }
    ).join(' ')
  }
}