function selectCard(card) {
    // Remove 'selected' class from all cards
    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
    
    // Add 'selected' class to the clicked card
    card.classList.add('selected');
    
    // Get the YouTube video URL from the 'data-video' attribute
    const videoUrl = card.getAttribute('data-video');
    
    // Update the iframe's src to show the selected video
    document.getElementById('youtube-video').src = videoUrl;
}
