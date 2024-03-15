const data = [
  {
    name: `Alice`,
    occupation: `Writer`,
    starting_price: 30
  },
  {
    name: `Bod`,
    occupation: `Teacher`,
    starting_price: 50
  },
  {
    name: `Carol`,
    occupation: `Programmer`,
    starting_price: 70
  }
];

console.log(data)

const updateListAndAverage = () => {
  const list = document.querySelector("#list")
  const averagePrice = document.querySelector("#average")

  list.innerHTML = "";

  data.forEach(data => {
    const listItem = document.createElement("li");
    listItem.className = "freelancer";
    listItem.textContent = `${data.name}, ${data.occupation}, $${data.starting_price}`;
    list.appendChild(listItem);
  });

  averagePrice.textContent = `${calculateAverage(data).toFixed(2)}`
}

const calculateAverage = (data) => {
  const total = data.reduce((sum, datos) => sum + datos.starting_price, 0)
  
  return total / data.length;
};

updateListAndAverage();