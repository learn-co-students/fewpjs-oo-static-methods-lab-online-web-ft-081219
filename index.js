class Formatter {

  static titleize(arg){
    const expection =   ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let result = arg.split(" ").map(e => { if(!expection.includes(e)){
      return Formatter.capitalize(e)
    }else if(expection.includes(e) && arg.charAt(0)=== e){
      return Formatter.capitalize(e)
    }
    return e
  
  
  }).join(" ")

    return result

  }

  static capitalize(arg){
    return arg.charAt(0).toUpperCase() + arg.slice(1)
  }

  
  static sanitize(arg){
    console.log(arg)
    return arg.replace(/[^A-Za-z0-9-'\s]+/g, "")
  }
}