import NutritionalLabel from "./NutritionalLabel/NutritionalLabel";
import Chip from "./Chip/Chip"

export function MenuDisplay(props) {

    return (
        <div className="MenuDisplay display">
            <div className="MenuItemButtons menu-items">
                <h2 className="title">Menu Items</h2>
                {props.currentMenuItems.map((element, i) => (
                    <Chip key={i}
                        label={element.item_name}
                        handleClose={(e) => {
                            props.setMenuItem(0);
                        }}
                        isActive={props.menuItem === element}
                        onClick={() => {
                            if (props.menuItem !== element) {
                                props.setMenuItem(element)
                            }
                        }}
                    />
                ))}
            </div>
            <div className="NutritionFacts nutrition-facts">
                <NutritionalLabel item={props.menuItem}></NutritionalLabel>
            </div>
        </div>
    )

}

export default MenuDisplay