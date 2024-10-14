import axios from "axios";

export async function getProductsApi(){
   return await axios.get("http://209.38.216.132:5555/products",{
    headers:{
      'Content-Type': 'application/json',
    }
   }) 
}

export async function setProductsApi(prod:any) {
    await axios({
        method: 'post',
        url:"http://209.38.216.132:5555/products",
        data: prod
      });

}