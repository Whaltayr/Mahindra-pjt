document.addEventListener("DOMContentLoaded", () => {
  fetch("cars.json")
    .then(response => {
      if (!response.ok) throw new Error("Erro ao carregar JSON");
      return response.json();
    })
    .then(cars => {
      const container = document.getElementById("car-list");
      cars.forEach(car => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-lg shadow-lg overflow-hidden";

        card.innerHTML = `
          <img src="${car.image}" alt="${car.name}" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="text-xl font-bold">${car.name}</h2>
            <p class="text-gray-700">${car.price}</p>
            <a href="details.html?id=${car.id}" 
               class="inline-block mt-4 px-4 py-2 bg-red-800 text-white rounded hover:bg-blue-700">
               View Details
            </a>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => console.error(error));
});
