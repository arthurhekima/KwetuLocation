 /* read more */

 document.querySelector('.read-more-btn').addEventListener('click', function() {
    var hiddenContent = document.querySelector('.hidden-content');
    if (hiddenContent.style.display === 'none') {
      hiddenContent.style.display = 'block';
      this.textContent = 'Read Less';
    } else {
      hiddenContent.style.display = 'none';
      this.textContent = 'Read More';
    }
  });
