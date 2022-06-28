let graphInfo;
let mon;
let GI;
//GET JSON DATA AND STORE IT IN GRAPHINFO
fetch("data.json")
  .then((Response) => Response.json())
  .then((data) => {
    graphInfo = data;
    console.log(graphInfo[0].amount);
    mon = JSON.stringify(JSON.parse(graphInfo[0].amount));
    drawGraph();
  })
  .catch((error) => {
    console.log(error);
  });

//DRAW GRAPH USING CHARTJS
function drawGraph() {
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "",
          data: [
            graphInfo[0].amount,
            graphInfo[1].amount,
            graphInfo[2].amount,
            graphInfo[3].amount,
            graphInfo[4].amount,
            graphInfo[5].amount,
            graphInfo[6].amount,
          ],
          backgroundColor: [
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(64,224,208, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderColor: [
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(64,224,208, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  });
}
