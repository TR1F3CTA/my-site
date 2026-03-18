const products = [
  {
    name: "スニーカー",
    price: 8900,
    img: "https://picsum.photos/300?1"
  },
  {
    name: "腕時計",
    price: 12000,
    img: "https://picsum.photos/300?2"
  },
  {
    name: "バッグ",
    price: 6500,
    img: "https://picsum.photos/300?3"
  },
  {
    name: "イヤホン",
    price: 9800,
    img: "https://picsum.photos/300?4"
  }
];

const list = document.getElementById("productList");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.img}">
    <h2>${product.name}</h2>
    <p class="price">¥${product.price}</p>
    <button class="buy">カートに追加</button>
  `;

  list.appendChild(card);
});

/* ダークモード切替 */
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};