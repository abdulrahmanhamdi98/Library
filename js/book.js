$(document).ready(function() {
    function loadBooks(category) {
      $.ajax({
        url: `http://192.168.1.46:8000/api/mostborrowed/`,
        method: 'GET',
        success: function(data) {
          const booksCarousel = $('#books-carousel');
          booksCarousel.empty();
          data.forEach(book => {
            booksCarousel.append(`
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <img src="${book.image_url}" alt="Book Cover" class="book-image" />
                  </div>
                  <div class="detail-box">
                    <h5>${book.name}</h5>
                    <h6>${book.isbn13}</h6>
                    <button class="borrow-button">Borrow</button>
                  </div>
                </div>
              </div>
            `);
          });
          booksCarousel.trigger('refresh.owl.carousel');
        },
        error: function(error) {
          console.log('Error loading books:', error);
        }
      });
    }

    // Load books for the 'Programming' category on page load
    loadBooks('programming');

    // Handle book image click
    $(document).on('click', '.book-image', function() {
      const bookTitle = $(this).closest('.box').find('h5').text();
      const bookDetails = $(this).closest('.box').find('h6').text();
      alert(`Book Title: ${bookTitle}\nBook Details: ${bookDetails}`);
    });

    // Handle borrow button click
    $(document).on('click', '.borrow-button', function() {
      const bookTitle = $(this).closest('.box').find('h5').text();
      alert(`Borrowing Book: ${bookTitle}`);
    });
  });