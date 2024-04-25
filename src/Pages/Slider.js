import { useState , useEffect } from "react";
import "./styles.css"; // Import CSS file for styling
import Navbar from "./Navbar";
import { Audio } from 'react-loader-spinner';


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(1);
  const [currentIndex2, setCurrentIndex2] = useState(2);
  
  const [flag, setflag] = useState(true);
  const [datas , setdatas]= useState([]);
  var count =1;

  const a = [];
  const price = [];
  
  useEffect(()=>{

async function fetchData(url) {
  const options = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0a11b58c70mshe7dc7ddd4c0a177p1bb4aejsnf3ee63ce2660',
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

    return { name: coin , image: imageData, price: priceData };
  } catch (error) {
    console.error('Error getting data:', error);
    return null;
  }
}

async function main() {
  const coins = ['bitcoin','bitcoin','bitcoin','bitcoin'];
  var arrr = [];
  
  for(let i=0;i< coins.length;i++)
  {
  const data = await getData(coins[i]);

  if(data)
  {
   
   setflag(false);
    
   arrr.push(data);
   if((datas.length===0))
   {
   setdatas(arrr);
   }
  }
  }
  console.log('Data:', datas);
}






    main();    
     
  },[]);
    
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === a.length - 2 ? 0 : prevIndex + 1));
    setCurrentIndex1((prevIndex) => (prevIndex === a.length - 2 ? 0 : prevIndex + 1));
    setCurrentIndex2((prevIndex) => (prevIndex === a.length - 2 ? 0 : prevIndex + 1));
    
    console.log(currentIndex,'-----------------',currentIndex1,'------------------------',currentIndex2);
    console.log(datas);
  };

  const prevSlide = () => {
    
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? a.length - 2 : prevIndex - 1));
    setCurrentIndex1((prevIndex) => (prevIndex === 0 ? a.length - 2 : prevIndex - 1));
    setCurrentIndex2((prevIndex) => (prevIndex === 0 ? a.length - 2 : prevIndex - 1));
  
    
    console.log(currentIndex,'-----------------',currentIndex1,'------------------------',currentIndex2);
    console.log(datas);

  };

  // const getNames=()=>{
  //   try{

  //     console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaa=>",datas);
  //     const n = datas[(currentIndex < a.length  ? currentIndex+1 : 0 )].image;
      
  //     return n;
  //   }catch(err){
  //      console.log('error=========================');
  //   }
  //   return 2000;
  // }

  return (
    <div>
      <Navbar />
      <div className="slider-container">
        
        <button className="arrow prev" onClick={prevSlide}>
          &larr;
        </button>
        {
        console.log("length========================",flag)}
        {flag ? (
          <div>
            <Audio height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        ) : (
          <div style={{ display: 'flex' }} >
            {
          console.log("azesdxcfgvbhjnnbhvg",datas,"azesdxcfgvbhjnnbhvg",datas[1],"azesdxcfgvbhjnnbhvg",datas[2],datas.length,datas[0])}
            <div>
              <img src={datas[0].image} className="slide" />
              <div style={{ textAlign: "center", color: "white", fontWeight: "bold", margin: "10px 10px 10px -50px", fontFamily: "Montserrat", fontSize: "30px" }}>{datas[1].name}</div>
              <div style={{ textAlign: "center", color: "white", fontWeight: "bold", margin: "10px 10px 10px -50px", fontFamily: "Montserrat", fontSize: "30px" }}>{datas[2].price}</div>
            </div>
            
          </div>
        )}
        
        <button className="arrow next" onClick={nextSlide}>
          &rarr;
        </button>
      </div>
    </div>
  );
};  

export default Slider;

// hello