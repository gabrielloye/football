export class Feedback {
    firstname: string;
    lastname: string;
    email: string;
    rating: number;
    feedback:string;
}

export const formErrors = {
    'firstname':'',
    'lastname':'',
    'email':'',
    'feedback':'',
}
export const validationMessages = {
    'firstname': {
        'required': 'First Name is required',
        'minlength':     'First Name must be at least 2 characters long.',
        'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
        'required': 'Last Name is required',
        'minlength':     'First Name must be at least 2 characters long.',
        'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'email': {
        'required': 'Email is required',
        'email': 'Email not in valid format'
    },
    'feedback': {
        'required': 'Feedback cannot be empty'
    }
}