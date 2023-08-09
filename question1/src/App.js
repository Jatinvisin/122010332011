import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MultiApiCallExample() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);

  useEffect(() => {

    axios.get('http://20.244.56.144/numbers/primes')
      .then(response => {
        setData1(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from endpoint 1:', error);
      });


    axios.get('http://20.244.56.144/numbers/fibo')
      .then(response => {
        setData2(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from endpoint 2:', error);
      });

    axios.get('http://20.244.56.144/numbers/odd')
      .then(response => {
        setData3(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from endpoint 2:', error);
      });

    axios.get('http://20.244.56.144/numbers/rand')
      .then(response => {
        setData4(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from endpoint 1:', error);
      });
  }, []);

  const similarNumbers = [];
  const allArrays = [data1, data2, data3];

  for (let num of data1) {
    let isSimilar = true;
    for (let i = 1; i < allArrays.length; i++) {
      if (!allArrays[i].includes(num)) {
        isSimilar = false;
        break;
      }
    }
    if (isSimilar) {
      similarNumbers.push(num);
    }
  }

 

  
  
  

  return (
    <div>
      <h1>Develop Number Management HTTP Microservice</h1>
      <div>
        <h2>Test API for Prime numbers</h2>
        <pre>{JSON.stringify(data1, null, 2)}</pre>
      </div>
      <div>
        <h2>Test API for Fibo</h2>
        <pre>{JSON.stringify(data2, null, 2)}</pre>
      </div>
      <div>
        <h2>Test API for Odd</h2>
        <pre>{JSON.stringify(data3, null, 2)}</pre>
      </div>
      <div>
        <h2>Test API for Random</h2>
        <pre>{JSON.stringify(data4, null, 2)}</pre>
      </div>
      <div>
        <h2>Similar Numbers: {JSON.stringify(similarNumbers)}</h2>
      </div>
    </div>
  );
}

export default MultiApiCallExample;
