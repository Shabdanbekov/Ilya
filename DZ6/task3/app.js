let block = document.querySelector(".block");

fetch("data.json")
  .then((response) => response.json())
  .then((datas) => {
    datas.data.map((item) => {
      let div = `
        <div class="shum">
          <img class="image" src="${item.image_url}" alt="" />
          <div class="title">${item.title}</div>
          <div class="description">${item.description}</div>
          <div class="price"> от $${item.price} за м²</div>
        </div>
      `;
      block.innerHTML += div;
    });
  })
  .catch((error) => console.log(error));

//запрос с использованием XHR

// let block = document.querySelector(".block");

// const request = new XMLHttpRequest();
// request.open("GET", "data.json");
// request.setRequestHeader("Content-Type", "application/json");
// request.send(); //отправка запроса

// request.addEventListener("load", () => {
//   const datas = JSON.parse(request.response);

//   datas.data.map((item) => {
//     let div = `
//     <div class="shum">
//     <img class="image" src="${item.image_url}" alt="" />
//     <div class="title">${item.title}</div>
//     <div class="description">${item.description}</div>
//     <div class="price"> от $${item.price} за м²</div>
//     </div>
//            `;
//     block.innerHTML += div;
//   });
// });

//запрос с использованием async await

// let block = document.querySelector(".block");

// const loadData = async () => {
//   try {
//     const response = await fetch("data.json");
//     const datas = await response.json();

//     datas.data.map((item) => {
//       let div = `
//         <div class="shum">
//           <img class="image" src="${item.image_url}" alt="" />
//           <div class="title">${item.title}</div>
//           <div class="description">${item.description}</div>
//           <div class="price"> от $${item.price} за м²</div>
//         </div>
//       `;
//       block.innerHTML += div;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// loadData();
