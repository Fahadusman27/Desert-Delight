document.addEventListener('DOMContentLoaded', function() {
  // Initialize date pickers
  const today = new Date();
  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');
  const periodSelect = document.getElementById('period-select');
  const applyDateBtn = document.getElementById('apply-date');
  
  // Set default dates (this week)
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
  
  startDateInput.valueAsDate = startOfWeek;
  endDateInput.valueAsDate = endOfWeek;
  
  // Handle period selection change
  periodSelect.addEventListener('change', function() {
      const period = this.value;
      let startDate, endDate;
      
      switch(period) {
          case 'day':
              startDate = endDate = today;
              break;
          case 'week':
              startDate = new Date(today);
              startDate.setDate(today.getDate() - today.getDay());
              endDate = new Date(today);
              endDate.setDate(today.getDate() + (6 - today.getDay()));
              break;
          case 'month':
              startDate = new Date(today.getFullYear(), today.getMonth(), 1);
              endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
              break;
          case 'year':
              startDate = new Date(today.getFullYear(), 0, 1);
              endDate = new Date(today.getFullYear(), 11, 31);
              break;
      }
      
      startDateInput.valueAsDate = startDate;
      endDateInput.valueAsDate = endDate;
  });
  
  // Apply date filter
  applyDateBtn.addEventListener('click', function() {
      // In a real app, this would fetch data for the selected period
      console.log('Date range applied:', startDateInput.value, 'to', endDateInput.value);
      updateCharts();
  });
  
  // Initialize charts
  const salesChartCtx = document.getElementById('sales-chart').getContext('2d');
  const categoryChartCtx = document.getElementById('category-chart').getContext('2d');
  const chartTypeSelect = document.getElementById('chart-type');
  
  let salesChart, categoryChart;
  
  function createSalesChart(type = 'weekly') {
      let labels, data;
      
      if (type === 'daily') {
          labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
          data = [1200000, 1500000, 1300000, 1700000, 1900000, 2500000, 2350000];
      } else if (type === 'weekly') {
          labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
          data = [4500000, 5200000, 4800000, 5400000];
      } else { // monthly
          labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          data = [12000000, 11000000, 13500000, 14000000, 12500000, 15000000, 14500000, 16000000, 15500000, 17000000, 18000000, 20000000];
      }
      
      if (salesChart) {
          salesChart.destroy();
      }
      
      salesChart = new Chart(salesChartCtx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'Sales (Rp)',
                  data: data,
                  backgroundColor: 'rgba(254, 202, 87, 0.2)',
                  borderColor: 'rgba(254, 202, 87, 1)',
                  borderWidth: 2,
                  tension: 0.4,
                  fill: true
              }]
          },
          options: {
              responsive: true,
              plugins: {
                  legend: {
                      position: 'top',
                  },
                  tooltip: {
                      callbacks: {
                          label: function(context) {
                              return 'Rp ' + context.raw.toLocaleString('id-ID');
                          }
                      }
                  }
              },
              scales: {
                  y: {
                      beginAtZero: true,
                      ticks: {
                          callback: function(value) {
                              return 'Rp ' + value.toLocaleString('id-ID');
                          }
                      }
                  }
              }
          }
      });
  }
  
  function createCategoryChart() {
      if (categoryChart) {
          categoryChart.destroy();
      }
      
      categoryChart = new Chart(categoryChartCtx, {
          type: 'doughnut',
          data: {
              labels: ['Cakes', 'Ice Cream', 'Cookies', 'Pastries', 'Drinks'],
              datasets: [{
                  data: [45, 25, 15, 10, 5],
                  backgroundColor: [
                      'rgba(254, 202, 87, 0.7)',
                      'rgba(255, 107, 107, 0.7)',
                      'rgba(72, 219, 251, 0.7)',
                      'rgba(29, 209, 161, 0.7)',
                      'rgba(120, 111, 166, 0.7)'
                  ],
                  borderColor: [
                      'rgba(254, 202, 87, 1)',
                      'rgba(255, 107, 107, 1)',
                      'rgba(72, 219, 251, 1)',
                      'rgba(29, 209, 161, 1)',
                      'rgba(120, 111, 166, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              responsive: true,
              plugins: {
                  legend: {
                      position: 'right',
                  },
                  tooltip: {
                      callbacks: {
                          label: function(context) {
                              return context.label + ': ' + context.raw + '%';
                          }
                      }
                  }
              }
          }
      });
  }
  
  function updateCharts() {
      const chartType = chartTypeSelect.value;
      createSalesChart(chartType);
  }
  
  // Initialize charts
  createSalesChart();
  createCategoryChart();
  
  // Handle chart type change
  chartTypeSelect.addEventListener('change', function() {
      updateCharts();
  });
  
  // Product category filtering
  const categoryBtns = document.querySelectorAll('.category-btn');
  const productCards = document.querySelectorAll('.product-card');
  
  categoryBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          const category = this.dataset.category;
          
          // Update active button
          categoryBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          
          // Filter products
          productCards.forEach(card => {
              if (category === 'all' || card.dataset.category === category) {
                  card.style.display = 'block';
              } else {
                  card.style.display = 'none';
              }
          });
      });
  });
  
  // Simulate loading data
  setTimeout(() => {
      document.querySelector('.container').style.opacity = '1';
  }, 300);
});