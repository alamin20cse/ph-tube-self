

const loadcatagory=()=>{
  
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=>res.json())
    // .then(data=>console.log(data.categories))
    .then(data=>displaycatagoriy(data.categories))
    .catch(error=>console.log(error));
    

};

loadcatagory();


const loadvideo=()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res)=>res.json())
    .then(data=>displayvideo(data.videos))
    .catch(error=>console.log(error))


}
loadvideo();


const displaycatagoriy=(data)=>{

    const buttoncontainar=document.getElementById('button-section');
    
    data.forEach(element => {
        // console.log(element.category);
        const button=document.createElement('button');
        button.classList='btn ';
        button.innerText=element.category;
        buttoncontainar.append(button);
        


        
    });
}


// ====

/*
{
    
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}
    */

// ==

const displayvideo=(data)=>{
 
    console.log(data);

    const videoContainar=document.getElementById('videos-id');
    data.forEach(item=>{
        
        const card=document.createElement('div');
        card.innerHTML=`
        
        <div class="card card-compact ">
  <figure class="h-[200px]">
    <img class="w-full h-full object-cover "
      src=${item.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="h-[150px]">






   <div class="flex justify-start gap-6">
            <div>
                <img class="h-10 w-10 rounded-full" src=${item.authors[0].profile_picture} alt="">
            </div>






             <div >
               
            <h1 class="font-bold text-lg">${item.title}</h1>

                <div  class="flex justify-start iteam-center">
                    

                    <p class="text-gray-400">${item.authors[0].profile_name}</p>
                     <img class="h-5 w-5" src="verify.png" alt="">
                 </div>
                 <p class="text-gray-400">${item.others.views} views</P>

            </div>


        </div>



    
    </div>
  </div>
</div>
        
        `;
        videoContainar.append(card);

       

    });





}