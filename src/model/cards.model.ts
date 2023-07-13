import { Document } from "mongoose";

export class CardDocument extends Document {
  private _cardNumber: string;
  private _cvv: number;
  private _expirationMonth: string;
  private _expirationYear: string;
  private _email: string;
  private _token: string;

  constructor(
    doc: any,
    cardNumber: string,
    cvv: number,
    expirationMonth: string,
    expirationYear: string,
    email: string,
    token: string
  ) {
    super(doc);
    this._cardNumber = cardNumber;
    this._cvv = cvv;
    this._expirationMonth = expirationMonth;
    this._expirationYear = expirationYear;
    this._email = email;
    this._token = token;
  }

  set cardNumber(value: string) {
    this._cardNumber = value;
  }

  set cvv(value: number) {
    this._cvv = value;
  }

  set expirationMonth(value: string) {
    this._expirationMonth = value;
  }

  set expirationYear(value: string) {
    this._expirationYear = value;
  }

  set email(value: string) {
    this._email = value;
  }

  set token(value: string) {
    this._token = value;
  }
}
