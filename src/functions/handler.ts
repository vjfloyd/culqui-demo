"use strict";
import { CardService } from "../service/card.service";
import { tokenValidator } from "../utils/tokenValidator";
import { inputValidator } from "../utils/inputValidator";

export const create = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    tokenValidator(event.headers, callback);
    inputValidator(JSON.parse(event.body), callback);
    let service = new CardService();
    await service.save(event);
    callback(null, {
      statusCode: 201,
      body: JSON.stringify("card created"),
    });
  } catch (err) {
    callback(null, {
      statusCode: err.statusCode || 500,
      headers: { "Content-Type": "text/plain" },
      body: "Could not create card.",
    });
  }
};

export const getOne = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    tokenValidator(event.headers, callback);
    let service = new CardService();
    const card = await service.getCard(event.pathParameters.id);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(card),
    });
  } catch (err) {
    callback(null, {
      statusCode: err.statusCode || 500,
      headers: { "Content-Type": "text/plain" },
      body: "Could not fetch the card.",
    });
  }
};
