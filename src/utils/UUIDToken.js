import { v4 as uuidv4 } from 'uuid';
export const getUUID = () => {
    let uuid = localStorage.getItem('UUIDTOKEN')
    if (!uuid) {
        uuid = uuidv4()
        localStorage.setItem('UUIDTOKEN' , uuid)
    }
    return uuid
}