const products = [];

function check(product){
    if(product.price < 0){
        alert("Price can't be < 0");
        //document.table.reset();
    }
    else if(product.year < 0){
        alert("Year can't be < 0");
        //document.table.reset();
    }
    else if(product.check){
        if(product.check == 'Yes'){
            const table = document.querySelector('#product-table tbody');
            product.check = 'Yes';
            table.innerHTML += `<tr><th scope="row">${product.id}</th><td>${product.model}</td><td>${product.year}</td><td>${product.price+'$'}</td><td>${product.color}</td><td>${product.check}</td></tr>`;
        }
            
        else if(product.check == 'No'){
            const table = document.querySelector('#product-table tbody');
            product.check = 'No';
            table.innerHTML += `<tr><th scope="row">${product.id}</th><td>${product.model}</td><td>${product.year}</td><td>${product.price+'$'}</td><td>${product.color}</td><td>${product.check}</td></tr>`;
        }
            
            
        else
            alert("Enter a correct data to form");
    }
    else{
        const table = document.querySelector('#product-table tbody');
        table.innerHTML += `<tr><th scope="row">${product.id}</th><td>${product.model}</td><td>${product.year}</td><td>${product.price+'$'}</td><td>${product.color}</td><td>${product.check}</td></tr>`;
    }
}
function addToTable(product){
    check(product);
}


function WriteToForm(){
    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const priceInput = document.getElementById('price');
    const colorInput = document.getElementById('color');
    const iscustomsCleared = document.getElementById('checkbox-car');
    return{
        id: products.length + 1, 
        model: modelInput.value,
        year: yearInput.value,
        price: priceInput.value,
        color: colorInput.value,
        check: iscustomsCleared.value
        
    };
    
}

const subbtn = document.getElementById('submit-button');

subbtn.onclick = () =>{
    const clicked = WriteToForm();
    addToTable(clicked);
    products.push(clicked);
    document.table.reset();
}
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-submit");
const searchValue = searchInput.value;
searchButton.onclick = () =>{
    const text = document.querySelector(searchValue);
    alert(text);
}
/*for(let i = 0;i<products.length+1;i<0){
        if(searchValue == products[i]){
            alert(products[i]);
        }
        else{
            alert("There is no this value");
        }
    }*/ 