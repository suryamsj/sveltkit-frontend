import { fail } from "@sveltejs/kit";
import axios from "axios";

/** @type {import('./$types').PageLoad} */
export async function load({params}){
    const response = await axios.get(`http://localhost/svelte-php/user/${params.uuid}`);
    const user = await response.data;
    if(user){
        return {
            user
        };
    }

    throw error(404,'Not Found');
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async({request,params}) => {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const phone_number = data.get('phone_number');

        // Check
        if(!name || !email || !phone_number){
            return fail(400, { 
                name,email,phone_number, missing: true ,
            });
        }

        const response = await axios.put(`http://localhost/svelte-php/user/${params.uuid}`,new URLSearchParams({
            name: name,
            phone_number: phone_number,
            email: email,
        }));

        if(response.data.status === 200){
            return {
                message:'Successfully updated user',
                success:true
            }
        }
    }
}