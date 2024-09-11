document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    pages.forEach((page, index) => {
        page.style.transform = index === currentPage ? 'rotateY(0deg)' : 'rotateY(180deg)';
    });

    document.querySelectorAll('.next-page').forEach(button => {
        button.addEventListener('click', () => {
            if (currentPage < pages.length - 1) {
                pages[currentPage].style.transform = 'rotateY(-180deg)';
                currentPage++;
                pages[currentPage].style.transform = 'rotateY(0deg)';
            }
        });
    });

    document.querySelectorAll('.prev-page').forEach(button => {
        button.addEventListener('click', () => {
            if (currentPage > 0) {
                pages[currentPage].style.transform = 'rotateY(180deg)';
                currentPage--;
                pages[currentPage].style.transform = 'rotateY(0deg)';
            }
        });
    });
});
