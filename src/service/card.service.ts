import { Card } from "../db/schema/Card";
import { CardDocument } from "../model/cards.model";
import { generateToken } from "../utils/tokenGenerator";
import { CardRepository } from "../repository/cardRepository";

export class CardService {
  private cardRepository: CardRepository;

  constructor() {
    this.cardRepository = new CardRepository(Card);
  }

  public async save(card: any) {
    console.log("CardService -> save");
    try {
      let cardDocument: CardDocument = JSON.parse(card.body);
      cardDocument.token = generateToken(16);
      await this.cardRepository.create(cardDocument);
    } catch (error) {
      console.log(error);
    }
  }

  public async getCard(token: string) {
    console.log("CardService -> getCard");
    const card = await this.cardRepository.findByToken(token);
    const cardDto = {
      cardNumber: card.cardNumber,
      expirationMonth: card.expirationMonth,
      expirationYear: card.expirationYear,
      email: card.email,
    };
    return cardDto;
  }
}
