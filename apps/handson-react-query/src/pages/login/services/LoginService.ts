import { LoginFormValues } from "./LoginTypes";


export const GetLoginInitialValues = () : LoginFormValues => 
{
    return {
        username: '',
        password: ''
    }
}

export const ValidateLogin = (values: LoginFormValues)  =>{
    let errors : any = {};
    
    if (!values.username) {
    errors.username = 'Required';
    }

    if (!values.username) {
    errors.password = 'Required';
    }

    return errors;
}


export const DoLogin = async (values: LoginFormValues) : Promise<string> => {
    console.log("Doing login");
    var body = JSON.stringify(values);
    console.log(body);
    const response = await fetch('http://localhost:3333/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    });

    if (response.ok) {
        const data = await response.json();
        return data.authToken;
    }

    if (response.status === 400 || 
        response.status === 401
    ) {
        let data = await response.json();
        throw new Error(data.error);
    }

    throw new Error('Verify if the service is responding and try again later');
}





