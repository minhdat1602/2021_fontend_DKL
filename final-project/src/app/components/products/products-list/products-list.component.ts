page = 1;
  count = 0;
  tableSize = 9;
  tableSizesArr = [4, 8, 12];

  constructor(
    private productsService: ProductsService,
    public formatNumberService: FormatNumberService
    ) { }

  products: any[] = [];
  ngOnInit(): void {
    this.showData()
  }

  showData() {
    this.productsService.getAllProduct().subscribe(
      item => {
        this.products = item
      } 
    )
  }

  tabSize(event: any){
    this.page = event;
    this.showData();
  }  