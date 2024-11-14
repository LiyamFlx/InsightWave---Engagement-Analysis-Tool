// JavaScript for InsightWave

function showScreen(screenId) {
  document.querySelectorAll('.container').forEach(screen => screen.style.display = 'none');
  document.getElementById(screenId).style.display = 'block';
}

function downloadReport() {
  const csvContent = "data:text/csv;charset=utf-8,Time,Engagement Score\n1,8\n2,9\n";
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "engagement_report.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Placeholder for engagement chart
document.addEventListener("DOMContentLoaded", function() {
  const ctx = document.getElementById('engagementChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [1, 2, 3, 4, 5],
      datasets: [{
        label: 'Engagement Score',
        data: [8, 7, 9, 6, 10],
        backgroundColor: 'rgba(166, 130, 255, 0.2)',
        borderColor: '#a682ff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 10
        }
      }
    }
  });
});
