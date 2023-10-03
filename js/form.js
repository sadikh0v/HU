function setError(elementId, message) {
    const inputControl = document.getElementById(elementId);

    inputControl.innerText = message;
    inputControl.classList.add("error");
}

function setSuccess(elementId) {
    const inputControl = document.getElementById(elementId);

    inputControl.innerText = '';
    inputControl.classList.remove('error');
}

const isValidEmail = emailId => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailId).toLowerCase());
}

function validateInputs(params) {
    let valide = true
    let form = {
        fullName: true,
        emailId: true,
        number: true,
        message: true
    }

    if (params.fullName === '') {
        setError('fullName', 'İstifadəçi adı tələb olunur')
        form.fullName = false
    }

    if (params.emailId === '') {
        setError('emailId', 'E-poçt tələb olunur')
        form.emailId = false
    } else if (!isValidEmail(params.emailId)) {
        setError('emailId', 'Etibarlı e-poçt ünvanı təqdim edin')
        form.emailId = false
    }

    if (params.number === '') {
        setError('number', 'Əlaqə nömrəsi tələb olunur')
        form.number = false
    } else if (params.number.length < 10) {
        setError('number', 'Etibarlı mobil nömrəsi təqdim edin')
        form.number = false
    }
    if (params.message === '') {
        setError('message', 'Sorğunuzu geyd edin')
        form.message = false
    }

    Object.keys(form).forEach(key => {
        if (form[key] === true) {
            setSuccess(key)
            valide = true
        } else {
            valide = false
        }
    });

    return valide
}

function sendMail() {

    const params = {
        fullName: document.getElementById('fullName').value.trim(),
        emailId: document.getElementById('emailId').value.trim(),
        number: document.getElementById('number').value.trim(),
        message: document.getElementById('message').value.trim()
    }

    const isValid = validateInputs(params);

    window.alert = function (message, timeout = null) {
        const alert = document.createElement('div')
        alert.classList.add('alert')
        alert.setAttribute('style', `position: fixed;
            top: 50%;
            left: 50%;
            padding: 30px;
            border: 0.5px solid #333;
            border-radius: 10px;
            box-shadow: 0 10px 5px 0 #00000022;
            background: white;
            display: flex;
            flex-direction: column;
            transform: translate(-50%, -50%)`)
        const alertBtn = document.createElement('button')
        alertBtn.innerText = 'OK'
        alertBtn.setAttribute('style', `
            border: 1px solid #333;
            border-radius: 5px;
            background: white;
            padding: 10px`)
        alert.innerHTML = `<span style='padding: 10px'>${message}</span>`
        alert.appendChild(alertBtn)
        alertBtn.addEventListener('click', e => {
            alert.remove()
        })
        if (timeout != null) {
            setTimeout(() => {
                alert.remove()
            }, Number(timeout))
        }
        document.body.appendChild(alert)
    }

    if (isValid) {
        emailjs.send('service_6whz5p9', 'template_fm1rz9o', params)
            .then(function () {
                callAlert('Müraciətiniz göndərildi! Təşəkkür edirik!')
                window.location.href = 'index.html'
            })
            .catch(function (error) {
                console.error('Məktub göndərərkən səhv oldu:', error)
                alert('E-poçt göndərilərkən xəta baş verdi. Zəhmət olmasa bir az sonra yenə cəhd edin.')
            });
    }
    callAlert('Zəhmət olmasa, bütün xanaları düzgün doldurun.')

    function callAlert(msg) {
        alert(msg)
    }
}

function mainPage() {
    window.location.href = 'index.html'
}