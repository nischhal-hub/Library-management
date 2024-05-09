document.getElementById("toggle").addEventListener("click", function() {
    console.log("clicked")
    document.getElementById("sidebar").classList.toggle("overlay");
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    // Fetch the JSON data
    fetch('returnedrecords.json')
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
            <td>${issue.staffName}</td>
            <td>${issue.itemId}</td>
            <td>${issue.issueDate}</td>
            <td>${issue.renewDate}</td>
            <td>${issue.returnedDate}</td>
            <td>${calculateFine(issue.issueDate, issue.returnedDate)}</td>
          `;
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  
  function calculateFine(issueDate, returnDate) {
        // Convert issueDate and returnDate to Date objects
        const issue = new Date(issueDate);
        const returned = new Date(returnDate);
    
        // Calculate the difference in days
        const diffTime = Math.abs(returned - issue);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
        // Check if return date exceeds 14 days from issue date
        if (diffDays > 14) {
          // Calculate fine: $2 per day exceeding 14 days
          const daysExceeded = diffDays - 14;
          const fine = daysExceeded * 2;
          return `$${fine}`;
        } else {
          return "$0"; // No fine if returned within 14 days
        }
      }