document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('btn clicked');
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber)
    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('you are logged in');
        window.location.href = '/js/home.html';
    }
    else {
        alert('Wrong phone or pin number');
    }
});