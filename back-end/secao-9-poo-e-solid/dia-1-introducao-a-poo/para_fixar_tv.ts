class Tv {
  private _brand: string
  private _size: number
  private resolution: string
  private _connections: string[]
  private _connectedTo?: string

  constructor(b: string, s: number, r: string, c1:string[]) {
    this._brand = b;
    this._size = s;
    this.resolution = r;
    this._connections = c1;
    // this.connectedTo = c2;
  }

  getConnTo(): string | undefined  {
    return this._connectedTo;
  }

  // meio eu e meio gabarito
  setConnTo(param: string | undefined):void | string {
    if (!param || this._connections.includes(param)) {
      this._connectedTo = param;
    } else {
       return `Sorry, connection unavailable!`;
    }
  }

  turnOn():void {
    console.log(this._brand);
    console.log(this._size);
    console.log(this.resolution);
    console.log(this._connectedTo);
    console.log(this._connections);
  }
}

//gabarito
const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);

tv1.turnOn();


// EU
tv1.setConnTo('Wi-Fi');
console.log('Connected to: ', tv1.getConnTo());

// GABARITO?
// tv1.connectedTo = 'Wi-Fi';
// console.log('Connected to: ', tv1.connectedTo);
