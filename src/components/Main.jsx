export default function Main() {

    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsList = ingredients.map((item) => (
        <li key="ingredient">{item}</li>

    ))

    const handelSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }

    return (

        <main>
            <form onSubmit={handelSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. Orgeno"
                    aria-label="Add Ingredient"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientsList}

            </ul>

        </main>
    )
}