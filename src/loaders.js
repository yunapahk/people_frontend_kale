import {baseUrl} from './base_url';

export const peopleLoader = async () => {
    // make a call to backend index route
    const response = await fetch(`${baseUrl}/people`)
    // convert the response in a js object
    const people = await response.json()
    // return the people
    return people
}

export const personLoader = async ({params}) => {
    // get the id param from the params object
    const id = params.id
    // make a call to backend show route
    const response = await fetch(`${baseUrl}/people/${id}`)
    // convert the response into a js object
    const person = await response.json()
    // return the person
    return person
}