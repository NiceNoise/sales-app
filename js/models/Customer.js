function Customer(name, email, phone) {
    this.id= Date.now();
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.totalPurchases=0;
    this.date = new Date();
}

// Métodos del prototipo:
Customer.prototype.updateEmail = function(email) {
    if (!email && email.include("@") && email.include(".")){
        throw new Error("email inválido");
    } else{
        this.email=email;
    }
};

Customer.prototype.getName= function(){
    return this.name
}

Customer.prototype.getEmail=function(){
    return this.email;
}

Customer.prototype.getPhone=function(){
    return this.phone;
}

Customer.prototype.renderUI = function(){
    const a = document.createElement("a");
    a.className="list-group-item list-group-item-action";
    a.href="#";
    a.innerHTML="";
    a.innerHTML=`<div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">${this.getName()}</h6>
                </div>
                <small>${this.getEmail()}</small><br>
                <small>Tel: ${this.getPhone()}</small>
            </a>`
    
    return a;
}

