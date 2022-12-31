import { fail } from "@sveltejs/kit";
import axios from "axios";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async({request}) => {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const phone_number = data.get('phone_number');
        const password = data.get('password');

        // Check
        if(!name || !email || !phone_number || !password){
            return fail(400, { 
                name,email,phone_number, missing: true ,
            });
        }

        const response = await axios.post(`http://localhost/svelte-php/user`,new URLSearchParams({
            name: name,
            phone_number: phone_number,
            email: email,
            password: password,
        }));

        if(response.data.status === 201){
            return {
                message:'Successfully added user',
                success:true
            }
        }
    }
}