const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");

const convert = (elem, target, target2) => {
  elem.addEventListener("input", () => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        if (target2 === "usd-to-som") {
          target.value = (elem.value * +data.usd).toFixed(2);
        } else if (target2 === "som-to-usd") {
          target.value = (elem.value / +data.usd).toFixed(2);
        } else if (target2 === "eur-to-som") {
          target.value = (elem.value * +data.eur).toFixed(2);
        } else if (target2 === "som-to-eur") {
          target.value = (elem.value / +data.eur).toFixed(2);
        } else if (target2 === "eur-to-usd") {
          target.value = (elem.value * (+data.usd / +data.eur)).toFixed(2);
        } else if (target2 === "usd-to-eur") {
          target.value = (elem.value * (+data.eur / +data.usd)).toFixed(2);
        }
        elem.value === "" && (target.value = "");
      });
  });
};

convert(som, usd, "som-to-usd");
convert(usd, som, "usd-to-som");
convert(som, eur, "som-to-eur");
convert(eur, som, "eur-to-som");
convert(eur, usd, "usd-to-eur");
convert(usd, eur, "eur-to-usd");

// с использованием XMLHttpRequest()

// const som = document.querySelector("#som");
// const usd = document.querySelector("#usd");
// const eur = document.querySelector("#eur");

// const convert = (elem, target, target2) => {
//   elem.addEventListener("input", () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", "data.json");
//     request.setRequestHeader("Content-Type", "application/json");
//     request.send();

//     request.addEventListener("load", () => {
//       const data = JSON.parse(request.response);
//       if (target2 === "usd-to-som") {
//         target.value = (elem.value * +data.usd).toFixed(2);
//       } else if (target2 === "som-to-usd") {
//         target.value = (elem.value / +data.usd).toFixed(2);
//       } else if (target2 === "eur-to-som") {
//         target.value = (elem.value * +data.eur).toFixed(2);
//       } else if (target2 === "som-to-eur") {
//         target.value = (elem.value / +data.eur).toFixed(2);
//       } else if (target2 === "eur-to-usd") {
//         target.value = (elem.value * (+data.usd / +data.eur)).toFixed(2);
//       } else if (target2 === "usd-to-eur") {
//         target.value = (elem.value * (+data.eur / +data.usd)).toFixed(2);
//       }
//       elem.value === "" && (target.value = "");
//     });
//   });
// };

// convert(som, usd, "som-to-usd");
// convert(usd, som, "usd-to-som");
// convert(som, eur, "som-to-eur");
// convert(eur, som, "eur-to-som");
// convert(eur, usd, "usd-to-eur");
// convert(usd, eur, "eur-to-usd");
