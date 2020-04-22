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
						<h1>{card.message}</h1>
						{card.url ? (
							<iframe
								title='video'
								width='450'
								height='300'
								src={`https://www.youtube.com/embed/${card.url}`}
								frameborder='0'
								allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
								allowfullscreen
							></iframe>
						) : null}
					</div>
				</Rodal>
			</>
		);
	}
}

export default Card;
