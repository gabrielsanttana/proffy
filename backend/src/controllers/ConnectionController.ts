import {Request, Response} from 'express';
import database from '../database/connection';

class ConnectionController {
  public async getTotal(request: Request, response: Response) {
    const totalConnections = await database('connections').count('* as total');

    const {total} = totalConnections[0];

    response.status(200).json({total});
  }

  public async create(request: Request, response: Response) {
    const {user_id} = request.body;

    await database('connections').insert({
      user_id,
    });

    return response
      .status(200)
      .json({message: 'Connection successfully created!'});
  }
}

export default ConnectionController;
