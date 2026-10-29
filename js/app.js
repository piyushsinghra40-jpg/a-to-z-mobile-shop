(function(){
const C=window.siteConfig,products=window.products,PRICES_ARE_SAMPLE=window.PRICES_ARE_SAMPLE;
const $=s=>document.querySelector(s),S=C.shop,D=C.developer;
const rs=n=>"₹"+Number(n).toLocaleString("en-IN");
const wa=m=>`https://wa.me/${S.whatsapp}?text=${encodeURIComponent(m)}`;      // shop buttons ALWAYS use the shop number
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const gen=`Hello ${S.name}, I would like to enquire about your products and services.`;
document.querySelectorAll("[data-img]").forEach(i=>i.src=C.images[i.dataset.img]);
document.querySelectorAll("[data-t]").forEach(e=>e.textContent=S[e.dataset.t]);
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=wa(gen);a.target="_blank";a.rel="noopener noreferrer"});
$("#call").href="tel:+91"+S.phone;$("#phl").href="tel:+91"+S.phone;$("#phl").textContent=S.phoneDisplay;$("#fph").href="tel:+91"+S.phone;$("#fph").textContent=S.phoneDisplay;
$("#dir").href=S.mapUrl;$("#map").src=S.mapEmbedUrl;
$("#dn").textContent=D.name;$("#dn").href=D.portfolio;$("#dig").href=D.instagram;$("#dpf").href=D.portfolio;$("#dph").href="tel:+91"+D.phone;
document.querySelectorAll(".note").forEach(n=>n.textContent=(PRICES_ARE_SAMPLE?"Prices shown are sample prices. ":"")+"Final price and availability are confirmed by the shop on WhatsApp.");
$("#rep").innerHTML=C.repairs.map(r=>`<div class="card"><img src="${r.image}" alt="${esc(r.title)} (illustration)" loading="lazy"><b>${esc(r.title)}</b><a class="btn wa" target="_blank" rel="noopener noreferrer" href="${wa(`Hello ${S.name}, I want to enquire about: ${r.title}. Please share availability and charges.`)}">Enquire</a></div>`).join("");
$("#gal").innerHTML=C.gallery.map(g=>`<figure><img src="${g.src}" alt="${esc(g.alt)}" loading="lazy"><figcaption>${esc(g.caption)}</figcaption></figure>`).join("");
const accCats=[...new Set(products.filter(p=>p.category!="Mobiles").map(p=>p.category))];
$("#acc").innerHTML=accCats.map(c=>`<div class="card" data-filter="${esc(c)}"><b>${esc(c)}</b><span class="muted">${products.filter(p=>p.category==c).length} items</span><span class="pill" style="background:#eee">View</span></div>`).join("");
const chips=["All","Mobiles","Accessories",...accCats];let cat="All";
$("#chips").innerHTML=chips.map(c=>`<button class="chip" data-chip="${esc(c)}">${esc(c)}</button>`).join("");
const fb="this.onerror=null;this.src=this.dataset.fb;var b=this.parentNode.querySelector('.badge');if(b)b.hidden=false";
const card=p=>`<div class="card"><div class="pimg"><img src="${p.photo||p.image}" data-fb="${p.image}" onerror="${fb}" alt="${esc(p.brand+" "+p.name)}" loading="lazy"><span class="badge" hidden>Illustration</span></div><small>${esc(p.brand)}</small><b>${esc(p.name)}</b><span class="muted">${esc(p.desc)}</span><span class="price">${rs(p.price)}</span><div class="row"><button class="btn dk" data-id="${p.id}">View Details</button><a class="btn wa" target="_blank" rel="noopener noreferrer" href="${enq(p)}">Enquire</a></div></div>`;
const enq=p=>wa(`Hello ${S.name}, I am interested in ${p.name}. The displayed price is ${rs(p.price)}. Please share more details.`);
$("#gf").innerHTML=products.filter(p=>p.featured).map(card).join("");
const match=(p,c)=>c=="All"||(c=="Accessories"?p.category!="Mobiles":p.category==c);
function render(){const q=$("#q").value.toLowerCase().trim();
 const f=products.filter(p=>match(p,cat)&&`${p.brand} ${p.name} ${p.category}`.toLowerCase().includes(q));
 $("#gp").innerHTML=f.map(card).join("");$("#none").hidden=f.length>0;
 document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("on",x.dataset.chip==cat))}
$("#q").oninput=render;
document.addEventListener("click",e=>{
 const fl=e.target.closest("[data-filter]");if(fl){cat=fl.dataset.filter;render();if(fl.tagName=="DIV")$("#catalogue").scrollIntoView();return}
 const ch=e.target.closest("[data-chip]");if(ch){cat=ch.dataset.chip;render();return}
 const id=e.target.closest("[data-id]");if(id){const p=products.find(x=>x.id==id.dataset.id);
  $("#mbody").innerHTML=`<div class="pimg"><img src="${p.photo||p.image}" data-fb="${p.image}" onerror="${fb}" alt="${esc(p.name)}"><span class="badge" hidden>Illustration</span></div><h3>${esc(p.brand+" "+p.name)}</h3><p>${esc(p.desc)}</p><p class="price">${rs(p.price)} <small class="muted">${PRICES_ARE_SAMPLE?"(sample price)":""}</small></p><p class="muted">Availability and final price are confirmed on WhatsApp.</p><a class="btn wa" target="_blank" rel="noopener noreferrer" href="${enq(p)}">Enquire on WhatsApp</a>`;$("#modal").hidden=false;return}
 if(e.target.closest(".x")||e.target.id=="modal")$("#modal").hidden=true;
 if(e.target.closest(".burger")){const m=$("#menu").classList.toggle("open");$(".burger").setAttribute("aria-expanded",m)}
 else if(e.target.closest("#menu a"))$("#menu").classList.remove("open")});
render();
})();
