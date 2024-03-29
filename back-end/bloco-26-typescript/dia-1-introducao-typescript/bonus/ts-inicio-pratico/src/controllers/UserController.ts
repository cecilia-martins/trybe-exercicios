import { Request, Response } from "express";
import EmailService from "../services/EmailService";


const users = [
  { name: 'Diego', email: 'diego@rockeseat.com'}
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail(
      { name: 'Diego Fernandes', email: 'diego@rocketseat.com'},
      { subject: 'Bem vindo', body: 'Seja bem vindo'}
    );
    return res.send('mensagem de retorno :)')
  }
};