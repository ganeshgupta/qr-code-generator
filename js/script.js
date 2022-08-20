const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')

const onGenerateSubmit = (e) => {
    e.preventDefault()

    const url = document.getElementById('url').value
    const size = document.getElementById('size').value

    const showSpinner = () => {
        document.getElementById('spinner').style.display = 'block'
    }
    const hideSpinner = () => {
        document.getElementById('spinner').style.display = 'none'
    }



    if(url === ""){
        alert('Please Enter a URL')
    }else{
        showSpinner()
        setTimeout(() => {
            hideSpinner()
        }, 5000)
    }


}

form.addEventListener('submit', onGenerateSubmit)