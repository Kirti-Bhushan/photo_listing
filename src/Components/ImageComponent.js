import React,{useState,useEffect} from 'react'    
import {getImageList} from '../Service'

const ImageComponent = (props) => {
    
    const [imageList,setImageList]=useState([])

    const handleSubmit=(id)=>{
        imageList.forEach(element => {
            if(element.id ===id){
                element.selected=!element.selected
            }      
        });

        let newImageList=[...imageList]

        setImageList(newImageList)

        let imageListToSend=newImageList.filter(image=>image.selected)

        props.sendImageListData(imageListToSend)
    }
    

    useEffect(()=>{
        getImageList()
        .then((response)=>{ 
            response.data.forEach(element => {  
                element['selected']=false    
            })
            setImageList(response.data)    
        })
        .catch(error=>console.log(error))
    },[])

   
    return (
        <div className="cards" >
                {imageList.map((image,index)=>(
                    
                    <div className='card' key={index}>
                        <img className='card' src={image.thumbnailUrl} alt={image.title}/>
                        <p><b>Title:</b>{image.title}</p>
                        <p><b>Id:</b>{image.id}</p>
                        <p><b>Url:</b>{image.url}</p> 
                        
                        { image.selected?<button type='submit' onClick={()=>handleSubmit(image.id)} className='btn remove-task-btn'>Remove</button>
                            :<button type='submit' onClick={()=>handleSubmit(image.id)} className='btn compare-task-btn'>Compare</button>}  
                    </div>
                 ))}
        
        </div>
        )
}

export default ImageComponent
