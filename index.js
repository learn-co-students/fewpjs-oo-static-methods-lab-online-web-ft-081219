class Formatter {
  static capitalize(string) {
    // capitalizes first letter
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let allLetters = string.split('')
    let firstCap = allLetters.shift().toUpperCase();
    
    allLetters.unshift(firstCap);
    let words = allLetters.join('').split(' ');
    return words.map(word => {
        const lowConj = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
        if (lowConj.includes(word)) {
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