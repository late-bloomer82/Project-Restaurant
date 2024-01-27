import aboutUrl from './images/40fd567d8c7e9a23e587b0c887ac4f91.jpg';
import bentoUrl from './images/94fa6bc486ab8b54764842ea55c17658.jpg';
import kidUrl from './images/976c5e7ac2c16219097e01688404af85.jpg';
import healthyUrl from './images/31682bd04808f6e5d5b06011dc076f1a.jpg';
import classicUrl from './images/e85d5ca86f4a369b8e4ef6322981f1aa.jpg';

const mainContainer = document.getElementById('content');
export {loadContent};
export {createMenu};
export {createAbout};

//Add a function that triggers upon page loading
function loadContent(){
    mainContainer.innerHTML = '';
    const leftSide = document.createElement('div');
    leftSide.className = 'left-side';
    mainContainer.appendChild(leftSide);

    const restaurantHeader = document.createElement('h2');
    restaurantHeader.textContent = 'Bento City';
    leftSide.appendChild(restaurantHeader);

    const bentoImg = document.createElement('img');
    bentoImg.src = bentoUrl;
    leftSide.appendChild(bentoImg);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Delve into the exquisite world of culinary delight with the bento box dish before you—a symphony of flavors meticulously curated to tantalize your taste buds. As you open the box, a visual feast unfolds, revealing perfectly arranged morsels of culinary craftsmanship. Savor the succulent teriyaki-glazed salmon, its delicate flakes melting in your mouth, harmonizing with the aromatic jasmine rice that absorbs the essence of a rich miso broth. Crispy tempura vegetables add a delightful crunch, while vibrant pickled ginger and daikon radish provide a refreshing counterbalance. The bento box invites you on a culinary journey, where each bite is a celebration of freshness, precision, and the artistry of Japanese cuisine. Embark on this gastronomic adventure, and let the vibrant colors and exquisite textures transport you to a realm where every flavor is an enchanting note in a delectable symphony.';
    mainContainer.appendChild(paragraph)

    mainContainer.style.display = 'flex';
    mainContainer.style.flexDirection = 'row';
    mainContainer.style.gap = '200px';
    mainContainer.style.marginTop = '100px';
    
}


function createMenu(){
    mainContainer.innerHTML = '';

    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Menu';
    mainContainer.appendChild(menuHeader);
    
    const menuContainer = document.createElement('div')
    mainContainer.appendChild(menuContainer);
    
    //1st dish
   
    const kidContainer = document.createElement('div')
    kidContainer.className = 'dishContainer'
    const kidBox = document.createElement('img');
    kidBox.src = kidUrl;
    kidBox.style.width = '350px';
    kidBox.style.height = '400px';

    const kidHeader = document.createElement('h3');
    kidHeader.textContent = 'Kid Box';
    kidContainer.appendChild(kidHeader);

    const kidDescription = document.createElement('p')
    kidDescription.textContent = 'Crafted with love, the kids bento lunch box is a culinary adventure designed to captivate both taste buds and imaginations. Nestled within its compartments are delightful treasures like adorable panda-shaped rice balls, made with fluffy white rice seasoned with a hint of soy sauce. The main dish features bite-sized chicken teriyaki skewers, glazed to perfection with a sweet and savory teriyaki sauce that is sure to be a hit. Surrounding the centerpiece are colorful veggie sticks, including crisp carrot coins and cucumber slices, adding a refreshing crunch to every bite. Sweetness comes in the form of juicy watermelon chunks and plump grapes, offering a naturally sweet conclusion to the meal. For a playful twist, mini sandwiches with peanut butter and jelly are tucked into a corner, ensuring a familiar favorite in a charming bite-sized form. This bento lunch box not only nourishes growing bodies but also sparks joy with its array of flavors, textures, and whimsical shapes.'
    kidContainer.appendChild(kidBox);
    kidContainer.appendChild(kidDescription);
    menuContainer.appendChild(kidContainer);

    //2nd dish
    const classicContainer = document.createElement('div')
    classicContainer.className = 'dishContainer'
    const classicBox = document.createElement('img');
    classicBox.src = classicUrl;
    classicBox.style.width = '350px';
    classicBox.style.height = '400px';

    const classicHeader = document.createElement('h3');
    classicHeader.textContent = 'Classic Box';
    classicContainer.appendChild(classicHeader);
    
    const classicDescription = document.createElement('p')
    classicDescription.textContent = 'A classic bento box is a culinary masterpiece that pays homage to the timeless artistry of Japanese cuisine. Elegant and balanced, this traditional lunch box presents an array of carefully curated flavors and textures. At its heart lies a bed of perfectly seasoned sushi rice, adorned with slices of succulent teriyaki-glazed chicken and delicate tamagoyaki (sweet Japanese omelet). The symphony of tastes extends to meticulously arranged sides, featuring crisp and vibrant pickled vegetables that provide a delightful contrast. A duo of gyoza, plump and savory, adds a touch of indulgence to the ensemble. The medley of tastes is further enhanced with a side of miso soup, rich in umami goodness. The classic bento box is a testament to culinary finesse, offering a harmonious blend of traditional Japanese flavors that transport the diner to a realm where every bite is a celebration of freshness, precision, and the time-honored artistry of bento craftsmanship.'
    classicContainer.appendChild(classicBox);
    classicContainer.appendChild(classicDescription);
    menuContainer.appendChild(classicContainer);

    //3rd dish
    const healthyContainer = document.createElement('div')
    healthyContainer.className = 'dishContainer'
    const healthyBox = document.createElement('img');
    healthyBox.src = healthyUrl;
    healthyBox.style.width = '350px';
    healthyBox.style.height = '400px';

    const healthyHeader = document.createElement('h3');
    healthyHeader.textContent = 'Health Box';
    healthyContainer.appendChild(healthyHeader);

    const healthyDescription = document.createElement('p')
    healthyDescription.textContent = 'The healthy-style bento box is a nutritious feast designed to nourish both the body and soul. Bursting with wholesome goodness, this bento embraces a colorful palette of nutrient-rich ingredients. At its core lies a bed of quinoa, a protein-packed grain that forms the foundation for a nourishing meal. Grilled salmon, seasoned with zesty lemon and herbs, takes center stage, offering omega-3 fatty acids for heart health. Surrounding the main dish are vibrant, fiber-rich vegetables, including crisp broccoli florets, cherry tomatoes bursting with freshness, and slices of avocado for a creamy touch. A side of edamame beans adds plant-based protein and a satisfying crunch. The ensemble is garnished with a drizzle of light sesame dressing, bringing all the elements together with a burst of flavor. This healthy-style bento box is not just a meal; it is a wellness journey, inviting you to savor the goodness of nature in every nourishing bite'
    healthyContainer.appendChild(healthyBox);
    healthyContainer.appendChild(healthyDescription);
    menuContainer.appendChild(healthyContainer);
    
    //Styling the menu layout.

    mainContainer.style.display = 'flex';
    mainContainer.style.flexDirection = 'column'
    mainContainer.style.marginTop = '0';
    mainContainer.style.gap = '40px';

    menuContainer.style.display = 'flex';
    menuContainer.style.gap = '50px'
    

}



function createAbout(){
    mainContainer.innerHTML = '';

    const aboutImage = document.createElement('img');
    aboutImage.src = aboutUrl;

    aboutImage.style.width = '400px';
    aboutImage.style.height = '400px';
    mainContainer.appendChild(aboutImage);

    const informationContainer = document.createElement('div')
    mainContainer.appendChild(informationContainer);

    const aboutContainer = document.createElement('div');
    informationContainer.appendChild(aboutContainer);

    const aboutHeader = document.createElement('h2');
    aboutHeader.textContent = 'About Us';
    aboutContainer.appendChild(aboutHeader);

    const aboutParagraph = document.createElement('p')
    aboutParagraph.textContent = 'Welcome to Bento City, where culinary artistry meets the time-honored tradition of bento craftsmanship. Nestled in the heart of downtown Montreal, our restaurant is a celebration of Japanese culinary excellence, offering a symphony of flavors meticulously curated in our signature bento boxes. At Bento City, we pride ourselves on using only the finest and freshest ingredients to create a wholesome and delightful dining experience. Our menu reflects a harmonious blend of traditional and innovative dishes, featuring a diverse range of sushi, savory teriyaki, and artfully arranged bento combinations. Whether you are seeking a quick and nutritious lunch or a leisurely dinner with friends and family, our dedicated team is committed to delivering impeccable service and an unforgettable culinary journey. Join us at Bento City and savor the essence of Japanese cuisine in every meticulously crafted bento box.';
    aboutContainer.appendChild(aboutParagraph);

    const contactContainer = document.createElement('div')
    informationContainer.appendChild(contactContainer);

    const contactHeader = document.createElement('h3');
    contactHeader.textContent = 'Contact Us';
    contactContainer.appendChild(contactHeader);

    const email = document.createElement('p');
    email.textContent = 'Email : bentoDatebayo@gmail.jk';
    contactContainer.appendChild(email);


    const phone = document.createElement('p');
    phone.textContent = '509-0000-911';
    contactContainer.appendChild(phone);

    const location = document.createElement('p');
    location.textContent = '123 Sakura Street, Plateau-Mont-Royal, Montreal, Quebec, H2W 1M9, Canada';
    contactContainer.appendChild(location);
    
    //Layout
    mainContainer.style.display = 'flex';
    mainContainer.style.flexDirection = 'column';
    mainContainer.style.marginTop ='100px'
    mainContainer.style.gap = '40px';

    informationContainer.style.display = 'flex';
    informationContainer.style.gap = '150px';

    contactContainer.style.marginTop = '100px';
    


}


    


