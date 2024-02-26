const name ="Aki"
const language ="Ember.js"
function introduction(name){
    return`Hi, my name is ${name}.`
}
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
} 
function introductionWithLanguageOptional(name,  language = 'JavaScript'){
   const name2="Gracie"
    
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}