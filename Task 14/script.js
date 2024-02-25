const form = document.getElementById('myForm');

window.onload = function () {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        form.innerHTML = savedData;
    }
};

form.addEventListener('input', function () {
    const formData = form.innerHTML;
    localStorage.setItem('formData', formData);
});