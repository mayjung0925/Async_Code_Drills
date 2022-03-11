
// Timing out

function message(string){
    console.log(string);

}

message('Hey! yo!');

setTimeout(()=> message('Hello World'),2000);



getWords('Jenna','Lannie','Jim','Eunjin');

function getWords(word1, word2, word3 , word4){
    console.log(word1);
    setTimeout(()=>{
        console.log(word2)
        return setTimeout(()=>{
            console.log(word3)
            return setTimeout(()=>{console.log(word4)},1000)
        },2000)
    },3000)

}

// Callbacks and Recursion

function done() {
    console.log("Job's done!")
}

function countdown(num, callback) {

    setTimeout(() => {
        if (num > 0) {
            console.log(num);
            countdown(num - 1, callback)

        }else{
            callback()
        }
    },1000)
}

countdown(5,done);

// Promises Promises

let lunchTime = true;

function orderMeSomeFood(){
    return new Promise((resolve,reject)=>{
        if(lunchTime){
            let menu = {
                lunch: 'Salad',
                drink: 'lemonade'
            }
            resolve(menu);

        }else{
            let err = new Error("Sorry, it's not lunch time!") 
            reject(err);
        }

    })
}

orderMeSomeFood()
.then((menu)=>console.log(menu))
.catch((err)=>console.log(err))