import { handleSubmit } from "./js/app"
import './styles/style.scss'

document.querySelector('#generate').addEventListener('click', handleSubmit);

export {
    handleSubmit,
}