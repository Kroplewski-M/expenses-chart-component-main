let graphInfo;

//GET JSON DATA AND STORE IT IN GRAPHINFO
fetch("data.json")
  .then((Response) => Response.json())
  .then((data) => {
    graphInfo = data;
    console.log(graphInfo[4].amount);
  });
