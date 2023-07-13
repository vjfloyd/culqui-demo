import { Document } from 'mongoose'

export interface ICard extends Document {
    cardNumber : string
    cvv: string
    expirationMonth: string
    expirationYear: string
    email: string

}
