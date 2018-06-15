var katzDeliLine = [];
var number = 0 

function takeANumber(katzDeliLine, number){
  number++
  katzDeliLine.push(number)
  return `Welcome, You are ${number}.`
}
/// pushing (name) to the end of an array = katzDeliLine's empty array
///${} means it's not string, it's javascript

function nowServing(katzDeliLine) {
  if(katzDeliLine.length == 0) { ///2 equal sign = to equal and not set it as 0
    return `There is nobody waiting to be served!`
  }
 else(katzDeliLine.length > 0)
  var name = katzDeliLine.shift() ///no need to provide name
  /// katzDeliLine.shift equals the first name in line and return the first name
  /// var name --> fist name that was removedfrom katzDeliLine
  return `Currently serving ${name}.`
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length == 0){
      return `The line is currently empty.`
  }
  var message= "The line is currently: "
  var newMessage = []
  for (var i = 0; i < katzDeliLine.length; i++) {
    newMessage.push([i+1] +  ". " + katzDeliLine[i])
}
return message + newMessage.join(", ")
}

/// .join turn arrays into strings (with commas in between quotes)
///unshift - put element in the beginning of array
/// slice() - can remove element without changing array
/// .pop() - removes element from end of array
