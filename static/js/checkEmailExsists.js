
const userEmail = document.querySelector("#create-user-email");
const errorNotification = document.querySelector("#email-exsist-error");
const successNotification = document.querySelector("#email-unique-success");
const emailValidationMessage = document.querySelector("#validate-email");

let isEmailValidate = false;
let isPasswordMatch = false;

// Toggles between succes and error message for user exsistance
let toggleMessage = (isUserExsists) => {
    console.log(isUserExsists)
    if(isUserExsists)
    {
        errorNotification.classList.remove('d-none');
        if(!successNotification.classList.contains('d-none'))
                     successNotification.classList.add('d-none');
        isEmailValidate = false;
        submitButton.disabled = true;
    }else{

        successNotification.classList.remove('d-none')
        if(!errorNotification.classList.contains('d-none'))
        errorNotification.classList.add('d-none');
        isEmailValidate = true;
        if(isPasswordMatch)
            submitButton.disabled = false;

    }   
}


// Callback for the eventlistner attached to email input
let checkEmailExsists = (event) => {
    const loader = document.querySelector('.spinner-grow');
    const messageContainer = document.querySelector('#email-valdiate-message-container');
    email =  event.currentTarget.value;
    //Checks if its an email 
    if(email!= '' && email.includes('@') && email[email.length-1]!='@')
    {
        loader.classList.remove('d-none');
       
        $.ajax({
            type:'get',
            url:'user/isExsist',
            data:{email:email},
            success:
                function(data)
                {
                    console.log("Success")
                    loader.classList.add('d-none');
                  
                    toggleMessage(data.ifUserExsists);
                }
            ,err:
                function(err)
                {
                    console.log(err)
                }

            
        })
    }
    else{
        successNotification.classList.add('d-none');
        errorNotification.classList.add('d-none');
        submitButton.disabled = true;


    }
}


userEmail.addEventListener('input',checkEmailExsists);

