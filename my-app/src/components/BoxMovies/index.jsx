import React, { useEffect, useState } from 'react'
import Card from '../Card'
import * as S from './styles'

export default function BoxMovies() {

	const [velozes, setVelozes] = useState()
	const [start, setStart] = useState()

	useEffect(() => {
		if (start === 'velozes 1') {
			setVelozes(
				<div>
					<h1>Velozes e furiosos</h1>
					<div>
						<h1>Descrição</h1>
						<p>O policial Brian O'Conner (Paul Walker) é encarrgado de investigar Dominic Toretto (Vin Diesel), o líder de uma gangue de corridas de rua em Los Angeles. Este é o suposto responsável por um assalto a um caminhão que transportava mercadorias eletrônicas.</p>
					</div>
					<div>
						<h1>Diretor</h1>
						<p>Justin Lin</p>
					</div>
					<div>
						<h1>Gênero</h1>
						<p>Ação e Aventura</p>
					</div>
					<div>
						<h1>Personagens</h1>
						<p>Vin Diesel: Dominic Toretto</p>
						<p>Paul Walker: Brian O'Conner</p>
						<p>Michelle Rodriguez: Letty</p>
						<p>Jordana Brewster: Mia Toretto</p>
						<p>Matt Schulze: Vince</p>
						<p>Ja Rule: Edwin</p>
					</div>
					<div>
						<h1>Imagens relacionadas</h1>
						<img src='./velozes2.jpg' alt="Filme 2" />
						<img src='./velozes3.jpg' alt="Filme 3" />
					</div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/4bEMXlQXiS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			)
		}
		else if (start === 'velozes 2') {
			setVelozes(
				<div>
					<h1>+Velozes e +Furiosos</h1>
					<div>
						<h1>Descrição</h1>
						<p>Após deixar a polícia, Brian O'Conner (Paul Walker) é forçado a participar de uma nova missão: se infiltrar no crime organizado de Miami de forma a investigar sobre o transporte de dinheiro sujo para Carter Verone (Cole Hauser), o chefe do tráfico local. Para tanto ele recebe a ajuda de seu ex-colega Roman Pearce (Tyrese) e da agente secreta Monica Clemente (Eva Mendes).
						</p>
					</div>
					<div>
						<h1>Diretor</h1>
						<p>Justin Lin</p>
					</div>
					<div>
						<h1>Gênero</h1>
						<p>Ação e Aventura</p>
					</div>
					<div>
						<h1>Personagens</h1>
						<p>Vin Diesel: Dominic Toretto</p>
						<p>Paul Walker: Brian O'Conner</p>
						<p>Cole Hauser: Carter Verone</p>
						<p>Ludacris: Tej</p>
						<p>Tyrese Gibson: Roman Pierce</p>
						<p>Eva Mendes: Monica Fuentes</p>
					</div>
					<div>
						<h1>Imagens relacionadas</h1>
						<img src='./velozes1.jpg' alt="Filme 1" />
						<img src='./velozes3.jpg' alt="Filme 3" />
					</div>
					<div>
						<h1>Trailler</h1>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/ONs4_PtakGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
			)
		}
		else if (start === 'velozes 3') {
			setVelozes(
				<div>
					<h1>Velozes e furiosos 3</h1>
					<div>
						<h1>Descrição</h1>
						<p>Sean Boswell (Lucas Black) é um adolescente superficial e infeliz, que usa as corridas de rua como válvula de escape. Seu envolvimento irresponsável nas corridas fez com que Sean tivesse problemas com a polícia anteriormente. Após bater com o carro, e como forma de evitar a prisão, Sean é enviado para Tóquio, onde passa a morar com seu pai (Brian Goodman). Em sua nova cidade Sean fica inteiramente deslocado até conhecer Twinkie (Bow Wow), que lhe apresenta as corridas de drift. O drift é uma mistura de derrapagem e velocidade, que corre em circuitos bastante perigosos. Sean logo se empolga com a novidade, o que faz com que se envolva com os corredores locais.</p>
					</div>
					<div>
						<h1>Diretor</h1>
						<p>Justin Lin</p>
					</div>
					<div>
						<h1>Gênero</h1>
						<p>Ação e Aventura</p>
					</div>
					<div>
						<h1>Personagens</h1>
						<p>Vin Diesel: Dominic Toretto</p>
						<p>Lucas Black: Sean Boswell</p>
						<p>Bow Wow: Twinkie</p>
						<p>Leonardo Nam: Morimoto</p>
						<p>Jason Tobin: Earl</p>
						<p>Sung Kang: Han</p>
					</div>
					<div>
						<h1>Imagens relacionadas</h1>
						<img src='./velozes2.jpg' alt="Filme 2" />
						<img src='./velozes4.jpg' alt="Filme 4" />
					</div>
					<div>
						<h1>Trailler</h1>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/HVQWZkd8cDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
			)
		}
		else if (start === 'velozes 4') {
			setVelozes(
				<div>
					<h1>Velozes e furiosos 4</h1>
					<div>
						<h1>Descrição</h1>
						<p>Depois de ser visto rumo ao México no filme que deu origem a série, Dominic "Dom" Toretto (Vin Diesel) reaparece na República Dominicana praticando seus golpes ao lado de sua namorada Letty (Michelle Rodriguez) e sua gangue. Com o FBI na sua cola, Dom decide fugir para não comprometer seus comparsas. Contudo, um assassinato cometido por um traficante de drogas acende nele uma sede de vingança que o faz cruzar novamente com o agente Brian O'Conner (Paul Walker) numa perigosa missão.</p>
					</div>
					<div>
						<h1>Diretor</h1>
						<p>Justin Lin</p>
					</div>

					<div>
						<h1>Gênero</h1>
						<p>Ação e Aventura</p>
					</div>
					<div>
						<h1>Personagens</h1>
						<p>Vin Diesel: Dominic Toretto</p>
						<p>Paul Walker: Brian O'Conner</p>
						<p>Michelle Rodriguez: Letty</p>
						<p>Jordana Brewster: Mia Toretto</p>
						<p>Gal Gadot: Gisele</p>
						<p>Sung Kang: Han</p>
					</div>
					<div>
						<div>
							<h1>Imagens relacionadas</h1>
							<img src='./velozes3.jpg' alt="Filme 3" />
							<img src='./velozes5.jpg' alt="Filme 5" />
						</div>
						<h1>Trailler</h1>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/7E40wezXk0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
			)
		}
		else if (start === 'velozes 5') {
			setVelozes(
				<div>
					<h1>Velozes e furiosos 5</h1>
					<div>
						<h1>Descrição</h1>
						<p>Em Velozes & Furiosos 5: Operação Rio, Dominic Toretto (Vin Diesel) foi resgatado da prisão por sua irmã Mia (Jordana Brewster) e Brian O'Conner (Paul Walker), que realizam um ousado resgate sobre rodas. Logo em seguida, ele desaparece. Brian e Mia vão até o Rio de Janeiro, onde encontram Vince (Matt Schulze). Ele propõe ao casal o roubo de carros que estão sendo levados em um trem, algo que, segundo ele, será uma operação simples que renderá um bom lucro. Durante a operação, Dominic reaparece e diz à irmã que os planos mudaram. Ela então leva um dos carros a um esconderijo em plena favela carioca, deixando Dominic e Brian enfrentando policiais e bandidos. Ao desmontar o carro, o trio descobre que ele contém um chip com todas as operações ilegais de Hernan Reis (Joaquim de Almeida), incluindo onde guarda o dinheiro arrecadado. É o suficiente para que eles elaborem um plano para roubar a fortuna de Reis, contando com a ajuda de vários amigos.</p>
					</div>
					<div>
						<h1>Diretor</h1>
						<p>Justin Lin</p>
					</div>
					<div>
						<h1>Gênero</h1>
						<p>Ação e Aventura</p>
					</div>
					<div>
						<h1>Personagens</h1>
						<p>Vin Diesel: Dominic Toretto</p>
						<p>Paul Walker: Brian O'Conner</p>
						<p>Michelle Rodriguez: Letty</p>
						<p>Jordana Brewster: Mia Toretto</p>
						<p>Tyrese Gibson: Roman Pierce</p>
						<p>Gal Gadot: Gisele</p>
						<p>Sung Kang: Han</p>
						<p>Ludacris: Tej</p>
						<p>Dwayne Johnson: Luke Hobs</p>
					</div>
					<div>
						<div>
							<h1>Imagens relacionadas</h1>
							<img src='./velozes6.jpg' alt="Filme 6" />
							<img src='./velozes4.jpg' alt="Filme 4" />
						</div>
						<div>
							<h1>Trailler</h1>
							<iframe width="560" height="315" src="https://www.youtube.com/embed/FCN-B8SZVlo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
					</div>
				</div>
			)
		}
		else if (start === 'velozes 6') {
			setVelozes(
				<div>
					<h1>Velozes e furiosos 6</h1>
					<div>
						<h1>Descrição</h1>
						<p>Em Velozes e Furiosos 6, os heróis se espalham pelo mundo após o golpe de Dom (Vin Diesel) e Brian (Paul Walker) no Rio de Janeiro que deixou o grupo com US$100 milhões. Mas a incapacidade de voltar para casa e viver em um lar tornou suas vidas incompletas. Enquanto isso, Hobbs (Dwayne Johnson) esteve perseguindo uma organização de mercenários sobre rodas, um grupo de homens cruéis divididos em 12 países, cujo mentor (Luke Evans) tem ajuda da destemida Letty (Michelle Rodriguez), a antiga namorada de Dom, que ele acreditava estar morta. A única maneira de parar este grupo de criminosos é superá-los nas ruas, por isso Hobbs pede a Dom para reunir um grupo de elite em Londres. A recompensa? Perdão a todos eles, para poderem voltar para as suas casas e tornarem suas famílias completas novamente.</p>
					</div>
					<div>
						<h1>Diretor</h1>
						<p>Justin Lin</p>
					</div>
					<div>
						<h1>Gênero</h1>
						<p>Ação e Aventura</p>
					</div>
					<div>
						<h1>Personagens</h1>
						<p>Vin Diesel: Dominic Toretto</p>
						<p>Paul Walker: Brian O'Conner</p>
						<p>Michelle Rodriguez: Letty</p>
						<p>Jordana Brewster: Mia Toretto</p>
						<p>Tyrese Gibson: Roman Pierce</p>
						<p>Gal Gadot: Gisele</p>
						<p>Sung Kang: Han</p>
						<p>Ludacris: Tej</p>
						<p>Dwayne Johnson: Luke Hobs</p>
					</div>
					<div>
						<h1>Imagens relacionadas</h1>
						<img src='./velozes1.jpg' alt="Filme 1" />
						<img src='./velozes5.jpg' alt="Filme 5" />
					</div>
					<div>
						<h1>Trailler</h1>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/W9o8V9ybbLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
			)
		}
	}, [start])

	return (
		<S.Container>
			<Card img='./velozes1.jpg' setStart={setStart} clicado='velozes 1' />
			<Card img='./velozes2.jpg' setStart={setStart} clicado='velozes 2' />
			<Card img='./velozes3.jpg' setStart={setStart} clicado='velozes 3' />
			<Card img='./velozes4.jpg' setStart={setStart} clicado='velozes 4' />
			<Card img='./velozes5.jpg' setStart={setStart} clicado='velozes 5' />
			<Card img='./velozes6.jpg' setStart={setStart} clicado='velozes 6' />
			{velozes}
		</S.Container>
	)
}
