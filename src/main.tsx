import { user }  from './user';

function greeter(person: string) {
    return "Hello, " + person;
}

console.log(greeter(user));