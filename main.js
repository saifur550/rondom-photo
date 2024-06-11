const container = document.querySelector('.img-container')
const btn = document.querySelector('#btn')



btn.addEventListener('click',()=>{
    newAddImg()
  
    console.log(imgNum);
})

function newAddImg (){
    imgNum = 10;
    for( let x = 0; x < imgNum; x++){
        const createImg = document.createElement('img')
        let y = createImg.src =`https://picsum.photos/200?random=${Math.floor(Math.random()* 2000)}`
        container.appendChild(createImg)
        console.log(y.length);

    }
}