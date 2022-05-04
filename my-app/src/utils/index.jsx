export const Trainning = (value, text) => {
  console.log(value, text);
}

export const Testing = (team, text) => {
  alert(`O ${team} não tem ${text}`)
}

export const redirect = ( pages ) => {
  window.location.href= pages
}