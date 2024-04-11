// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch hook
// import { Link } from 'react-router-dom';
 
// import { removeFlashcard } from '../../Redux/flashcardsSlice';

// const MyFlashCards = () => {
   
//   const dispatch = useDispatch(); // Get dispatch function using useDispatch hook
//   const flashcards = useSelector(state => state.flashcards.flashcards);

 

//   const handleDeleteClick = (flashcardId) => {
//     // Dispatch the removeFlashcard action with the flashcardId
//     dispatch(removeFlashcard(flashcardId));
//   };

//   return (
//     <div className=' h-screen'>
   
//       <div className=' w-4/5 flex  m-auto flex-wrap justify-center mt-4'>

//       {flashcards.length === 0 && (
//         <div className='bg-red-600'>
//           <Link className='bg-red-500 text-white font-semibold py-1 px-2 rounded-lg' to={"/"}>Create</Link>
//         </div>
//        )}

//         {flashcards.map(flashcard => (
//           <div className=' my-5 mx-2' key={flashcard.id}>
//             {console.log(flashcard)}

//             <img src={flashcard.uploadImage} alt="Flashcard_Image" className="w-16 rounded-full absolute " />

//             <div className='border-2 w-64 h-60 text-center bg-red-100 relative'>
              
//               <div className='flex  justify-around my-4 '>
 
              
//                  <h2 className='text-xl font-bold text-zinc-600'>{flashcard.title}</h2>
 
           
//                   {   /* Add a button to delete the flashcard */}
//                 <button className='bg-black text-white  p-1 rounded-lg' onClick={() => handleDeleteClick(flashcard.id)}>Delete</button>
//               </div>


//             <p className='text-base text-emerald-900 font-bold'>{flashcard.description}</p>
//             <p className='text-md text-gray-900 font-medium my-5'>{flashcard.termsLength} Cards</p>


//                 <div className='mb-5'>
//                  {/* Use Link component for navigation */}
//                     <Link className='bg-red-500 text-white font-semibold py-2 px-10 rounded-lg ' to={`/FlashcardDetails/${flashcard.id}`}>View</Link>
//                  </div>
//             </div>

        
//           </div>

//         ))}
        
//       </div>
//     </div>
//   );
// }

// export default MyFlashCards;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFlashcard } from '../../Redux/flashcardsSlice';
import Logo from '../Navbar/logo.png';

import { BsFillTrash3Fill } from "react-icons/bs";


const MyFlashCards = () => {
   
  const dispatch = useDispatch();
  const flashcards = useSelector(state => state.flashcards.flashcards);

  const handleDeleteClick = (flashcardId) => {
    dispatch(removeFlashcard(flashcardId));
  };

  return (
    <div className=' pb-40 bg-red-50 '>
      {/* <div className='w-4/5 h-full flex m-auto flex-wrap justify-center mt-6'> */}
      <div className='w-4/5   flex m-auto flex-wrap justify-center mt-5'>
         {/* when length of card will be zero we show a message => Flashcards Is Not Available. if length of card 1 or more then it will show the cards */}

      {flashcards.length === 0 ? (
        <div className='flex flex-col items-center justify-center h-[80vh]'>
          <div className='text-red-600 m-2 font-bold' >
            Flashcard Is Not Available
          </div>
          {/* if there is no any flashcards then a button will show which redirects you to the home page (Create flashcard page) */}
          <Link to='/'>
            <button className='rounded-xl hover:bg-red-800 bg-red-700 px-4 p-2 m-2 text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium  py-2.5 mr-2 mb-2 '>
              Create Flashcards
            </button>
          </Link>
        </div>) : (null)
      }

                {flashcards.map(flashcard => (
                      <div className='my-8 mx-2 relative' key={flashcard.id}>
                        <button className='    text-gray-500 p-1 mt-2 absolute top-1 z-10 right-3 rounded-lg' onClick={() => handleDeleteClick(flashcard.id)}>< BsFillTrash3Fill size={28} /></button>

                        <div className='border-2 w-72 rounded-md h-60 text-center  bg-white relative'>

                        {flashcard.uploadImage ? (
                          <img src={flashcard.uploadImage} alt={`Flashcard_Image_${flashcard.id}`} className="w-16 h-16 rounded-full border-[2px] border-slate-400 object-center absolute bottom-52 left-1/2 transform -translate-x-1/2" />
                          ) : (
                           <img src={Logo} alt={`Static_Image_${flashcard.id}`} className="w-16 h-16 rounded-full absolute bottom-52 left-1/2 transform  border-zinc-4
                           00 shadow-2xl border-[1px]  -translate-x-1/2" />
                          )}

                          <div className='mt-10 mb-3'>
                          <h2 className='text-xl font-bold text-zinc-600'>{flashcard.title}</h2>
                   
                         </div>
                  <p className='text-base text-emerald-900 overflow-hidden font-bold'>{flashcard.description}</p>
                    <p className='text-md text-gray-900 font-medium my-5'>{flashcard.termsLength} Cards</p>
                  <div className='mb-5'>
                    <Link className="inline-flex mt-1 items-center px-8 sm:px-12 md:px-12 lg:px-12 xl:px-12 py-2 text-center max-w-xs  dark:border-red-500  bg-white rounded-full hover:bg-red-100 font-bold  text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800  text-lg mr-2 mb-2" to={`/FlashcardDetails/${flashcard.id}`}>View</Link>
                </div>
              </div>
              </div>


          

              ))}
      </div>

       
    </div>
  );
}

export default MyFlashCards;
 