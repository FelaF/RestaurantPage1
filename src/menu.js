const ContentContainer = document.querySelector("#content")
const MenuCreation = () => {
    const menu = document.createElement("div")
    menu.classList.add("menu")
    menu.innerHTML = `
    <h1>Menu<h1>
    <div class="Breakfast">
        <h2>Breakfast Meals</h2>
        <ul>
            <li>Rice Porridge</li>
            <li>Fried Dough Sticks</li>
            <li>Steamed Buns</li>
            <li>Jian Bing</li>
            <li>Eggs and Mantou</li>
        </ul>
    </div>
    <div class=Lunch>
        <h2>Lunch Meals</h2>
        <ul>
            <li>Hot Pot</li>
            <li>Egg Drop Soup</li>
            <li>Wonton Soup<li>
            <li>Stir Fry</li>
            <li>Clay Pot Rice</li>
            <li>Lanzhou Beef Noodles</li>
            <li>Dan Dan Noodles</li>
            <li>Meat and Veggie Skewer</li>
        </ul>
    </div>
    <div class=Dinner>
        <h2>Dinner Meals</h2>
        <ul>
            <li>Kung Pao Chicken</li>
            <li>Broccoli and Beef</li>
            <li>Braised Fish</li>
            <li>Red Braised Pork</li>
            <li>Steamed Fish</li>
            <li>Peking Duck</li>
            <li>Char Siu<//li>
            <li>Dim Sum</li>
            <li>Marinated Tofu</li>
        </ul>
    </div>`
    ContentContainer.appendChild(menu)
}

export {MenuCreation};