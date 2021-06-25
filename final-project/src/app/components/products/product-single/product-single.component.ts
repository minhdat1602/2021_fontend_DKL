 param: any
  public product = {
    id: 0,
    img: '',
    isAvailable: true,
    name: '',
    priceOfPiece: 0,
    soldPieces: 0,
    shortDescription: '',
    status: '',
    totalPieces: 0,
    totalPrice: 0,
    quantity: 0
  }
  public imgSrc = [
    "assets/img/slide6.jpg",
    "assets/img/slide2.jpg",
    "assets/img/slide3.jpg",
    "assets/img/slide4.jpg",
    "assets/img/slide5.jpg",
  ]

  public index = 0;
  public quantities = 1;
  showSuccessPopup: boolean = false;

  constructor(
    private productsService: ProductsService, 
    private route: ActivatedRoute,
    private cartService: CartService,
    public formatNumberService: FormatNumberService
    ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(param => {
        this.param = param.id;
      })

    this.productsService.getProduct(this.param).subscribe(
      product => {
        this.product = product
      }
    )
  }

  // This code for slide images
  increIndex(): void {
    if (this.index < this.imgSrc.length - 1) {
      this.index++
    } else {
      this.index = 0
    }
  }


  decreIndex(): void {
    if (this.index <= 0) {
      this.index = this.imgSrc.length - 1
    } else {
      this.index--
    }
    console.log(this.index)
  }

  // End slide images

  // This code for increase and decrease number of products
  increNum(): void {
      this.quantities++
  }

  decreNum(): void {
    if (this.quantities > 1) {
      this.quantities--
    }
  }

  // End increase and decrease

  // format number
  

  addToCart(){
    this.product['quantity'] = this.quantities
    this.cartService.addToCart(this.product.id, this.product)
    this.cartNumberFunc()
    this.showSuccessPopupFunc()
  }
  
  // Increase number of items in real time
  cartNumber: number = 0
  cartNumberFunc() {
    let count = 0
    let cartValue = JSON.parse(localStorage.getItem('localCart') || '{}')
    this.cartNumber = cartValue.length
    for(let i = 0; i < cartValue.length; i++){
      count += cartValue[i]['product']['quantity']
    }
    this.cartNumber = count
    this.cartService.cartSubject.next(this.cartNumber)
    console.log(this.cartNumber)
  }

  showSuccessPopupFunc(){
    this.showSuccessPopup = true
    setTimeout(() => {
      this.showSuccessPopup = false;
    }, 2000)
  }

  hiddenSuccessPopup(){
    this.showSuccessPopup = false
  }
