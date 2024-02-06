document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const progressBar = document.getElementById('progress-bar');
    let currentSectionIndex = 0;
  
    function showSection(index) {
      sections.forEach((section, idx) => {
        if (idx === index) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    }
  
    function updateProgressBar() {
      const progress = ((currentSectionIndex + 1) / sections.length) * 100;
      progressBar.style.width = `${progress}%`;
    }
  
    function goToNextSection() {
      if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        showSection(currentSectionIndex);
        updateProgressBar();
      }
    }
  
    const nextButtons = document.querySelectorAll('.next-btn');
    nextButtons.forEach(btn => {
      btn.addEventListener('click', goToNextSection);
    });
  
    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', function() {
      // Collect form data
      const formData = {
        date: document.getElementById('date').value,
        industry: document.getElementById('industry').value,
        company: document.getElementById('company').value,
        totalVehicles: document.getElementById('total-vehicles').value,
        fossilCars: document.getElementById('fossil-cars').value,
        electricVehicles: document.getElementById('electric-vehicles').value,
        energySource1: document.getElementById('energy-source1').value,
        energyConsumption1: document.getElementById('energy-consumption1').value,
        energySource2: document.getElementById('energy-source2').value,
        energyConsumption2: document.getElementById('energy-consumption2').value,
        waterSource1: document.getElementById('water-source1').value,
        waterConsumption1: document.getElementById('water-consumption1').value,
        waterSource2: document.getElementById('water-source2').value,
        waterConsumption2: document.getElementById('water-consumption2').value,
        wasteType1: document.getElementById('waste-type1').value,
        wasteAmount1: document.getElementById('waste-amount1').value,
        wasteType2: document.getElementById('waste-type2').value,
        wasteAmount2: document.getElementById('waste-amount2').value
      };
  
      // Visualize data using Chart.js
      visualizeData(formData);
    });
  
    function visualizeData(data) {
        // Create a bar chart for vehicles
        const ctxBar = document.getElementById('barChart').getContext('2d');
        const barChart = new Chart(ctxBar, {
          type: 'bar',
          data: {
            labels: ['Total Vehicles', 'Fossil-fuel Cars', 'Electric Vehicles'],
            datasets: [{
              label: 'Number of Vehicles',
              data: [data.totalVehicles, data.fossilCars, data.electricVehicles],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      
        // Get the names of the selected sources
        const source1 = document.getElementById('energy-source1').value;
        const source2 = document.getElementById('energy-source2').value;

        // Create a pie chart for source of energy
        const ctxPie = document.getElementById('pieChart').getContext('2d');
        const pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: [source1, source2], // Use the names of the selected sources as labels
            datasets: [{
            label: 'Energy Consumption',
            data: [data.energyConsumption1, data.energyConsumption2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
            }]
        },
        options: {
            // Remove yAxes configuration
        }
        });

      
        // Get the names of the selected water sources
        const waterSource1 = document.getElementById('water-source1').value;
        const waterSource2 = document.getElementById('water-source2').value;

        // Create a bar chart for source of water
        const ctxBarWater = document.getElementById('barChartWater').getContext('2d');
        const barChartWater = new Chart(ctxBarWater, {
        type: 'bar',
        data: {
            labels: [waterSource1, waterSource2], // Use the names of the selected water sources as labels
            datasets: [{
            label: 'Water Consumption (cubic metres)',
            data: [data.waterConsumption1, data.waterConsumption2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
            }]
        },
        options: {
            scales: {
            yAxes: [{
                ticks: {
                beginAtZero: true
                }
            }]
            }
        }
        });


        // function closes
      }




  
    showSection(currentSectionIndex);
  });
  