export const fetchImages = searchTerms => (
  fetch(`https://pixabay.com/api/?key=5541777-820f16c4e62808ceac76b49c4&q=${encodeURIComponent(searchTerms)}&image_type=photo`)
);
