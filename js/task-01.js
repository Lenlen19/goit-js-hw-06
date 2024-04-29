let categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

for (let category of categories) {
  console.log(`Category: ${category.firstElementChild.innerText}`);
  console.log(
    `Element: ${category.firstElementChild.nextElementSibling.children.length}`
  );
}
