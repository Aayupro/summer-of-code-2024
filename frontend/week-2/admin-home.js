  // Function to toggle the visibility of rows
  document.getElementById('toggleTopSoldBtn').addEventListener('click', function() {
    const topSoldStocks = document.getElementById('topSoldStocks');
    topSoldStocks.style.display = topSoldStocks.style.display === 'none' || topSoldStocks.style.display === '' ? 'grid' : 'none';
});

document.getElementById('toggleRecentOrdersBtn').addEventListener('click', function() {
    const recentOrders = document.getElementById('recentOrders');
    recentOrders.style.display = recentOrders.style.display === 'none' || recentOrders.style.display === '' ? 'flex' : 'none';
});

document.getElementById('toggleUrgentStocksBtn').addEventListener('click', function() {
    const urgentStocks = document.getElementById('urgentStocks');
    urgentStocks.style.display = urgentStocks.style.display === 'none' || urgentStocks.style.display === '' ? 'flex' : 'none';
});

  