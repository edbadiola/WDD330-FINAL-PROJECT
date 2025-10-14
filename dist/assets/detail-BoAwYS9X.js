import"./main-irz9xKn3.js";document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector("#detail-view"),r=JSON.parse(localStorage.getItem("filmLog"))||[],n=localStorage.getItem("selectedMovieId");if(!n){i.textContent="No movie selected.";return}const e=r.find(t=>t.id==n);if(!e){i.textContent="Movie not found in your log.";return}i.innerHTML=`
    <div class="detail-card">
      <img src="https://image.tmdb.org/t/p/w300${e.poster}" alt="${e.title}" />
      <div class="detail-info">
        <h2>${e.title}</h2>
        <p>Year: ${e.year}</p>
        <h3>Ratings</h3>
        <ul id="category-list"></ul>
        <p><strong>Total:</strong> ${e.total}/10</p>
        <h3>Review</h3>
        <p>${e.review||"No review written."}</p>
        <div class="actions">
          <button id="delete-btn"> Delete</button>
          <button id="back-btn"> Back to Log</button>
        </div>
      </div>
    </div>
  `;const c=["Feel","Storytelling","Performances & Direction","Sound Design","Visual Production"],d=document.querySelector("#category-list");e.ratings.forEach((t,l)=>{const o=document.createElement("li");o.textContent=`${c[l]}: ${t.toFixed(1)}`,d.append(o)}),document.querySelector("#delete-btn").addEventListener("click",()=>{if(confirm(`Delete "${e.title}" from your log?`)){const l=r.filter(o=>o.id!=n);localStorage.setItem("filmLog",JSON.stringify(l)),alert("Movie deleted successfully!"),window.location.href="/log.html"}}),document.querySelector("#back-btn").addEventListener("click",()=>{window.location.href="/log.html"})});
