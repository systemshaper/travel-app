import { handleSubmit, handleRemove } from "./js/app"
import { restrictDateRange } from "./js/validation";
import './styles/style.scss'

document.querySelector('#generate').addEventListener('click', handleSubmit)
document.addEventListener('DOMContentLoaded', restrictDateRange)

export {
    handleSubmit, handleRemove
}