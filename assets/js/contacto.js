const $form = document.querySelector('#contact');
const $buttonMailTo =document.querySelector('#mail')

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){

    event.preventDefault();
    const form = new FormData(this);
    $buttonMailTo.setAttribute('href',`mailto:anfeberi@gmail.com?subject=${form.get('subject')}&body=mi nombre es: ${form.get('name')} y mi Correo: ${form.get('email')} ${form.get('message')}`)
    $buttonMailTo.click();


}