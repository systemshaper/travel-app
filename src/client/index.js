import { handleSubmit, handleRemove } from "./js/app"
import { restrictDateRange } from "./js/validation";
import './styles/style.scss'
import './styles/tripcard.scss'

document.querySelector('#trip_input').addEventListener('submit', handleSubmit)
document.addEventListener('DOMContentLoaded', restrictDateRange)

export {
    handleSubmit, handleRemove
}