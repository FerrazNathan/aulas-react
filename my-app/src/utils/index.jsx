/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
export const trainning = (text) => {
  if(text === 'Guitarra'){
    console.log('Tem cordas')
  }
  else if(text === 'Bateria'){
    console.log('Tem pedal')
  }
  else if(text === 'Microfone'){
    console.log('Tem fios');
  }
  else{
    console.log('Não existe esse instrumento');
  }
}

export const testing = (value) => {
  switch(value){
    case 'Frango': console.log('Frango combina com Catupiry');; break;
    case 'Presunto': console.log('Presunto combina com queijo');; break;
    case 'Calabresa': console.log('Calabresa combina com cebola');; break;
    default: console.log('Não combina com nada');
  }
}

export const open = () => {
  alert('Abra o Console do seu navegador')
}