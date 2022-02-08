import { handleGenerate } from "./js/app"
import './styles/style.scss'

document.querySelector('#generate').addEventListener('click', handleGenerate);

export {
    handleGenerate
}