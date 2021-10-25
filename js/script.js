
    // 1) Chiedere età e km
    // 2) Calcolo prezzo
    // 3) Output

    

    const age = parseInt(prompt('Quanti anni hai?'));
    const km = parseInt(prompt('Quanti km devi percorrere?'));
    const pricekm = 0.21;

    let validData = true;
    let errorMsg = '';
    let couponMsg = '';
 
    let price = km * pricekm;

    console.log('anni', age);
    console.log(km);
    console.log(pricekm);
    console.log(price);



    if(age < 18){
       price -= price * 0.2;
    }  else if(age > 64){
        price -= price * 0.4;
    } 

    document.getElementById('prezzo').innerHTML = price.toFixed(2);
    