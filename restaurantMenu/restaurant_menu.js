const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict- $22', 'Oatmeal- $21.99', 'Frittata- $15'];
const mainCourseMenu = ['Steak- $112', 'Pasta- $102', 'Burger- $120', 'Salmon- $210'];
const dessertMenu = ['Cake- $12', 'Ice Cream- $12', 'Pudding- $12', 'Fruit Salad- $12'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;