export function getProductList(productList){
    let productOption = [];
    productList.forEach((product)=>{
        let result = productOption.find( ({ key }) => key === product.Productid.id);
        if(!result){
            productOption.push({ 
                key:product.Productid.id, 
                value: {
                    id: product.Productid.id,  
                    product: product.Productid,
                    bandOption:[product.Band], 
                    subBandOption:[product.Subband]
                }, 
                text: product.Productid.name
            });
        }
        else{
            if(!result.value.bandOption.find(({ id }) => id === product.Band.id))
                result.value.bandOption.push(product.Band);
            if(!result.value.subBandOption.find( ({ id }) => id === product.Subband.id))
                result.value.subBandOption.push(product.Subband);
        }
    });
    console.info(productOption);
    return productOption;
}

export function getBandOption(selectedProduct){
    let bandOption = [];
    selectedProduct.bandOption.forEach((bandObj) =>{
        bandOption.push({
            key: bandObj.id,
            text: bandObj.val,
            value:bandObj.val
        });
    });
    return bandOption;
}

export function getSubBandOption(selectedProduct){
    let subBandOption = [];
    selectedProduct.subBandOption.forEach((subBandObj) =>{
        subBandOption.push({
            key: subBandObj.id,
            text: subBandObj.val,
            value:subBandObj.val
        });
    });
    return subBandOption;
}



