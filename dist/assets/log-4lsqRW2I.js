import"./main-irz9xKn3.js";import{c as n}from"./dom-D356mUhA.js";document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector("#film-log");let r=JSON.parse(localStorage.getItem("filmLog"))||[];if(r.length===0){a.textContent="No films logged yet.";return}r.sort((t,e)=>e.total-t.total),r.forEach(t=>{const e=n("div","film-entry"),o=n("span","favorite-star");o.innerHTML=t.favorite?"⭐":"☆",o.addEventListener("click",l=>{l.stopPropagation(),t.favorite=!t.favorite,o.innerHTML=t.favorite?"⭐":"☆",localStorage.setItem("filmLog",JSON.stringify(r))}),e.innerHTML=`
      <img src="https://image.tmdb.org/t/p/w200${t.poster}" alt="${t.title}" />
      <div>
        <h3>${t.title}</h3>
        <p>${t.year}</p>
        <p>Score: ${t.total}/10</p>
      </div>
    `,e.prepend(o),e.addEventListener("click",()=>{localStorage.setItem("selectedMovieId",t.id),window.location.href="/detail.html"}),a.append(e)})});
