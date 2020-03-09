class Bank {
  constructor(private id: number) {}

  showId(): void {
    console.log(this.id);
  }
}

class HDFC extends Bank {
  constructor(id: number, private name: string) {
    super(id);
  }

  showName(): void {
    console.log(this.name);
  }
}

var temp = new HDFC(101, "Rahul");
temp.showId();
temp.showName();
