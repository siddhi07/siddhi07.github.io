const modal = document.getElementById("projectModal");
const titleEl = document.getElementById("modalTitle");
const tagsEl = document.getElementById("modalTags");
const descEl = document.getElementById("modalDesc");
const linksEl = document.getElementById("modalLinks");

function openModalFromTile(tile){
  titleEl.textContent = tile.dataset.title || "";
  tagsEl.textContent = tile.dataset.tags || "";
  descEl.textContent = tile.dataset.desc || "";

  linksEl.innerHTML = "";
  for (let i = 1; i <= 6; i++){
    const url = tile.dataset[`link${i}`];
    const label = tile.dataset[`link${i}label`];
    if (!url || !label) continue;

    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = label;
    linksEl.appendChild(a);
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".project-tile").forEach(tile => {
  tile.addEventListener("click", () => openModalFromTile(tile));
});

modal.addEventListener("click", (e) => {
  if (e.target.dataset.close === "true") closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});
