import Chip from "./Chip/Chip"

export function RestaurantsRow(props) {
	return (
		<div className="RestaurantsRow">
			<h2 className="title">Restaurants</h2>
			<div className="restaurants options">
				{props.restaurants.map((element, i) => (
					<Chip
						key={i}
						handleClose={(e) => {
							props.setRestaurant(0);
						}}
						label={element}
						isActive={props.restaurant === element}
						onClick={() => {
							if (props.restaurant !== element) {
								props.setRestaurant(element)
							}
						}}
					/>
				))}
			</div>
		</div>
	)
}

export default RestaurantsRow