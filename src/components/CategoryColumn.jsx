import Chip from "./Chip/Chip"

export function CategoryColumn(props) {
    return (
        <div className = "CategoriesColumn col" >
            <div className="categories options">
                <h2 className="title">Categories</h2>
                {/* iterate over all food types to be displayed */}
                {props.categories.map((element, i) => (
                    <Chip
                        key={i}
                        label={element}
                        handleClose={(e) => {
                            props.setCategory(0);
                        }}
                        isActive={props.category === element}
                        onClick={() => {
                            if (props.category !== element) {
                                props.setCategory(element)
                            }
                        }}
                    />
                ))}
            </div>
      </div>
      )
}

export default CategoryColumn