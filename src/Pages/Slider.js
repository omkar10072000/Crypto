import { useState , useEffect } from "react";
import "./styles.css"; // Import CSS file for styling
import Navbar from "./Navbar";
import { Audio } from 'react-loader-spinner';


// const a = [
// ];



// const price = [];
// const slides =[];


// function retriveimage(coin) {
//   const url = `https://coingecko.p.rapidapi.com/coins/`+coin+`?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false`;
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '5ca41e04e9msha31eb5f23fbe9abp1af9acjsn626dfaec2a4c',
//       'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
//     }
//   };

//   return new Promise((resolve, reject) => {
    
//     fetch(url, options)
//       .then(response => response.json())
//       .then(result => {
//         const img = result.image.large;
//         console.log(img);
//         resolve(img);
//       })
//       .catch(error => reject(error));
//   });
// }




// async function information(coin){
//   const url = `https://coingecko.p.rapidapi.com/simple/price?ids=`+coin+`&vs_currencies=inr`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '5ca41e04e9msha31eb5f23fbe9abp1af9acjsn626dfaec2a4c',
// 		'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
// 	}
// };
// return new Promise((resolve, reject) => {
//   fetch(url, options)
//     .then(response => response.json())
//     .then(result => {
//       console.log(result);
//       const img = result;
//       console.log(img[coin].inr);
//       resolve(img[coin].inr);
//     })
//     .catch(error => reject(error));
// });
// }





// function images(coin) {
//   return retriveimage(coin);
// }

// // Call the images function synchronously
// function im (coin ){images(coin).then(img => {
//   console.log(img,"----------------------------");
//   a.push(img);
//   console.log(a);
//   return img;
// }).catch(error => {
//   console.error(error);
// });

// }

// function info (coin ){information(coin).then(img => {
//   console.log(img,"----------------------------");
//   price.push(img);
//   console.log(a);
//   return img;
// }).catch(error => {
//   console.error(error);
// });

// }


// var data = [];


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(1);
  const [currentIndex2, setCurrentIndex2] = useState(2);
  var count =1;

  var datas = [];

  const a = [];
const price = [];

async function fetchData(url) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5ca41e04e9msha31eb5f23fbe9abp1af9acjsn626dfaec2a4c',
      'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function retrieveImage(coin) {
  const url = `https://coingecko.p.rapidapi.com/coins/${coin}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false`;

  try {
    const result = await fetchData(url);
    return result.image.large;
  } catch (error) {
    console.error('Error retrieving image:', error);
    throw error;
  }
}

async function fetchInformation(coin) {
  const url = `https://coingecko.p.rapidapi.com/simple/price?ids=${coin}&vs_currencies=inr`;

  try {
    const result = await fetchData(url);
    return result[coin].inr;
  } catch (error) {
    console.error('Error fetching information:', error);
    throw error;
  }
}

async function getData(coin) {
  try {
    const imageData = await retrieveImage(coin);
    a.push(imageData);

    const priceData = await fetchInformation(coin);
    price.push(priceData);

    return { name: 'omkar', image: imageData, price: priceData };
  } catch (error) {
    console.error('Error getting data:', error);
    return null;
  }
}

async function main() {
  const coin = 'bitcoin';
  const data = await getData(coin);
  data.name = 'bitcoin';
  console.log('Data:', data);
  datas.push(data);
  console.log(datas)
}





  useEffect(()=>{
    main();
     
  },[]);
    
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === a.length - 2 ? 0 : prevIndex + 1));
    setCurrentIndex1((prevIndex) => (prevIndex === a.length - 2 ? 0 : prevIndex + 1));
    setCurrentIndex2((prevIndex) => (prevIndex === a.length - 2 ? 0 : prevIndex + 1));
    
    console.log(currentIndex,'-----------------',currentIndex1,'------------------------',currentIndex2);

  };

  const prevSlide = () => {
    
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? a.length - 2 : prevIndex - 1));
    setCurrentIndex1((prevIndex) => (prevIndex === 0 ? a.length - 2 : prevIndex - 1));
    setCurrentIndex2((prevIndex) => (prevIndex === 0 ? a.length - 2 : prevIndex - 1));
  
    
    console.log(currentIndex,'-----------------',currentIndex1,'------------------------',currentIndex2);
    console.log(datas);

  };

  const getNames=()=>{
    try{

      console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaa=>",datas);
      const n = datas[(currentIndex < a.length  ? currentIndex+1 : 0 )].image;
      
      return n;
    }catch(err){
       console.log('error=========================');
    }
    return 2000;
  }

  return (
    <div>
      <Navbar />
    <div className="slider-container">
      <button className="arrow prev" onClick={prevSlide}>
        &larr;
      </button>
      <div           isPacked={true} >
      <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
      </div>
      <div style={{display:'flex'}}           isPacked={true} >
      <div><img src={getNames()} alt={`Slide ${currentIndex - 1}`} className="slide" />
      <div style= {{textAlign:"center", color:"white",fontweight: "bold", margin: "10px 10px 10px -50px", fontfamily: "Montserrat",fontSize:"30px"}}>Bitcoin</div>
      <div style= {{textAlign:"center", color:"white",fontweight: "bold", margin: "10px 10px 10px -50px", fontfamily: "Montserrat",fontSize:"30px"}}>{price[(currentIndex < a.length  ? currentIndex+1 : 0 )]}</div></div>
      
      <div><img src={a[(currentIndex1 < a.length  ? currentmainIndex1+1 : 0 )]} alt={`Slide ${currentIndex - 1}`} className="slide" />
      <div style= {{textAlign:"center", color:"white",fontweight: "bold", margin: "10px 10px 10px -50px", fontfamily: "Montserrat",fontSize:"30px"}}>ethereum</div>
      <div style= {{textAlign:"center", color:"white",fontweight: "bold", margin: "10px 10px 10px -50px", fontfamily: "Montserrat",fontSize:"30px"}}>{price[(currentIndex1 < a.length  ? currentIndex1+1 : 0 )]}</div></div>
      
      <div><img src={a[(currentIndex2 < a.length  ? currentIndex2+1 : 0 )]} alt={`Slide ${currentIndex - 1}`} className="slide" />
      <div style= {{textAlign:"center", color:"white",fontweight: "bold", margin: "10px 10px 10px -50px", fontfamily: "Montserrat",fontSize:"30px"}}>dogecoin</div>      
      <div style= {{textAlign:"center", color:"white",fontweight: "bold", margin: "10px 10px 10px -50px", fontfamily: "Montserrat",fontSize:"30px"}}>{price[(currentIndex2 < a.length  ? currentIndex2+1 : 0 )]}</div></div>
      
      </div>
      <button className="arrow next" onClick={nextSlide}>
         &rarr;
      </button>
    </div>
    </div>
  );
};

export default Slider;

// hello