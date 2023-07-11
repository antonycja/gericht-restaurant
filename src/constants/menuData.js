import menuImages from "./Images";

const menuData = [
  {
    menuImg: menuImages.bar,
    promoImg: menuImages.barPromotion,
    title: "Bar",
    promotionLeft: {
      promoTitle: "wine & beer",
      contents: [
        {
          itemName: "Chapel Hill Shiraz",
          itemPrice: "56.00",
          itemTag: ["AU", "Bottle"],
        },
        {
          itemName: "Catena Malbec",
          itemPrice: "59.00",
          itemTag: ["AR", "Bottle"],
        },
        {
          itemName: "La Vieille Rosé",
          itemPrice: "44.00",
          itemTag: ["FR", "750 ml"],
        },
        {
          itemName: "Rhino Pale Ale",
          itemPrice: "31.00",
          itemTag: ["CA", "750 ml"],
        },
        {
          itemName: "Irish Guinness",
          itemPrice: "26.00",
          itemTag: ["IE", "750 ml"],
        },
      ],
    },
    promotionRight: {
      promoTitle: "Cocktails",
      contents: [
        {
          itemName: "Aperol Spritz",
          itemPrice: "20.00",
          itemTag: ["Aperol", "Villa Marchesi prosecco", "soda", "30ml"],
        },
        {
          itemName: "Dark 'N' Stormy",
          itemPrice: "16.00",
          itemTag: ["Dark rum", "Ginger beer", "Slice of lime"],
        },
        {
          itemName: "Daiquiri",
          itemPrice: "10.00",
          itemTag: ["Rum", "Citrus juice", "Sugar"],
        },
        {
          itemName: "Old Fashioned",
          itemPrice: "31.00",
          itemTag: ["Bourbon", "Brown sugar", "Angostura Bitters"],
        },
        {
          itemName: "Negroni",
          itemPrice: "26.00",
          itemTag: ["Gin", "Sweet Vermouth", "Campari", "Orange garnish"],
        },
      ],
    },
  },
  {
    menuImg: menuImages.dinner,
    promoImg: menuImages.dinnerPromotion,
    title: "Food",
    promotionLeft: {
      promoTitle: "meals & foods",
      contents: [
        {
          itemName: "Grilled Steak",
          itemPrice: "34.99",
          itemTag: [
            "Prime Rib",
            "Garlic Butter",
            "Mashed Potatoes",
            "Grilled Vegetables",
          ],
        },
        {
          itemName: "Roasted Chicken",
          itemPrice: "29.99",
          itemTag: [
            "Herb Seasoning",
            "Crispy Skin",
            "Roasted Potatoes",
            "Steamed Broccoli",
          ],
        },
        {
          itemName: "Pasta Carbonara",
          itemPrice: "24.99",
          itemTag: [
            "Creamy Sauce",
            "Crispy Bacon",
            "Parmesan Cheese",
            "Fresh Parsley",
          ],
        },
        {
          itemName: "Salmon Fillet",
          itemPrice: "32.99",
          itemTag: [
            "Citrus Glaze",
            "Quinoa Salad",
            "Roasted Asparagus",
            "Lemon Wedges",
          ],
        },
        {
          itemName: "Vegetable Stir-Fry",
          itemPrice: "24.99",
          itemTag: ["Mixed Vegetables", "Soy Sauce", "Garlic", "Ginger"],
        },
      ],
    },
    promotionRight: {
      promoTitle: "Snacks",
      contents: [
        {
          itemName: "Nachos Supreme",
          itemPrice: "12.99",
          itemTag: ["Cheese", "Guacamole", "Sour Cream", "Jalapenos"],
        },
        {
          itemName: "Buffalo Wings",
          itemPrice: "10.99",
          itemTag: ["Spicy", "Chicken", "Blue Cheese Dip", "Celery"],
        },
        {
          itemName: "Caprese Salad",
          itemPrice: "8.99",
          itemTag: ["Tomatoes", "Mozzarella", "Basil", "Balsamic Glaze"],
        },
        {
          itemName: "Chocolate Brownie",
          itemPrice: "6.99",
          itemTag: ["Decadent", "Rich", "Vanilla Ice Cream", "Chocolate Sauce"],
        },
        {
          itemName: "Mozzarella Sticks",
          itemPrice: "7.99",
          itemTag: ["Cheese", "Crispy", "Marinara Sauce"],
        },
      ],
    },
  },
  {
    menuImg: menuImages.dessert,
    promoImg: menuImages.dessertPromotion,
    title: "Desserts",
    promotionLeft: {
      promoTitle: "desserts",
      contents: [
        {
          itemName: "Chocolate Brownie",
          itemPrice: "6.99",
          itemTag: [
            "Rich Chocolate",
            "Walnuts",
            "Vanilla Ice Cream",
            "Chocolate Sauce",
          ],
        },
        {
          itemName: "Cheesecake",
          itemPrice: "8.99",
          itemTag: [
            "Creamy Texture",
            "Graham Cracker Crust",
            "Fruit Topping",
            "Whipped Cream",
          ],
        },
        {
          itemName: "Strawberry Shortcake",
          itemPrice: "7.99",
          itemTag: [
            "Fresh Strawberries",
            "Sponge Cake",
            "Whipped Cream",
            "Mint Leaves",
          ],
        },
        {
          itemName: "Tiramisu",
          itemPrice: "9.99",
          itemTag: [
            "Espresso-Soaked Ladyfingers",
            "Mascarpone Cream",
            "Cocoa Powder",
            "Amaretto",
          ],
        },
        {
          itemName: "Fruit Tart",
          itemPrice: "6.99",
          itemTag: [
            "Butter Pastry",
            "Vanilla Custard",
            "Assorted Fruits",
            "Apricot Glaze",
          ],
        },
      ],
    },
    promotionRight: {
      promoTitle: "shakes",
      contents: [
        {
          itemName: "Mango Lassi",
          itemPrice: "4.99",
          itemTag: ["Fresh Mango", "Yogurt", "Cardamom", "Honey"],
        },
        {
          itemName: "Chocolate Milkshake",
          itemPrice: "5.99",
          itemTag: [
            "Chocolate Ice Cream",
            "Milk",
            "Whipped Cream",
            "Chocolate Shavings",
          ],
        },
        {
          itemName: "Strawberry Smoothie",
          itemPrice: "4.99",
          itemTag: ["Fresh Strawberries", "Yogurt", "Honey", "Ice"],
        },
        {
          itemName: "Vanilla Frappuccino",
          itemPrice: "6.99",
          itemTag: ["Vanilla Syrup", "Espresso", "Milk", "Whipped Cream"],
        },
        {
          itemName: "Caramel Macchiato",
          itemPrice: "5.99",
          itemTag: [
            "Espresso",
            "Steamed Milk",
            "Caramel Sauce",
            "Vanilla Syrup",
          ],
        },
      ],
    },
  },
];

export default menuData;
