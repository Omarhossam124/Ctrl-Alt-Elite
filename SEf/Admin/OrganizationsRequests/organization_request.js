const requests = [
  { id: 1, name: "mersal" , details: "spreading happines since 2000" },
  { id: 2, name: "masr elkheer" , details: "masr dayman feeha kheer" },
  { id: 3, name: "basma" , details: "ersem basma" },
  { id: 4, name: "youturn" , details: "take the right youturn" },
  { id: 5, name: "hedaya" , details: "since 1999" },
  { id: 6, name: "maadians" , details: "pleasing every maadian" },
  { id: 7, name: "easylearn" , details: "trying to let you learn easily" },
];

const acceptedRequests = [];
const rejectedRequests = [];
//const returnedRequests = [];

// Function to populate the requests table
function populateRequestsTable() {
  const tableBody = document.getElementById("requestsTable").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear existing content

  for (const request of requests) {
    const tableRow = document.createElement("tr");
    const idCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const actionCell = document.createElement("td");
    const detailsCell = document.createElement("td");

    idCell.textContent = request.id;
    nameCell.textContent = request.name;
    detailsCell.textContent=request.details;

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
    tableRow.appendChild(detailsCell);
    tableRow.appendChild(actionCell);

    tableBody.appendChild(tableRow);
  }
}

function populateAcceptedRequestsTable() {
  const tableBody = document.getElementById("acceptedTable").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";  
  for (const request of acceptedRequests) {
    const tableRow = document.createElement("tr");
    const idCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const undoCell = document.createElement("td");

    idCell.textContent = request.id;
    //idCell.style.backgroundColor = "lightblue";
    nameCell.textContent = request.name;
    //nameCell.style.backgroundColor = "green";
    const undoButton = document.createElement("button");
    undoButton.classList.add("btn", "btn-danger", "btn-sm");
    undoButton.textContent = "Undo";
    undoButton.addEventListener("click", () => handleUndoRequest(request.id));
    undoCell.appendChild(undoButton)

    
    tableRow.appendChild(idCell);
    tableRow.appendChild(nameCell);
    tableRow.appendChild(undoCell);

    tableBody.appendChild(tableRow);
  }
}


function populateRejectedRequestsTable() {
  const tableBody = document.getElementById("rejectedTable").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";   
  for (const request of rejectedRequests) {
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
    undoButton.addEventListener("click", () => handleUndoRequest(request.id));
    undoCell.appendChild(undoButton)


    tableRow.appendChild(idCell);
    tableRow.appendChild(nameCell);
    tableRow.appendChild(undoCell);
    tableBody.appendChild(tableRow);
  }
}

// Function to handle accept request (update UI and data)
// function handleAcceptRequest(requestId) {
//   const acceptedRequest = requests.find(request => request.id === requestId);
//   requests.pop(acceptedRequest);
  
//   acceptedRequests.push(acceptedRequest);
//   populateRequestsTable();

//   populateAcceptedRequestsTable();
  
// }  
function handleAcceptRequest(requestId) {
  const acceptedRequest = requests.find(request => request.id === requestId);
  const requestIndex = requests.indexOf(acceptedRequest);  // Find index of request
  requests.splice(requestIndex, 1);  // Remove using index for efficiency

  acceptedRequests.push(acceptedRequest);
  populateRequestsTable();  // Update main table first
  populateAcceptedRequestsTable();
}

// function handleRejectRequest(requestId) {
//   const rejectedReuest = requests.find(request => request.id === requestId);
//   requests.pop(rejectedReuest);
//   populateRequestsTable();

//   rejectedRequests.push(rejectedReuest);
//   populateRejectedRequestsTable();
// }
function handleRejectRequest(requestId) {
  const rejectedReuest = requests.find(request => request.id === requestId);
  const requestIndex = requests.indexOf(rejectedReuest);  // Find index of request
  requests.splice(requestIndex, 1);  // Remove using index for efficiency

  
  rejectedRequests.push(rejectedReuest);
  populateRequestsTable();
  populateRejectedRequestsTable();
}


//handleUndoRequest

function handleUndoRequest(requestId) {
  const returnedReuest = rejectedRequests.find(request => request.id === requestId);
  //const requestIndex = rejectedRequests.indexOf(returnedReuest);  // Find index of request
  //requests.splice(requestIndex, 1);  // Remove using index for efficiency

  rejectedRequests.pop(returnedReuest);
  requests.push(returnedReuest);
  
   populateRequestsTable();
   populateRejectedRequestsTable();
   // the problem is in calling these methods
}