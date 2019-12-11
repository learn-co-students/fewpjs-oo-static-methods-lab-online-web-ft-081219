class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^0-9a-zA-Z \'\-]/gi, '');
  }

  static titleize(string) {
    const dontTitleize = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const splitString = string.split(' ');
    let newString = this.capitalize(splitString[0]);
    newString = newString + " " + splitString.slice(1).map(function(w) {
      if (!dontTitleize.includes(w)) {
        return w[0].toUpperCase() + w.slice(1);
      } else {
        return w;
      }
    }).join(' ');
    return newString;
  }
}