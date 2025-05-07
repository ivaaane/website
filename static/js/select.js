document.querySelectorAll('.series').forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedSeries = document.querySelector('.series:checked').value;
        document.querySelectorAll('.post-item').forEach(post => {
            const postSeries = post.dataset.series;
            post.style.display = selectedSeries === 'ale' || postSeries === selectedSeries
                ? '' : 'none';
        });
    });
});
