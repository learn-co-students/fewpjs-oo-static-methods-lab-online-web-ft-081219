class Formatter {

  static capitalize(str){
   return str.charAt(0).toUpperCase() + str.slice(1)
 }

 static sanitize(str){
   return str.replace( /[^A-Za-z0-9 '-]/g, '' )
 }

 static titleize(str){
   const smalls = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
   return str.split(" ").map((word, i)=> smalls.includes(word) && i !== 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
 }

}
