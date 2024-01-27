(()=>{"use strict";const e=document.getElementById("content");function t(){e.innerHTML="";const t=document.createElement("div");t.className="left-side",e.appendChild(t);const n=document.createElement("h2");n.textContent="Bento City",t.appendChild(n);const a=document.createElement("img");a.src="../src/bento.jpg",t.appendChild(a);const i=document.createElement("p");i.textContent="Delve into the exquisite world of culinary delight with the bento box dish before you—a symphony of flavors meticulously curated to tantalize your taste buds. As you open the box, a visual feast unfolds, revealing perfectly arranged morsels of culinary craftsmanship. Savor the succulent teriyaki-glazed salmon, its delicate flakes melting in your mouth, harmonizing with the aromatic jasmine rice that absorbs the essence of a rich miso broth. Crispy tempura vegetables add a delightful crunch, while vibrant pickled ginger and daikon radish provide a refreshing counterbalance. The bento box invites you on a culinary journey, where each bite is a celebration of freshness, precision, and the artistry of Japanese cuisine. Embark on this gastronomic adventure, and let the vibrant colors and exquisite textures transport you to a realm where every flavor is an enchanting note in a delectable symphony.",e.appendChild(i),e.style.display="flex",e.style.flexDirection="row",e.style.gap="200px",e.style.marginTop="100px"}const n=document.getElementById("home"),a=document.getElementById("menu"),i=document.getElementById("about");document.addEventListener("DOMContentLoaded",t),n.addEventListener("click",t),a.addEventListener("click",(function(){e.innerHTML="";const t=document.createElement("h2");t.textContent="Menu",e.appendChild(t);const n=document.createElement("div");e.appendChild(n);const a=document.createElement("div");a.className="dishContainer";const i=document.createElement("img");i.src="../src/kidBento.jpg",i.style.width="350px",i.style.height="400px";const o=document.createElement("h3");o.textContent="Kid Box",a.appendChild(o);const s=document.createElement("p");s.textContent="Crafted with love, the kids bento lunch box is a culinary adventure designed to captivate both taste buds and imaginations. Nestled within its compartments are delightful treasures like adorable panda-shaped rice balls, made with fluffy white rice seasoned with a hint of soy sauce. The main dish features bite-sized chicken teriyaki skewers, glazed to perfection with a sweet and savory teriyaki sauce that is sure to be a hit. Surrounding the centerpiece are colorful veggie sticks, including crisp carrot coins and cucumber slices, adding a refreshing crunch to every bite. Sweetness comes in the form of juicy watermelon chunks and plump grapes, offering a naturally sweet conclusion to the meal. For a playful twist, mini sandwiches with peanut butter and jelly are tucked into a corner, ensuring a familiar favorite in a charming bite-sized form. This bento lunch box not only nourishes growing bodies but also sparks joy with its array of flavors, textures, and whimsical shapes.",a.appendChild(i),a.appendChild(s),n.appendChild(a);const r=document.createElement("div");r.className="dishContainer";const l=document.createElement("img");l.src="../src/classicBentoBox.jpg",l.style.width="350px",l.style.height="400px";const d=document.createElement("h3");d.textContent="Classic Box",r.appendChild(d);const c=document.createElement("p");c.textContent="A classic bento box is a culinary masterpiece that pays homage to the timeless artistry of Japanese cuisine. Elegant and balanced, this traditional lunch box presents an array of carefully curated flavors and textures. At its heart lies a bed of perfectly seasoned sushi rice, adorned with slices of succulent teriyaki-glazed chicken and delicate tamagoyaki (sweet Japanese omelet). The symphony of tastes extends to meticulously arranged sides, featuring crisp and vibrant pickled vegetables that provide a delightful contrast. A duo of gyoza, plump and savory, adds a touch of indulgence to the ensemble. The medley of tastes is further enhanced with a side of miso soup, rich in umami goodness. The classic bento box is a testament to culinary finesse, offering a harmonious blend of traditional Japanese flavors that transport the diner to a realm where every bite is a celebration of freshness, precision, and the time-honored artistry of bento craftsmanship.",r.appendChild(l),r.appendChild(c),n.appendChild(r);const h=document.createElement("div");h.className="dishContainer";const u=document.createElement("img");u.src="../src/healthyBentoBox.jpg",u.style.width="350px",u.style.height="400px";const m=document.createElement("h3");m.textContent="Health Box",h.appendChild(m);const p=document.createElement("p");p.textContent="The healthy-style bento box is a nutritious feast designed to nourish both the body and soul. Bursting with wholesome goodness, this bento embraces a colorful palette of nutrient-rich ingredients. At its core lies a bed of quinoa, a protein-packed grain that forms the foundation for a nourishing meal. Grilled salmon, seasoned with zesty lemon and herbs, takes center stage, offering omega-3 fatty acids for heart health. Surrounding the main dish are vibrant, fiber-rich vegetables, including crisp broccoli florets, cherry tomatoes bursting with freshness, and slices of avocado for a creamy touch. A side of edamame beans adds plant-based protein and a satisfying crunch. The ensemble is garnished with a drizzle of light sesame dressing, bringing all the elements together with a burst of flavor. This healthy-style bento box is not just a meal; it is a wellness journey, inviting you to savor the goodness of nature in every nourishing bite",h.appendChild(u),h.appendChild(p),n.appendChild(h),e.style.display="flex",e.style.flexDirection="column",e.style.marginTop="0",e.style.gap="40px",n.style.display="flex",n.style.gap="50px"})),i.addEventListener("click",(function(){e.innerHTML="";const t=document.createElement("img");t.src="../src/aboutImage.jpg",t.style.width="400px",t.style.height="400px",e.appendChild(t);const n=document.createElement("div");e.appendChild(n);const a=document.createElement("div");n.appendChild(a);const i=document.createElement("h2");i.textContent="About Us",a.appendChild(i);const o=document.createElement("p");o.textContent="Welcome to Bento City, where culinary artistry meets the time-honored tradition of bento craftsmanship. Nestled in the heart of downtown Montreal, our restaurant is a celebration of Japanese culinary excellence, offering a symphony of flavors meticulously curated in our signature bento boxes. At Bento City, we pride ourselves on using only the finest and freshest ingredients to create a wholesome and delightful dining experience. Our menu reflects a harmonious blend of traditional and innovative dishes, featuring a diverse range of sushi, savory teriyaki, and artfully arranged bento combinations. Whether you are seeking a quick and nutritious lunch or a leisurely dinner with friends and family, our dedicated team is committed to delivering impeccable service and an unforgettable culinary journey. Join us at Bento City and savor the essence of Japanese cuisine in every meticulously crafted bento box.",a.appendChild(o);const s=document.createElement("div");n.appendChild(s);const r=document.createElement("h3");r.textContent="Contact Us",s.appendChild(r);const l=document.createElement("p");l.textContent="Email : bentoDatebayo@gmail.jk",s.appendChild(l);const d=document.createElement("p");d.textContent="509-0000-911",s.appendChild(d);const c=document.createElement("p");c.textContent="123 Sakura Street, Plateau-Mont-Royal, Montreal, Quebec, H2W 1M9, Canada",s.appendChild(c),e.style.display="flex",e.style.flexDirection="column",e.style.marginTop="100px",e.style.gap="40px",n.style.display="flex",n.style.gap="150px",s.style.marginTop="100px"}))})();