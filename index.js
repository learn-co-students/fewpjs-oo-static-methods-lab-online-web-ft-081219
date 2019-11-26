class Formatter {
  static capitalize( string ) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence) {
    const exception = 'the, a, an, but, of, and, for, at, by, from'.split(", ")

    const newStr = sentence.split(" ")
    let titleCased = []

    for (let i = 0; i < newStr.length; i++) {
      let word = newStr[i]

      if (i === 0) {
        titleCased.push(this.capitalize(word))
      } else {
        if (exception.includes(word)) {
          titleCased.push(word)
        } else {
          titleCased.push(this.capitalize(word))
        }
      }
    }

    return titleCased.join(" ")
  }
}
console.log(Formatter.capitalize("hello"))
