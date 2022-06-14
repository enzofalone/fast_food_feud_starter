import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"

import CategoryColumn from "./components/CategoryColumn"

// SUB-COMPONENTS
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import RestaurantsRow from "./components/RestaurantsRow"
import MenuDisplay from "./components/MenuDisplay"
import DataSource from "./components/DataSource"


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
      <CategoryColumn categories={categories} category={category} setCategory={setCategory} />

      {/* MAIN COLUMN */}
      <div className="container">
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description} />
        <RestaurantsRow restaurants={restaurants} setRestaurant={setRestaurant} restaurant={restaurant} />
        <Instructions instructions={getInstructions()} />
        <MenuDisplay currentMenuItems={currentMenuItems} setMenuItem={setMenuItem} menuItem={menuItem}/> 
        {<DataSource dataSource={appInfo.dataSource}/>}
      </div>
    </main>
  )
}

export default App
