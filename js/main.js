/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/js/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});

function downloadPDF(quality = 4) {
    const filename = 'jflcarvalho-cv.pdf';

    html2canvas(document.querySelector('#content'), {
        scale: quality
    }).then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
        pdf.save(filename);
    });
}