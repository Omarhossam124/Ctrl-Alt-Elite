//const requests =JSON.parse(localStorage.getItem("userData"));
const requests= [{"id": 1, "name": "mersal", "slogan": "spreading happines since 2000","location" : "28 street 289 Maadi" ,"email":"mersal@gmail.com" , "number":"011273527"},
 {"id": 2, "name": "masr elkheer", "slogan": "masr dayman feeha kheer" ,"location" : "13 street 10 Mokattam","email":"masrelkheer@gmail.com", "number":"032784227"},
  {"id": 3, "name": "basma", "slogan": "ersem basma" ,"location" : "47 Mountain View","email":"basma@gmail.com", "number":"0122346478"}, 
  {"id": 4, "name": "youturn", "slogan": "take the right youturn" ,"location" : "5 street 300 Maadi","email":"youturn@gmail.com", "number":"038342828"},
  {"id": 5, "name": "hedaya", "slogan": "since 1999", "location" : "28 banfseg district tagmoa","email":"hedaya@gmail.com", "number":"013446478"},
  {"id": 6, "name": "maadians", "slogan": "pleasing every maadian" , "location" :  "street 289 Maadi","email":"maadians@gmail.com", "number":"011515578"},
  {"id": 7, "name": "easylearn", "slogan": "trying to let you learn easily" , "location" : "8 street 89 Maadi","email":"easylearn@gmail.com", "number":"0122346478"}]  

const acceptedRequests = [];
const rejectedRequests = [];

// Function to populate the requests table
function buildMainRequestsTable() {
  const tableBody = document.getElementById("requestsTable").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear existing content
  requests.sort((a, b) => a.id - b.id);
  for (const request of requests) {
    const tableRow = document.createElement("tr");
    const idCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const actionCell = document.createElement("td");

    idCell.textContent = request.id;
    nameCell.textContent = request.name;

    const DetButton = document.createElement("button");
    DetButton.classList.add("btn", "btn-primary", "btn-sm");
    DetButton.setAttribute("data-bs-toggle","modal");
    DetButton.setAttribute("data-bs-target","#exampleModal");
    DetButton.addEventListener("click", () => openPopupHandler(request));

    DetButton.textContent = "View Details" ;

    const acceptButton = document.createElement("button");
    acceptButton.classList.add("btn", "btn-primary", "btn-sm");
    acceptButton.textContent = "Accept";
    acceptButton.addEventListener("click", () => handleAcceptRequest(request.id));

    const rejectButton = document.createElement("button");
    rejectButton.classList.add("btn", "btn-danger", "btn-sm");
    rejectButton.textContent = "Reject";
    rejectButton.addEventListener("click", () => handleRejectRequest(request.id));

    actionCell.appendChild(acceptButton);
    actionCell.appendChild(rejectButton);

    tableRow.appendChild(idCell);
    tableRow.appendChild(nameCell);
    tableRow.appendChild(DetButton);
    tableRow.appendChild(actionCell);

    tableBody.appendChild(tableRow);
  }
}
function buildRequestsTable(tableId, requests, isAccepted) {
  const tableBody = document.getElementById(tableId).getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";   
  for (const request of requests) {
    const tableRow = document.createElement("tr");
    const idCell = document.createElement("td");
    idCell.textContent = request.id;
   // idCell.style.backgroundColor = "lightblue";
    const nameCell = document.createElement("td");
    
    nameCell.textContent = request.name;
    const undoCell = document.createElement("td");

   // nameCell.style.backgroundColor = "red";
   const undoButton = document.createElement("button");
    undoButton.classList.add("btn", "btn-danger", "btn-sm");
    undoButton.textContent = "Undo";
    undoButton.addEventListener("click", () => handleUndoRequest(request.id, isAccepted));
    undoCell.appendChild(undoButton)


    tableRow.appendChild(idCell);
    tableRow.appendChild(nameCell);
    tableRow.appendChild(undoCell);
    tableBody.appendChild(tableRow);
  }
}

function handleAcceptRequest(requestId) {
  const acceptedRequest = requests.find(request => request.id === requestId);
  const requestIndex = requests.indexOf(acceptedRequest);  // Find index of request
  requests.splice(requestIndex, 1);  // Remove using index for efficiency

  acceptedRequests.push(acceptedRequest);
  buildMainRequestsTable();  // Update main table first
  buildRequestsTable("acceptedTable", acceptedRequests, true)
}

function handleRejectRequest(requestId) {
  const rejectedReuest = requests.find(request => request.id === requestId);
  const requestIndex = requests.indexOf(rejectedReuest);  // Find index of request
  requests.splice(requestIndex, 1);  // Remove using index for efficiency
  rejectedRequests.push(rejectedReuest);
  buildMainRequestsTable();
  buildRequestsTable("rejectedTable", rejectedRequests, false)

}
//handleUndoRequest
function handleUndoRequest(requestId, isAccepted) {
  var returnedRequest;
  if(isAccepted){
    returnedRequest = acceptedRequests.find(request => request.id === requestId);
    const requestIndex = acceptedRequests.indexOf(returnedRequest);  
    acceptedRequests.splice(requestIndex, 1);  
    buildRequestsTable("acceptedTable", acceptedRequests, true)
  }else{
    returnedRequest = rejectedRequests.find(request => request.id === requestId);
    const requestIndex = rejectedRequests.indexOf(returnedRequest);  
    rejectedRequests.splice(requestIndex, 1);  
    buildRequestsTable("rejectedTable", rejectedRequests, false)
  }
  requests.push(returnedRequest);
  buildMainRequestsTable();
}

function openPopupHandler(request){
console.log(request);
var orgName = document.getElementById("OrgName")
var location = document.getElementById("location")
var slogan = document.getElementById("slogan")
var email = document.getElementById("email")
var number = document.getElementById("number")

orgName.textContent = request.name;
location.textContent = request.location;
slogan.textContent = request.slogan;
email.textContent = request.email;
number.textContent = request.number;
as
}