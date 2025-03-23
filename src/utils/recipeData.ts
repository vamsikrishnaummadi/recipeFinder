
const recipeData = [
  {
    "id": "1",
    "title": "Spaghetti Carbonara",
    "image": "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1000&auto=format&fit=crop",
    "ingredients": ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Black Pepper"],
    "instructions": "Boil pasta. Cook pancetta until crispy. Whisk eggs and cheese. Combine with pasta and pancetta. Serve with black pepper.",
    "summary": "A classic Italian pasta dish with eggs, cheese, and pancetta.",
    "readyInMinutes": 20,
    "servings": 2,
    "sourceUrl": "",
    "diets": ["Non-Vegetarian"],
    "dishTypes": ["Dinner"],
    "extendedIngredients": [
      { "id": 101, "name": "Spaghetti", "amount": 200, "unit": "g", "original": "200g Spaghetti" },
      { "id": 102, "name": "Eggs", "amount": 2, "unit": "", "original": "2 Eggs" },
      { "id": 103, "name": "Parmesan Cheese", "amount": 50, "unit": "g", "original": "50g Parmesan Cheese" },
      { "id": 104, "name": "Pancetta", "amount": 100, "unit": "g", "original": "100g Pancetta" },
      { "id": 105, "name": "Black Pepper", "amount": 1, "unit": "tsp", "original": "1 tsp Black Pepper" }
    ],
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          { 
            "number": 1, 
            "step": "Boil pasta according to package instructions.", 
            "ingredients": [{"id": 101, "name": "Spaghetti", "amount": 200, "unit": "g", "original": "200g Spaghetti"}], 
            "equipment": [] 
          },
          { 
            "number": 2, 
            "step": "Cook pancetta until crispy in a large pan.", 
            "ingredients": [{"id": 104, "name": "Pancetta", "amount": 100, "unit": "g", "original": "100g Pancetta"}], 
            "equipment": [] 
          },
          { 
            "number": 3, 
            "step": "Whisk eggs and cheese in a bowl.", 
            "ingredients": [
              {"id": 102, "name": "Eggs", "amount": 2, "unit": "", "original": "2 Eggs"}, 
              {"id": 103, "name": "Parmesan Cheese", "amount": 50, "unit": "g", "original": "50g Parmesan Cheese"}
            ], 
            "equipment": [] 
          },
          { 
            "number": 4, 
            "step": "Combine cooked pasta with pancetta, then mix in egg mixture off heat.", 
            "ingredients": [], 
            "equipment": [] 
          },
          { 
            "number": 5, 
            "step": "Serve with freshly ground black pepper.", 
            "ingredients": [{"id": 105, "name": "Black Pepper", "amount": 1, "unit": "tsp", "original": "1 tsp Black Pepper"}], 
            "equipment": [] 
          }
        ]
      }
    ]
  },
  {
    "id": "2",
    "title": "Vegetable Stir Fry",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1000&auto=format&fit=crop",
    "ingredients": ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce", "Garlic", "Ginger"],
    "instructions": "Chop vegetables. Stir-fry with garlic and ginger. Add soy sauce. Cook until tender-crisp. Serve hot.",
    "summary": "A quick and healthy vegetable stir fry with Asian flavors.",
    "readyInMinutes": 15,
    "servings": 4,
    "sourceUrl": "",
    "diets": ["Vegan"],
    "dishTypes": ["Lunch"],
    "extendedIngredients": [
      { "id": 201, "name": "Broccoli", "amount": 1, "unit": "head", "original": "1 head Broccoli" },
      { "id": 202, "name": "Carrots", "amount": 2, "unit": "", "original": "2 Carrots" },
      { "id": 203, "name": "Bell Peppers", "amount": 2, "unit": "", "original": "2 Bell Peppers" },
      { "id": 204, "name": "Soy Sauce", "amount": 2, "unit": "tbsp", "original": "2 tbsp Soy Sauce" },
      { "id": 205, "name": "Garlic", "amount": 3, "unit": "cloves", "original": "3 cloves Garlic" },
      { "id": 206, "name": "Ginger", "amount": 1, "unit": "tbsp", "original": "1 tbsp Ginger" }
    ],
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          { 
            "number": 1, 
            "step": "Chop all vegetables into bite-sized pieces.", 
            "ingredients": [
              {"id": 201, "name": "Broccoli", "amount": 1, "unit": "head", "original": "1 head Broccoli"}, 
              {"id": 202, "name": "Carrots", "amount": 2, "unit": "", "original": "2 Carrots"}, 
              {"id": 203, "name": "Bell Peppers", "amount": 2, "unit": "", "original": "2 Bell Peppers"}
            ], 
            "equipment": [] 
          },
          { 
            "number": 2, 
            "step": "Heat oil in a wok or large pan.", 
            "ingredients": [], 
            "equipment": [] 
          },
          { 
            "number": 3, 
            "step": "Add minced garlic and ginger, stir-fry for 30 seconds.", 
            "ingredients": [
              {"id": 205, "name": "Garlic", "amount": 3, "unit": "cloves", "original": "3 cloves Garlic"}, 
              {"id": 206, "name": "Ginger", "amount": 1, "unit": "tbsp", "original": "1 tbsp Ginger"}
            ], 
            "equipment": [] 
          },
          { 
            "number": 4, 
            "step": "Add vegetables and stir-fry until tender-crisp.", 
            "ingredients": [], 
            "equipment": [] 
          },
          { 
            "number": 5, 
            "step": "Add soy sauce, stir well, and serve hot.", 
            "ingredients": [{"id": 204, "name": "Soy Sauce", "amount": 2, "unit": "tbsp", "original": "2 tbsp Soy Sauce"}], 
            "equipment": [] 
          }
        ]
      }
    ]
  },
  {
    "id": "3",
    "title": "Chicken Caesar Salad",
    "image": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1000&auto=format&fit=crop",
    "ingredients": ["Chicken Breast", "Romaine Lettuce", "Caesar Dressing", "Croutons", "Parmesan Cheese"],
    "instructions": "Grill chicken. Toss lettuce with dressing, croutons, and cheese. Slice chicken and add to salad. Serve fresh.",
    "summary": "A refreshing salad with grilled chicken, crisp romaine lettuce, and classic Caesar dressing.",
    "readyInMinutes": 25,
    "servings": 2,
    "sourceUrl": "",
    "diets": ["Non-Vegetarian"],
    "dishTypes": ["Lunch"],
    "extendedIngredients": [
      { "id": 301, "name": "Chicken Breast", "amount": 2, "unit": "", "original": "2 Chicken Breasts" },
      { "id": 302, "name": "Romaine Lettuce", "amount": 1, "unit": "head", "original": "1 head Romaine Lettuce" },
      { "id": 303, "name": "Caesar Dressing", "amount": 4, "unit": "tbsp", "original": "4 tbsp Caesar Dressing" },
      { "id": 304, "name": "Croutons", "amount": 1, "unit": "cup", "original": "1 cup Croutons" },
      { "id": 305, "name": "Parmesan Cheese", "amount": 0.25, "unit": "cup", "original": "1/4 cup Parmesan Cheese" }
    ],
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          { 
            "number": 1, 
            "step": "Season chicken breasts with salt and pepper.", 
            "ingredients": [{"id": 301, "name": "Chicken Breast", "amount": 2, "unit": "", "original": "2 Chicken Breasts"}], 
            "equipment": [] 
          },
          { 
            "number": 2, 
            "step": "Grill chicken until fully cooked, about 6-7 minutes per side.", 
            "ingredients": [], 
            "equipment": [] 
          },
          { 
            "number": 3, 
            "step": "Wash and chop romaine lettuce.", 
            "ingredients": [{"id": 302, "name": "Romaine Lettuce", "amount": 1, "unit": "head", "original": "1 head Romaine Lettuce"}], 
            "equipment": [] 
          },
          { 
            "number": 4, 
            "step": "Toss lettuce with dressing, croutons, and cheese.", 
            "ingredients": [
              {"id": 303, "name": "Caesar Dressing", "amount": 4, "unit": "tbsp", "original": "4 tbsp Caesar Dressing"}, 
              {"id": 304, "name": "Croutons", "amount": 1, "unit": "cup", "original": "1 cup Croutons"}, 
              {"id": 305, "name": "Parmesan Cheese", "amount": 0.25, "unit": "cup", "original": "1/4 cup Parmesan Cheese"}
            ], 
            "equipment": [] 
          },
          { 
            "number": 5, 
            "step": "Slice chicken and arrange on top of salad. Serve immediately.", 
            "ingredients": [], 
            "equipment": [] 
          }
        ]
      }
    ]
  },
  // The rest of the recipes...
  // Adding a few more with complete details to ensure proper functionality
  {
    "id": "4",
    "title": "Oatmeal with Fruits",
    "image": "https://images.unsplash.com/photo-1517747614396-d21a139daaa0?q=80&w=1000&auto=format&fit=crop",
    "ingredients": ["Oats", "Milk", "Banana", "Blueberries", "Honey"],
    "instructions": "Cook oats with milk. Top with banana, blueberries, and honey. Serve warm.",
    "summary": "A nutritious breakfast of creamy oatmeal topped with fresh fruits and honey.",
    "readyInMinutes": 10,
    "servings": 1,
    "sourceUrl": "",
    "diets": ["Vegetarian"],
    "dishTypes": ["Breakfast"],
    "extendedIngredients": [
      { "id": 401, "name": "Oats", "amount": 0.5, "unit": "cup", "original": "1/2 cup Oats" },
      { "id": 402, "name": "Milk", "amount": 1, "unit": "cup", "original": "1 cup Milk" },
      { "id": 403, "name": "Banana", "amount": 1, "unit": "", "original": "1 Banana" },
      { "id": 404, "name": "Blueberries", "amount": 0.25, "unit": "cup", "original": "1/4 cup Blueberries" },
      { "id": 405, "name": "Honey", "amount": 1, "unit": "tbsp", "original": "1 tbsp Honey" }
    ],
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          { 
            "number": 1, 
            "step": "Combine oats and milk in a saucepan.", 
            "ingredients": [
              {"id": 401, "name": "Oats", "amount": 0.5, "unit": "cup", "original": "1/2 cup Oats"}, 
              {"id": 402, "name": "Milk", "amount": 1, "unit": "cup", "original": "1 cup Milk"}
            ], 
            "equipment": [] 
          },
          { 
            "number": 2, 
            "step": "Bring to a boil, then reduce heat and simmer for 5 minutes, stirring occasionally.", 
            "ingredients": [], 
            "equipment": [] 
          },
          { 
            "number": 3, 
            "step": "Pour into a bowl.", 
            "ingredients": [], 
            "equipment": [] 
          },
          { 
            "number": 4, 
            "step": "Slice banana and arrange on top with blueberries.", 
            "ingredients": [
              {"id": 403, "name": "Banana", "amount": 1, "unit": "", "original": "1 Banana"}, 
              {"id": 404, "name": "Blueberries", "amount": 0.25, "unit": "cup", "original": "1/4 cup Blueberries"}
            ], 
            "equipment": [] 
          },
          { 
            "number": 5, 
            "step": "Drizzle with honey and serve warm.", 
            "ingredients": [{"id": 405, "name": "Honey", "amount": 1, "unit": "tbsp", "original": "1 tbsp Honey"}], 
            "equipment": [] 
          }
        ]
      }
    ]
  },
  {
    "id": "5",
    "title": "Grilled Salmon",
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop",
    "ingredients": ["Salmon Fillet", "Olive Oil", "Lemon", "Garlic", "Salt", "Pepper"],
    "instructions": "Marinate salmon with olive oil, lemon, garlic, salt, and pepper. Grill until cooked. Serve hot.",
    "summary": "Perfectly grilled salmon with a simple marinade of olive oil, lemon, and garlic.",
    "readyInMinutes": 20,
    "servings": 2,
    "sourceUrl": "",
    "diets": ["Non-Vegetarian"],
    "dishTypes": ["Dinner"],
    "extendedIngredients": [
      { "id": 501, "name": "Salmon Fillet", "amount": 2, "unit": "", "original": "2 Salmon Fillets" },
      { "id": 502, "name": "Olive Oil", "amount": 2, "unit": "tbsp", "original": "2 tbsp Olive Oil" },
      { "id": 503, "name": "Lemon", "amount": 1, "unit": "", "original": "1 Lemon" },
      { "id": 504, "name": "Garlic", "amount": 2, "unit": "cloves", "original": "2 cloves Garlic" },
      { "id": 505, "name": "Salt", "amount": 0.5, "unit": "tsp", "original": "1/2 tsp Salt" },
      { "id": 506, "name": "Pepper", "amount": 0.25, "unit": "tsp", "original": "1/4 tsp Pepper" }
    ],
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          { 
            "number": 1, 
            "step": "In a bowl, combine olive oil, lemon juice, minced garlic, salt, and pepper.", 
            "ingredients": [
              {"id": 502, "name": "Olive Oil", "amount": 2, "unit": "tbsp", "original": "2 tbsp Olive Oil"}, 
              {"id": 503, "name": "Lemon", "amount": 1, "unit": "", "original": "1 Lemon"}, 
              {"id": 504, "name": "Garlic", "amount": 2, "unit": "cloves", "original": "2 cloves Garlic"}, 
              {"id": 505, "name": "Salt", "amount": 0.5, "unit": "tsp", "original": "1/2 tsp Salt"}, 
              {"id": 506, "name": "Pepper", "amount": 0.25, "unit": "tsp", "original": "1/4 tsp Pepper"}
            ], 
            "equipment": [] 
          },
          { 
            "number": 2, 
            "step": "Place salmon fillets in the marinade and let sit for 10 minutes.", 
            "ingredients": [{"id": 501, "name": "Salmon Fillet", "amount": 2, "unit": "", "original": "2 Salmon Fillets"}], 
            "equipment": [] 
          },
          { 
            "number": 3, 
            "step": "Preheat grill to medium-high heat.", 
            "ingredients": [], 
            "equipment": [] 
          },
          { 
            "number": 4, 
            "step": "Grill salmon for 4-5 minutes per side, until cooked through.", 
            "ingredients": [], 
            "equipment": [] 
          },
          { 
            "number": 5, 
            "step": "Serve hot with lemon wedges on the side.", 
            "ingredients": [], 
            "equipment": [] 
          }
        ]
      }
    ]
  }
];

export default recipeData;
