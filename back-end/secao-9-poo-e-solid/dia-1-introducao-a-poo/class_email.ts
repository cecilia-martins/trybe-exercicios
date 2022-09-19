class Email {
  private _from: string;
  private _to: string;
  private _message: string;
  private _subject: string;

  constructor(
    from: string,
    to: string,
    subject: string,
    message: string,
  ) {
    this._from = from;
    this._to = to;
    this._message = message;
    this._subject = '';
    this._subject = subject;
  }

  // altera o valor
  set subject(newSubject: string) { // string
    if (newSubject.length <= 40) this._subject = newSubject; // altera o valor caso a string seja menor igual a 40 caracteres
  }

  // mostra o valo do assunro // retornando o assunto
  get subject(): string { 
    return this._subject; 
  }

  get from(): string { return this._from; } // mostrando

  get to(): string { return this._to; } // mostrando

  get content(): string { // e mostrando
    return `
    From ${this._from} to ${this._to}
    ${this.subject}

    ${this._message}`;
  }
}

///////////////////


class MailList {
  // Essa sintaxe no construtor é chamada `Parameter Properties`
  // É um atalho para declarar e automaticamente atribuir o valor que será recebido via parâmetro ao atributo privado `mailList`
  constructor(private mailList: Email[] = []) { 
    // ...
  }

  // recebendo a classe Email
  get all(): Email[] { return this.mailList; } // ler a lista

  getEmailsSentBy(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.from === mailAddress); // retoranod apenas o email recebido de argumento
  }

  getEmailsTo(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.to === mailAddress);
  }

  getEmailsBySubject(searchString: string): Email[] {
    return this.mailList
      .filter((mail) => mail.subject.indexOf(searchString) !== -1);
  }

  addEmail(newMail: Email): void { this.mailList.push(newMail); } // setter

  removeEmail(mailToRemove: Email): void { // setter 
    // note que como essa é uma comparação de objetos, esse filter só funcionará se a referência de `mail` e `mailToRemove` for a mesma
    this.mailList = this.mailList.filter((mail) => mail !== mailToRemove);
  }
}


