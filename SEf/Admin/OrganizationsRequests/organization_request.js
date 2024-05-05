// Sample request data (replace with your actual data)
const requests = [
    { id: 1, details: "Request for new feature X" },
    { id: 2, details: "Request for bug fix Y" },
    { id: 3, details: "Request for data access Z" },
    { id: 3, details: "Request for data access Z" },
  ];

const acceptedRequests = [];
const rejectedRequests = [];
  
  // Function to populate the requests table
  function populateRequestsTable() {
    const tableBody = document.getElementById("requestsTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear existing content
  
    for (const request of requests) {
      const tableRow = document.createElement("tr");
      const idCell = document.createElement("td");
      const detailsCell = document.createElement("td");
      const actionCell = document.createElement("td");
  
      idCell.textContent = request.id;
      detailsCell.textContent = request.details;
  
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
      tableRow.appendChild(detailsCell);
      tableRow.appendChild(actionCell);
  
      tableBody.appendChild(tableRow);
    }
  }
  
  // Function to handle accept request (update UI and data)
  function handleAcceptRequest(requestId) {
    const acceptedRequest = requests.find(request => request.id === requestId);
    requests.pop(acceptedRequest);
    populateRequestsTable();

    acceptedRequests.push(acceptedRequest);
    populateAcceptedRequestsTable();
  }  

  function handleRejectRequest(requestId) {
    const rejectedReuest = requests.find(request => request.id === requestId);
    requests.pop(rejectedReuest);
    populateRequestsTable();

    rejectedRequests.push(rejectedReuest);
    populateRejectedRequestsTable();
  }


  function populateAcceptedRequestsTable() {
    const tableBody = document.getElementById("acceptedTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";  
    for (const request of acceptedRequests) {
      const tableRow = document.createElement("tr");
      const idCell = document.createElement("td");
      const detailsCell = document.createElement("td");
      idCell.textContent = request.id;
      idCell.style.backgroundColor = "lightblue";
      detailsCell.textContent = request.details;
      detailsCell.style.backgroundColor = "green";
      tableRow.appendChild(idCell);
      tableRow.appendChild(detailsCell);
      tableBody.appendChild(tableRow);
    }
  }
  

  function populateRejectedRequestsTable() {
    const tableBody = document.getElementById("rejectedTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";   
    for (const request of rejectedRequests) {
      const tableRow = document.createElement("tr");
      const idCell = document.createElement("td");
      idCell.style.backgroundColor = "lightblue";
      const detailsCell = document.createElement("td");
      idCell.textContent = request.id;
      detailsCell.textContent = request.details;
      detailsCell.style.backgroundColor = "red";
      tableRow.appendChild(idCell);
      tableRow.appendChild(detailsCell);
      tableBody.appendChild(tableRow);
    }
  }