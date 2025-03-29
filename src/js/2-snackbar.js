import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    const inputDelay = form.querySelector('input[name="delay"]');
    const delay = Number(inputDelay.value);
    
    const inputState = form.querySelector('input[name="state"]:checked');
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (inputState.value === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay)
    });

    promise
        .then(result => {
            iziToast.success({
                title: '<span class="custom-title">OK</span>',
                message: ` <span class="custom-message">Fulfilled promise in ${result}ms</span>`,
                timeout: 20000,
                position: 'topCenter',
                backgroundColor: '#59a10d',
                theme: 'dark',
                class: 'my-toast'
});
            
        })
        
        .catch(error => {
            iziToast.error({
                title: '<span class="custom-title">Error</span>',
                message: ` <span class="custom-message">Rejected promise in ${error}ms</span>`,
                timeout: 20000,
                position: 'topCenter',
                backgroundColor: '#ef4040',
                theme: 'dark',
                class: 'my-toast'
});
                   
        });
}
    



  