import React, { useState, useEffect } from "react";
import * as S from './styles'
import Header from "../../components/Header";

export const Cadastro = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setEmail(localStorage.getItem('email'))
      setPassword(localStorage.getItem('password'))
    }
  }, [])

  const clearing = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('email')
      localStorage.removeItem('password')
      window.location.href = '/'
    }
  }

  const members = () => {
    if (email === 'felipe@felipe.com' && password === 'senhateste') {
      return (
        <>
          <p>Nome: Felipe</p>
          <p>Idade: 31</p>
          <img src='https://avatars.githubusercontent.com/u/32152196?v=4' alt='Foto de perfil do Felipe' />
        </>
      )
    }
    else if (email === 'nathan@nathan.com' && password === 'senhateste') {
      return (
        <>
          <p>Nome: Nathan</p>
          <p>Idade: 34</p>
          <img src='https://scontent-gru2-2.xx.fbcdn.net/v/t1.18169-9/547640_3450749116465_76323454_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=c3WN9uOf0AIAX8SxqkW&_nc_ht=scontent-gru2-2.xx&oh=00_AT8aJzLOs-qaNO9JZUM4SkfLa5glxaGOxp1PpokxzSdNJQ&oe=62CD25E7' alt='Foto de perfil do Nathan' />
        </>
      )
    }
    else if (email === 'poly@poly.com' && password === 'senhateste') {
      return (
        <>
          <p>Nome: Polyane</p>
          <p>Idade: 34</p>
          <img src='https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/45798004_2266496500088787_8594411846297976832_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=v0voxShCC8kAX9A-fmL&_nc_ht=scontent-gru1-2.xx&oh=00_AT-adR7VOVvD3xt1GgkiJCOWJTq2yjTieNy8uoW5KRrVQA&oe=62CC2D80' alt='Foto de perfil da Polyane' />
        </>
      )
    }
    else if (email === 'douglas@douglas.com' && password === 'senhateste') {
      return (
        <>
          <p>Nome: Douglas</p>
          <p>Idade: 28</p>
          <img src='https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/78538880_1578436495629627_7200987196910731264_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=RhBMbNTdlTIAX_OQdfJ&tn=-EZIded70qwQJ1_Z&_nc_ht=scontent-gru1-2.xx&oh=00_AT_gKZRIucudflpiTjNfFCZsFt_Wx8esN1QB1TR36Tjdfw&oe=62CDE0AB' alt='Foto de perfil do Douglas' />
        </>
      )
    }
    else if (email === 'mauricio@mauricio.com' && password === 'senhateste') {
      return (
        <>
          <p>Nome: Maurício</p>
          <p>Idade: 48</p>
          <img src='https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/80068959_2625253887559198_6304440953151160320_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=A0-z39AOEBwAX8M1jEa&_nc_oc=AQlkF57dC6LuubMqVjEpVtsiLsAORTzf-A9KynbG_UOILPqpA43lRGhdOPnPxVbH8nCICACP8pToZJk249-wkub9&_nc_ht=scontent-gru1-1.xx&oh=00_AT_wEJyJC4sTPYoHK7kFlHCDirmPMiRjuIaDsPGzjTj2bA&oe=62CEB9F7' alt='Foto de perfil do Maurício' />
        </>
      )
    }
    else if (email === 'rogerio@rogerio.com' && password === 'senhateste') {
      return (
        <>
          <p>Nome: Rogerinho</p>
          <p>Idade: 22</p>
          <img src='https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/118771669_3252827314835537_1416604642692036314_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=mZw_apQ3dr4AX8VBg_O&tn=-EZIded70qwQJ1_Z&_nc_ht=scontent-gru1-1.xx&oh=00_AT_fCpx0A5uQSBNg79ijT9g5JYijgt7QJi4JKw4FpJjShg&oe=62CBD83A' alt='Foto de perfil do Rogerinho' />
        </>
      )
    }
    else if (email === 'emanuel@emanuel.com' && password === 'senhateste') {
      return (
        <>
          <p>Nome: Emanuel</p>
          <p>Idade: 28</p>
          <img src='https://scontent-gru2-1.xx.fbcdn.net/v/t31.18172-8/20786129_1396698600426940_6484147879317158104_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=_1-xpYlyRr4AX9-M_HE&_nc_ht=scontent-gru2-1.xx&oh=00_AT94i1CnkY1APMMpabPUw8j-9Vx5SXurgbyrARAhZzrgoQ&oe=62CEFB15' alt='Foto de perfil do Emanuel' />
        </>
      )
    }
    else if (email === 'marcelo@marcelo.com' && password === 'senhateste') {
      return (
        <>
          <p>Nome: Marcelo</p>
          <p>Idade: 31</p>
          <img src='https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/81425671_1315447561971285_2711254159218180096_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cm678uQaoaIAX8-4wr2&_nc_ht=scontent-gru2-1.xx&oh=00_AT9Yn1P6wmqHWwutuqOp6r7UeE2zmN2ucAgl7mvx4LgpVw&oe=62CCBC28' alt='Foto de perfil do Marcelo' />
        </>
      )
    }
    else {
      <h1>Não existe esse membro da FPR</h1>
    }
  }

  return (
    <>
      <Header />
      <S.Box>
        <S.Container>
          {members()}
        </S.Container>
        <S.Button onClick={() => clearing()}>Sign Out</S.Button>
      </S.Box>
    </>
  )
}

export default Cadastro