let form = document.querySelector("form");
let inputData = document.getElementById("inputBlock");
let outputData = document.getElementById("outputBlock");

form.addEventListener("submit", e => {
  e.preventDefault();
  let data = inputData.value;
  let finalData = eval(data);
  var valueArr = finalData.map(function (item) {
    return item.id;
  });
  valueArr.some(function (name, idx) {
    console.log(name);
    let test = valueArr.indexOf(name) != idx;
    console.log(test);
    if (test === true) {
      alert(`in json  is Duplicated Value `);
      outputData.value = "";
    } else {
      finalData.map(e => {
        outputData.value += `<div class="root" data-id=${e.id}>
    <span class="username">${e.username}</span>
    <span class="video_name">${e.video_name}</span>
    <span class="additional_details">
        <span class="type">${e.action}</span>
    </span>
</div>`;
      });
    }
  });
});
