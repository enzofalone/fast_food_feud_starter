import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
// SUB-COMPONENTS
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu element and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {


  //constants
  const [restaurant, setRestaurant] = React.useState(0);
  const [category, setCategory] = React.useState(0);
  // first get current restaurant items
  const currentMenuItems = data.filter(e => { return (e.restaurant === restaurant) && (e.food_category === category) });

  const [menuItem, setMenuItem] = React.useState(0);

  // return instructions based on what the user has or has not already done  
  const getInstructions = () => {
    if ((category === 0) && (restaurant === 0)) {
      return appInfo.instructions.start
    } else if ((category === 0)) {
      return appInfo.instructions.onlyRestaurant
    } else if (restaurant === 0) {
      return appInfo.instructions.onlyCategory
    } else if (menuItem === 0) {
      return appInfo.instructions.noSelectedItem
    } else {
      return appInfo.instructions.allSelected
    }
  }

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* iterate over all food types to be displayed */}
          {categories.map((element, i) => (
            <Chip
              key={i}
              label={element}
              handleClose={(e) => {
                setCategory(0);
              }}
              isActive={category === element}
              onClick={() => {
                if (category !== element) {
                  setCategory(element)
                }}}
            />
          ))}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {<Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description} />}

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((element, i) => (
              <Chip 
              key={i}
              handleClose={(e) => {
                setRestaurant(0);
              }}
              label={element}
              isActive={restaurant === element}
              onClick={() => {
              if (category !== element) {
                setRestaurant(element)
              }}}
              />
            ))}
          </div>
        </div>

        <Instructions instructions={getInstructions()} />

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((element, i) => (
              <Chip key={i} 
              label={element.item_name} 
              handleClose={(e) => {
                setMenuItem(0);
              }} 
              isActive={menuItem === element} 
              onClick={() => {
                if (menuItem !== element) {
                  setMenuItem(element)
                }}} 
              />
            ))}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{
            <NutritionalLabel item={menuItem}></NutritionalLabel>
          }</div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
