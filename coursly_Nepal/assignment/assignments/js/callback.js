// function call back 
const first = [1, 2, 3]

const addsomething =(callback)=>
{
  showScore.push(10); // same as append
  callback();
}

const showScore=()=>
{
  console.log(first);
}

setTimeout(addsomething(showScore), 1000);
// showScore()


// async function :- while using this we dont need to go for promis and all 
const Bmoon = async() =>
{
  return 'i am trying'
}
Bmoon().then(myPromise => {
  console.log(myPromise)
}).catch(e =>{
  console.log(e)
})


// // spread operator 
const firstArray = [1, 2, 3, 4];
const secondArray = [...firstArray]; // use of spread operator 
firstArray.push(10)
console.log(firstArray)
console.log(secondArray)


// spread operator 
const firstArray = [1, 2, 3, 4];
const secondArray = firstArray; // push to both first and second because there is no use of spread operator 
firstArray.push(10)
console.log(firstArray)
console.log(secondArray)

const firstArray = [1, 2, 3, 4];
const secondArray = [...firstArray]; // spread operator is use to expand the content  
secondArray.push(10);
console.log(firstArray);
console.log(secondArray);


// objects in js 
// we can create a object in many ways 
// creating a class 
const user = {
  name : 'yogesh khanal',
  age : 19,
  address : 'Nakkhu',
} 

// defining the objects  and assigining a new value to object's age 
const user2 = {...user, age:20}

// printing the class value 
console.log(user)
console.log(user2)

// use of spread operator in class 
// creating a class 
const user = {
  name : 'yogesh khanal',
  age : 19,
  address : 'Nakkhu',
} 

const citizenship = {
  no: 2518487,
  phone: 9843957012,
}

// merging of classes and chanhing the value of class  
const user2 = {...user, ...citizenship, age:20, no:254875}

// printing the class value 
console.log(user)
console.log(user2)


// in this case the first parameter is pryoritize as a imp and rest is set as not imp which is print by ...rest.
const liveLikeKing = (first, second, ...rest) =>
{
  console.log(first);
  console.log(second);
  console.log(rest);
}
liveLikeKing(1, 4, 'yogesh', 'sundar', 10)


// read world example of promiss 
const showTrendingVideo = (speed) => {
  return new Promise((resolve, reject)=>
  {
    if (speed<10)
    {
      resolve([{id:1, name:"war of hear"}, {id:2, name:'mayaa'}]);
    }
    else{
      reject({error: 'sorry the video can not be lode.'});
    }
  })
}
showTrendingVideo(1).then(data =>
{
  console.log(data);
}).catch = ((e) =>{
  console.log(e);
})


// Promise with condition 
// read world example of promiss 
const showTrendingVideo = (speed) => {
  return new Promise((resolve, reject)=>
  {
    if (speed<10)
    {
      resolve([{id:1, name:"war of hear", engagement: 10}, {id:2, name:'mayaa', engagement: 20}]);
    }
    else{
      reject({error: 'sorry the video can not be lode.'});
    }
  })
}
showTrendingVideo(1).then(data =>
{
  const names = data.map(char => char.engagement>=11) // returns either the condition is true or false 
  // const names = data.map(char => char.engagement) // returns a value of engagements
    console.log(names);
}).catch = ((e) =>{
  console.log(e);
})


      
// await function: this function only can use when there is async function is use and it cant be use in sync function 
// async function: makes an promise, due to which we dont need to make promiss 
const fetchTweet = async() => 
{
  return 'this is a first tweet';
}
const tweetFeed = async() => {
  var homePage = '';
  // try{
  //   const data = await fetchTweet();
  //   homePage = data;
  // }catch(e)
  // {
  //   homePage = 'sorry data could not fetch!'
  // }

  // this function is in replace of await function.
  fetchTweet().then(data => {
    console.log(data);
  }).catch(e=>{
    homePage = 'sorry data cant fetch!';
  })
  console.log(homePage);
}
tweetFeed()