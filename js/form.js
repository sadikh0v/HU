function sendMail() {
    if (validateForm() === false) {
        alert("Please Fill In All Required Fields");
        return
    }
    let params = {
        from_name: document.getElementById('fullName').value,
        email_id: document.getElementById('email_id').value,
        phone_id: document.getElementById('phone_id').value,
        message: document.getElementById('message').value,
    }
    emailjs.send('service_6tq7ytk', 'template_fm1rz9o', params).then(function (res) {
        alert('Success!' + res.status)
    })
}

function validateForm() {
    let fullName = document.forms["form"]["answer_name"].value;
    let email_id = document.forms["form"]["answer_email"].value;
    let phone_id = document.forms["form"]["answer_phone"].value;
    let message = document.forms["form"]["answer_message"].value;
    return !((fullName === '') && (email_id === '') && (phone_id === '') && (message === ''));
}