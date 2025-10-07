function TreatmentCard(props) {
    const { id, title, desc, icon, img, tags = [] } = props;
    return `
    <article class="card" data-id="${id}">
      <img class="card__media" src="${img}" alt="${title} görseli" loading="lazy">
      <div class="card__body">
        <h3 class="card__title">${icon || ""}${title}</h3>
        <p class="card__desc">${desc}</p>
        <div class="card__tags">
          ${tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="card__actions">
          <button class="card__btn js-detail">Detay</button>
          <button class="card__btn js-appointment">Randevu</button>
        </div>
      </div>
    </article>
  `;
}

const data = [
    {
        id: "bel-fitigi",
        title: "Bel Fıtığı Tedavisi",
        desc: "Ağrıyı azaltmaya, hareket aralığını artırmaya ve yaşam kalitesini iyileştirmeye yönelik kişiselleştirilmiş program.",
        icon: '<i class="fa-solid fa-spine"></i>',
        img: "./images/belfıtıgı.png",
        tags: ["Manuel Terapi", "Egzersiz"]
    },
    {
        id: "boyun-agrisi",
        title: "Boyun Ağrısı",
        desc: "Postür analizi ve hedefe yönelik güçlendirme ile kronik ağrılara bilimsel yaklaşım.",
        icon: '<i class="fa-solid fa-user-doctor"></i>',
        img: "./images/boyun-agrisi.jpg",
        tags: ["Postür", "Güçlendirme"]
    }
];

function renderTreatments(list) {
    const grid = document.getElementById("tedavi-grid"); // dikkat burayı değiştirdim
    if (!grid) return;
    grid.innerHTML = list.map(TreatmentCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    renderTreatments(data);
});
