const userEmail = document.querySelector("#create-user-email");
const errorNotification = document.querySelector("#email-exsist-error");
const successNotification = document.querySelector("#email-unique-success");
let toggleMessage = (isUserExsists) => {
    console.log(isUserExsists)
    if(isUserExsists)
    {
        errorNotification.classList.remove('d-none');
        if(!successNotification.classList.contains('d-none'))
                     successNotification.classList.add('d-none');
        submitButton.disabled = true;

    }else{

        successNotification.classList.remove('d-none')
        if(!errorNotification.classList.contains('d-none'))
        errorNotification.classList.add('d-none');
        submitButton.disabled = false;


    }   
}



let checkEmailExsists = (event) => {
    console.log(event.currentTarget.value);
    email =  event.currentTarget.value;
    if(email!= '' && email.includes('@') && email[email.length-1]!='@')
    {
        $.ajax({
            type:'get',
            url:'user/isExsist',
            data:{email:email},
            success:
                function(data)
                {
                    console.log("Success")
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

