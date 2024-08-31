const bouton = document.querySelector('#bouton')
let zone = document.querySelector('#zone')
let form = document.querySelector('form')
let span = document.querySelector('span')
let h4 = document.querySelector('h4')
let h5 = document.querySelector('h5')

setInterval(function duration() {
  let temps = new Date()
  let hour = temps.getHours()
  let min = temps.getMinutes()
  let sec = temps.getSeconds()
  let mil = temps.getMilliseconds()
  
  let jour = temps.getDay()
  let date = temps.getDate()
  let mois = temps.getMonth()
  let annee = temps.getFullYear()
 
  
  function duree() {
    jourListe = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim']
    
    h4.textContent=`${jourListe[6-1]} ${date} / ${mois+1} / ${annee}`
    
    h5.textContent=`${hour} : ${min}' : ${sec}"`
  }
if (hour < 10) {
  hour = `0${hour}`
  duree()
} else {
  hour = `${hour}`
  duree()
}
 if (min < 10) {
  min = `0${min}`
  duree()
} else {
  min = `${min}`
  duree()
}
 if (sec < 10) {
  sec = `0${sec}`
  duree()
} else {
  sec = `${sec}`
  duree()
}
},10)

bouton.addEventListener('click',(e)=>{
  e.preventDefault()
  let temp = document.querySelector('#temperate').value
  let precip = document.querySelector('#precipitate').value
  
  temp = Number(temp)
  precip = Number(precip)
  
  if (temp && precip) {
    span.style.backgroundColor='seagreen'
    if (temp < 10 && precip < 500) {
      zone.innerHTML='Etrêmement polaire'
      form.style.border=`${1}px solid cyan`
    }
    if (temp > 10 && temp < 20 && precip < 1000 && precip > 500) {
      zone.innerHTML='Polaire'
      form.style.border=`${1}px solid dodgerblue`
    }
    if (temp > 20 && precip < 1000) {
      zone.innerHTML = 'Temperée 1'
      form.style.border=`${1}px solid yellow`
    }
    if (temp < 20 && precip > 1000) {
      zone.innerHTML = 'Temperée 2'
      form.style.border=`${1}px solid orange`
    }
    if (temp > 20 && precip > 1000) {
      zone.innerHTML = 'Tropical chaud et pluvieux'
      form.style.border=`${1}px solid crimson`
    }
  }
  else{
    zone.innerHTML='Entrez un nombre'
    span.style.backgroundColor='crimson'
  }
})