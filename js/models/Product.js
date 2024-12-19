function Product(name, price, stock) {
    this.id= Date.now();
    this.name=name;
    this.price=parseFloat(price);
    this.stock=parseInt(stock);
    this.date = new Date();
}

// Métodos del prototipo:
Product.prototype.updateStock = function(quantity) {
    // Actualiza el stock y valida que no sea negativo
    if (isNaN(quantity)){
        throw new Error("Dato no es válido")
    } 
      
    if (this.stock + quantity > 0) {
        this.stock +=quantity;
    } else {
        throw new Error("stock insuficiente")
    }
};

Product.prototype.getFormattedPrice = function() {
    // Retorna el precio formateado como moneda (S/ 1,500.00)
    return new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN',
        minimumFractionDigits: 2
    }).format(this.price);
};

Product.prototype.getName = function(){
    return this.name;
}

Product.prototype.getStock = function(){
    return this.stock;
}

Product.prototype.getProductInfo = function() {
    // retorna: Pelota Adidas - S/ 389.00 (Stock: 14)
    return `${this.name} - ${this.getFormattedPrice()} (Stock: ${this.stock})`
};

Product.prototype.renderUI = function() {
    // retornar un elemento HTML `li` con la información del producto
    const a = document.createElement("a");
    a.className="list-group-item list-group-item-action";
    a.href="#";
    a.innerHTML="";
    a.innerHTML=`<div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1">${this.getName()}</h6>
    <small>${this.getFormattedPrice()}</small>
    </div>
    <small>Stock: ${this.getStock()}</small>`

    return a;
};
