import axios from "axios";

export default function reservation(){
    const $form = document.querySelector("#reservation_form");

    const $nameInput = document.querySelector("#name_input");
    const $emailInput = document.querySelector("#email_input");
    const $whenArea = document.querySelector("#when_area");

    //Getting backend url from .env file
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    $form.addEventListener("submit", async (e) => {
        e.preventDefault();

        await axios.put(backendUrl, {
            name: $nameInput.value,
            email: $emailInput.value,
            when: $whenArea.value
        })
    })
}