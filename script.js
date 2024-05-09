document.getElementById("toggle").addEventListener("click", function() {
    console.log("clicked")
    document.getElementById("sidebar").classList.toggle("overlay");
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    // Fetch the JSON data
    fetch('issuerecords.json')
      .then(response => response.json())
      .then(data => {
        // Get the table body element
        const tbody = document.querySelector('#data-table tbody');
        
        // Loop through the data and create table rows to display it
        data.issueData.forEach((issue, index) => {
          // Create a table row for each issue
          const row = tbody.insertRow();
          
          // Populate the row with data
          row.innerHTML = `
            <td>${index + 1}</td>
            <td>${issue.studentName}</td>
            <td>${issue.contact}</td>
            <td>${issue.staffName}</td>
            <td>${issue.itemType}</td>
            <td>${issue.itemId}</td>
            <td>${issue.quantity}</td>
            <td>${issue.issueDate}</td>
            <td>${issue.renewDate}</td>
          `;
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  
  