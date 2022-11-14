const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// 1. BÖLÜM
//-----------------------------------------------------------------------------
// Menu class array içerisindeki objelerin kategori isimlerinin elde edilmesi ve "btn-container" class div'in içerisine buton olarak gönderilmesi.

const btnContainer = document.querySelector("div.btn-container");
const menuItemCategories = [...new Set(menu.map((element) => element.category))];
menuItemCategories.unshift("All");

for (let index = 0; index < menuItemCategories.length; index++) {
  const btnItem = document.createElement("button");
  btnItem.classList.add("btn-item");
  btnItem.innerText = menuItemCategories[index];
  btnContainer.appendChild(btnItem);
}

// 2. BÖLÜM
//-----------------------------------------------------------------------------
// Menu item'larının menu class array içerisindeki objelere göre oluşturulması.
/*
 *                            menuItemImg
 * containerRow > menuItems >                | menuItemText
 *                            menuItemInfo > |                 | menuItemTitleText
 *                                           | menuItemTitle > |
 *                                                             | menuItemTitlePrice
 */

const containerRow = document.querySelector("div.row");

for (let index = 0; index < menu.length; index++) {
  // Menu items
  const menuItems = document.createElement("div");
  menuItems.classList.add("col-lg-6", "menu-items", `${menu[index].category}`);
  containerRow.appendChild(menuItems);

  // Menu item image
  const menuItemImg = document.createElement("img");
  menuItemImg.classList.add("photo");
  menuItemImg.src = menu[index].img;
  menuItems.appendChild(menuItemImg);

  // Menu item info
  const menuItemInfo = document.createElement("div");
  menuItemInfo.classList.add("menu-info");
  menuItems.appendChild(menuItemInfo);

  // Menu title
  const menuItemTitle = document.createElement("div");
  menuItemTitle.classList.add("menu-title");
  menuItemInfo.appendChild(menuItemTitle);
  const menuItemTitleText = document.createElement("h4");
  menuItemTitleText.innerText = menu[index].title;
  menuItemTitle.appendChild(menuItemTitleText);
  const menuItemTitlePrice = document.createElement("h4");
  menuItemTitlePrice.innerText = menu[index].price;
  menuItemTitle.appendChild(menuItemTitlePrice);

  // Menu text
  const menuItemText = document.createElement("p");
  menuItemText.classList.add("menu-text");
  menuItemText.innerText = menu[index].desc;
  menuItemInfo.appendChild(menuItemText);
}

// 3. BÖLÜM
//-----------------------------------------------------------------------------
// Menu item'larının kategori isimlerine göre filitre edilmesi.

const btnItems = btnContainer.childNodes;
for (const button of btnItems) {
  if (button.innerText == "All") {
    button.classList.add("btn-item-active");
  }
  button.addEventListener("click", buttonClick);
}

function buttonClick() {
  const menuItems = document.querySelectorAll("div.row > *");

  menuItems.forEach((element) => {
    if (element.className.includes("d-none")) {
      element.classList.remove("d-none");
    }
  });

  if (this.innerText !== "All") {
    menuItems.forEach((element) => {
      if (!element.className.includes(this.innerText)) {
        element.classList.add("d-none");
      }
    });
  }

  btnItems.forEach((element) => {
    if (element.className.includes("btn-item-active")) {
      element.classList.remove("btn-item-active");
    }
  });

  this.classList.add("btn-item-active");
}
