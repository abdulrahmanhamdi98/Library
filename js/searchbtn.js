document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchDropdown = document.getElementById('searchDropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
  
    dropdownItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const selection = this.getAttribute('name');
        searchDropdown.textContent = selection;
        searchDropdown.setAttribute('data-selection', selection);
      });
    });
  
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchQuery = document.getElementById('searchInput').value;
      const searchType = searchDropdown.getAttribute('data-selection') || 'All';
      
      // Add your search handling logic here
      // For demonstration, we will just log the values
      console.log(`Search Query: ${searchQuery}`);
      console.log(`Search Type: ${searchType}`);
  
      // Implement the actual search logic here, e.g., making an API call or redirecting to a search results page
    });
  });