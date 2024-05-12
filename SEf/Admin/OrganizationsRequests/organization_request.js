const requests =JSON.parse(localStorage.getItem("userData"));
// const requests= [{"id": 1, "name": "mersal", "details": "spreading happines since 2000"},
//  {"id": 2, "name": "masr elkheer", "details": "masr dayman feeha kheer"},
//   {"id": 3, "name": "basma", "details": "ersem basma"}, 
//   {"id": 4, "name": "youturn", "details": "take the right youturn"},
//    {"id": 5, "name": "hedaya", "details": "since 1999"},
//     {"id": 6, "name": "maadians", "details": "pleasing every maadian"},
//      {"id": 7, "name": "easylearn", "details": "trying to let you learn easily"}]  

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

    DetButton.textContent = "Details";

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
location.textContent = request.location;
orgName.textContent = request.name;
}