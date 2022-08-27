//1 в реакте в классах
class Foo extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {}
  
    render() {
      return (
        // под капотом реакт будет делить примерно так если я правильно понисаю
        //document.querySelector("button").addEventListener("click",
        //handleClick) //в таком случае контекст будет потерян, поэтому мы
        //биндим метод в конструкторе
        <button type="button" onClick={this.handleClick}></button>
      );
    }
  }
  //в js (в чем приимущества!)
  class Cart {
    constructor(container = ".cart", counterContainer = ".counter") {
      this.container = container;
      this.counterContainer = counterContainer;
      this._init();
      this.summ = 0;
      this.counter = 0;
    }
  showCart(){
      console.log(this)
  }
  _fillCounter(event){
      this.counter = event.target.dataset.counter
  }
    _init() {
      let block = document.querySelector(this.container);
      document.querySelector(".basket").addEventListener("click", () => {
        block.classList.toggle("hidden");
      });
      // это класс из моего учебного проекта, тут понятно приемущества привязывания контекста
      //  мне пришлось делать это несколько раз, хотя правильнее сделать один раз в конструкторе и не
      // дублировать код.
      block.addEventListener("click", (e) => {
        if (e.target.classList.contains("clearCart__Btn")) {
          this._clearCart().bind(this);
          this.goods = [];
          this._fillCounter().bind(this);
        }
        if (e.target.classList.contains("delete__good")) {
          this._removeEl(e.target.dataset.id);
          this.showCart().bind(this);
        }
        if (e.target.classList.contains("decrease")) {
          this._decreaseQuantity(e.target.dataset.id);
          this.showCart().bind(this);
        }
        if (e.target.classList.contains("increase")) {
          this._increaseQuantity(e.target.dataset.id);
          this.showCart(e).bind(this);
        }
      });
    }
  }
  
  //3 пример
  // этот пример похож на пример из дз. Когда мы копируем
  class Example {
    constructor(text) {
      this.text = text;
      this.logger = this.logger.bind(this);
    }
    logger() {
      console.log(this.text);
    }
    cantLog() {
      console.log(this.text);
    }
  }
  
  const example = new Example("увидим только если контекст привязан");
  
  const checkHowItWorks = example.logger;
  
  checkHowItWorks(); //"увидим только если контекст привязан"
  
  const cantLog = example.cantLog;
  
  cantLog("будет ошибка"); // ошибка "Cannot read properties of undefined (reading 'text')"
  
  // если подвести итог такой метод убережот от внезапных ошибок при передачи метода обработчикам событий, возможно есть смысл привязывать
  // контекст для большинства методов классов которые могли бы использоваться в ситуации где они меняют this