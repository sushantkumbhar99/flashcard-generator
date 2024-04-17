
import React   from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import { FaArrowLeft } from "react-icons/fa";


const FlashcardDetails = () => {
  const { resId } = useParams();
  const flashcard = useSelector(state => state.flashcards.flashcards.find(flashcard => flashcard.id === resId));


  // using useState for adding active class
  


  if (!flashcard) {
    return <div className=''>Flashcard not found</div>;
  }
 
  // console.log("Terms:", flashcard.terms); // Log terms before rendering

  return (



    <div className='w-9/12 m-auto overflow-hidden  bg-red-50 mt-1'>

      <div className='bg-red-50'>
        <div className=''>
          <div className='flex overflow-hidden'>
            <Link className='text-xl mt-3 ' to={"/MyFlashCards"}><FaArrowLeft /></Link> 
            <span><h1 className='ml-10 font-bold text-lg py-2'>{flashcard.title}</h1></span>
          </div>
          <p className='ml-16 font-normal'>{flashcard.description}</p>
        </div>
        <div className=' '>
          <Carousel terms={flashcard.terms} />
        </div>
    
      </div>

        
    </div>
  );
}

export default FlashcardDetails;