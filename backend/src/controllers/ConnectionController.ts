import {Request, Response} from 'express';
import database from '../database/connection';

interface CreateRequest {
  user_id: string;
}

class ConnectionController {
  public async getTotal(request: Request, response: Response) {}

  public async create(request: Request, response: Response) {
    const {user_id} = request.body as CreateRequest;

    await database('connections').insert({
      user_id,
    });

    return response
      .status(200)
      .json({message: 'Connection successfully created!'});
  }
}

export default ConnectionController;
