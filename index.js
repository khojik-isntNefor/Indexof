let arr = ['Daler', 'Artyom', 'Valentina', 'Saidbek', 'Emil', 'Odilbek', 'Aziz', 'Abbos']

let name = prompt('Which person ?')
let indof = arr.indexOf(name)

if(indof !== -1 ){
    arr.splice(indof, 1)
}else{
    alert('Name is not found')
}


