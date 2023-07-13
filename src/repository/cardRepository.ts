import { BaseRepository } from './baseRepository'
import {ICard} from '../domain/models/ICard'
import {Card} from '../db/schema/Card'
import {Document} from "mongoose";


export class CardRepository extends BaseRepository<ICard> {

    constructor() {
        super(Card)
    }

    public findByToken(_token: string): Promise<Document|null> {
        return Card.findOne({ token: _token}).exec()
    }
}
