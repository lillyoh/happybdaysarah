import React from 'react';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';
import './Card.css';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = { visible: false };
	}

	show() {
		this.setState({ visible: true });
	}

	hide() {
		this.setState({ visible: false });
	}
	render() {
		const { card } = this.props;
		return (
			<>
				<div className='card-container' onClick={this.show.bind(this)}>
					<img src={card.image} alt='card-illustration' />
				</div>
				<Rodal
					visible={this.state.visible}
					onClose={this.hide.bind(this)}
					animation='flip'
					measure='px'
					width={600}
					height={500}
					className='modal'
				>
					<div>
						<h1>{card.header}</h1>
						{card.message ?
							<div className="message">
								{card.message}
							</div> : null}
						{card.video && !card.youtube ? (
							<video width={500} controls src={card.video} type="video/mov"></video> ) : null}
						{card.video && card.youtube ? (
							<iframe width="500" height="315" src={card.youtube} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						) : null }
						{card.photo ? (
							<>
							<a href={card.photo} target="_blank" rel="noopener noreferrer"><img alt="album-cover" src={card.cover}/></a>
							</>
						): null }

					</div>
				</Rodal>
			</>
		);
	}
}

export default Card;
