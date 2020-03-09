interface DB {
  show(): void;
}

abstract class Bank {
  constructor(protected id: number) {}

  showId(): void {
    console.log(this.id);
  }
  //abstract method or function
  abstract showDetails(): void;
}

class HDFC extends Bank implements DB {
  constructor(id: number, private name: string) {
    super(id);
  }

  showId(): void {
    console.log(this.id);
    console.log(this.name);
  }

  show(): void {}

  showDetails(): void {}
}

var temp = new HDFC(101, "HDFC");
temp.showId();

// interface to interface ->extends
// interface A extends interface B

// class to class extends
// class A extends class B

// class to interface -> implements
// class A implements interface B
