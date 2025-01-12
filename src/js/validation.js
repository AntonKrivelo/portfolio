const form = document.getElementById('form');

const validateEmail = (email) => {
    if (!email) {
        return "field is required"; 
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return "not valid value"; 
    }

}

const validateName = (name) => {
    if (!name) {
        return "field is required";
    }

    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;

    if (!nameRegex.test(name)) {
        return "not valid value";
    }
}

const submitData = async(data) => {
    try{
        const responce = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });

        if(responce.ok) {
            alert('SUCCESS!')
        } else {
            alert('NOT SUCCESS!')
        }
    } catch(error) {
        console.error(error.message)
        alert('connect error')
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInputValue = document.getElementById('name').value.trim();
    const emailInputValue = document.getElementById('email').value.trim();
    const textAreaInputValue = document.getElementById('message').value.trim();

    const nameInputError = document.getElementById('nameError');
    const emailInputError = document.getElementById('emailError');
    const textAreaInputError = document.getElementById('messageError');
    
    let isValid = true;
    
    const emailError = validateEmail(emailInputValue);
    const nameError = validateName(nameInputValue);

    if(emailError) {
        emailInputError.textContent = emailError;
        isValid = false;

    }

    if(nameError) {
        nameInputError.textContent = nameError;
        isValid = false;
    }

    if(textAreaInputValue.length <= 0) {
        textAreaInputError.textContent = 'field is required'
        isValid = false;
    }

    if(!isValid) {
        throw new Error("form is not valid!");
        
    }

    emailInputError.textContent = '';
    nameInputError.textContent = '';
    textAreaInputError.textContent = '';

    const formData = {
        name: nameInputValue,
        email: emailInputValue,
        description: textAreaInputValue, 
    };

    // await submitData(formData);

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    }).then(resp => {
        if(resp.ok) {
            alert('SUCCESS!')
        } else {
            alert('NOT SUCCESS!')
        }
    }).catch(error => {
        console.error(error.message)
        alert('connect error')
    })
})
