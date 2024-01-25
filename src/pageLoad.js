
const mainContainer = document.getElementById('content');
export {loadContent};
//Add a function that triggers upon page loading
function loadContent(){
    const leftSide = document.createElement('div');
    leftSide.className = 'left-side';
    mainContainer.appendChild(leftSide);

    const restaurantHeader = document.createElement('h2');
    restaurantHeader.textContent = 'Bento City';
    leftSide.appendChild(restaurantHeader);

    const bentoImg = document.createElement('img');
    bentoImg.src = '../src/bento.jpg';
    leftSide.appendChild(bentoImg);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Delve into the exquisite world of culinary delight with the bento box dish before you—a symphony of flavors meticulously curated to tantalize your taste buds. As you open the box, a visual feast unfolds, revealing perfectly arranged morsels of culinary craftsmanship. Savor the succulent teriyaki-glazed salmon, its delicate flakes melting in your mouth, harmonizing with the aromatic jasmine rice that absorbs the essence of a rich miso broth. Crispy tempura vegetables add a delightful crunch, while vibrant pickled ginger and daikon radish provide a refreshing counterbalance. The bento box invites you on a culinary journey, where each bite is a celebration of freshness, precision, and the artistry of Japanese cuisine. Embark on this gastronomic adventure, and let the vibrant colors and exquisite textures transport you to a realm where every flavor is an enchanting note in a delectable symphony.';
    mainContainer.appendChild(paragraph)
}





    


