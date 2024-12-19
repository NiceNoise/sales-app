
// Managment 
let productsArray=[];

const $productForm = document.getElementById("productoForm");

$productForm.addEventListener("submit",getDataProduct);

function getDataProduct(event){
    event.preventDefault();

    //para capturar los datos de un form
    const form=event.target;
    // se crea una instancia
    const product=new Product (form.nombreProducto.value, form.precio.value,form.stock.value);
    // se añade a la lista de productos
    productsArray.push(product);

    //renderizado
    const list=document.getElementById("listaProductos");
    
    list.innerHTML='';

    productsArray.forEach((product)=>{
        list.appendChild(product.renderUI());
    })

    // reseteo formulario
    $productForm.reset();
}


let customersArray=[];


const $customerForm = document.getElementById("clienteForm");

$customerForm.addEventListener("submit",getDataCustomer);

function getDataCustomer(event){
    event.preventDefault();

    //para capturar los datos de un form
    const form=event.target;
    // se crea una instancia
    const customer=new Customer (form.nombreCliente.value, form.email.value,form.telefono.value);
    // se añade a la lista de productos
    customersArray.push(customer);

    //renderizado
    const list=document.getElementById("listaClientes");
    
    list.innerHTML='';

    customersArray.forEach((customer)=>{
        list.appendChild(customer.renderUI());
    })

    // reseteo formulario
    $customerForm.reset();
}

