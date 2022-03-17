import React from 'react'
import { dataCard } from '../../common/constants/dataCard';
import '../../App.css';
import { bestPlayer, nathan } from '../../mock/index'
import * as S from './styleStructure'

const Structures = () => {

	return (
		<section className='container flex'>
			<div className='App-card'>
					<S.BoxText>
						<h1>{bestPlayer[0].jogador}</h1>
						<p>{dataCard.PLAYER} {bestPlayer[0].time.atual}, {bestPlayer[0].nacionalidade}, {bestPlayer[0].posicao}, {bestPlayer[0].idade} {dataCard.YEARS}</p>
						<p>{dataCard.BESTPLAYER}</p>
						<p>{nathan.amigos[0].time} {dataCard.BESTTEAM}</p>
					</S.BoxText>
				</div>
		</section>
	)
}

export default Structures