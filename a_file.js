function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1I-rrJU5dFZ66gDG4tdO4rR_C0yencddJBXavHo8DQe4/edit?usp=sharing',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)