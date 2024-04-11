

import React, { useRef } from 'react';
import { Field, ErrorMessage } from 'formik';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import { BiSolidTrashAlt } from 'react-icons/bi';
import { TbEdit } from 'react-icons/tb';
import { IoMdAdd } from "react-icons/io";



const TermCard = ({ terms, push, remove, setFieldValue }) => {
  const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png'];

  const imgError = (val) => {
    toast.warn(val, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  // Ref for title input field
  const titleInputRefs = useRef([]);

  // Function to focus on title input field
  const focusOnTitleInput = (index) => {
    titleInputRefs.current[index].focus();
  };

  const handleDeleteTerm = (index) => {
    if (terms.length === 1) return; // Prevent deleting when there's only one term
    remove(index);
  };

  return (
    <div>
      {terms.map((term, index) => (
        <div className='flex mb-7 p-5 ' key={index}>
          <div className='flex'>
            <div className='mt-12'>
              <span className='py-2 px-4 bg-red-500 text-slate-50 rounded-full mr-4'>{index + 1}</span>
            </div>

            {/* Term Title */}
            <div className='flex flex-col'>
              <div>
                <h3 className='mb-2 text-md font-bold text-gray-500'>Enter Term*</h3>
              </div>
              <div>
                <Field
                  type='text'
                  name={`terms[${index}].title`}
                  placeholder='Enter Term Title'
                  className='border-2 mb-4 w-72 h-10 pl-2 mt-2  bg-slate-200 rounded-md font-semibold'
                  innerRef={(el) => (titleInputRefs.current[index] = el)} // Assign ref to title input field
                />
              </div>
              <ErrorMessage name={`terms[${index}].title`} component='div' className='text-red-500' />
            </div>

            {/* Term Definition */}
            <div className='flex flex-col ml-6'>
              <div>
                <h3 className='mb-2 text-md font-bold text-gray-500'>Term Definition*</h3>
              </div>
              <div>
                <Field
                  type='text'
                  name={`terms[${index}].definition`}
                  placeholder='Enter Term Definition'
                  className='border-2 mb-2 w-72 h-10 pl-2 mt-2 bg-slate-200 rounded-md font-semibold'
                />
              </div>
              <ErrorMessage name={`terms[${index}].definition`} component='div' className='text-red-500' />
            </div>
        

          {/* Image Upload and Edit/Delete Icons */}
          <div className='flex'>
            <div className='flex'>
              {/* Image upload button */}
              {term.term_uploadimage ? (
                <div className='flex '>
                  <img className='h-16 mt-4  pl-5 w-28' src={term.term_uploadimage} alt='' />
                  <TiDeleteOutline className='text-3xl  text-red-600' onClick={() => setFieldValue(`terms.${index}.term_uploadimage`, '')} />
                </div>
              ) : (
                <label htmlFor={`terms.${index}.term_uploadimage`} className='w-40 h-[38px] cursor-pointer px-3 mx-3 mt-10 py-1 bg-gray-200 border-gray-200 flex items-center justify-center rounded'>
                  <MdOutlineDriveFolderUpload className='text-[2em] text-blue-700 p-1' />
                  <span className='text-blue-700 font-bold'>Select Image</span>
                </label>
              )}

              {/* Error message and image upload input */}
              <ErrorMessage className='text-red-600' component='span' name={`terms.${index}.term_uploadimage`} />
              <input
                onChange={(event) => {
                  //  Validation on image
                  if (event.target.files[0] && !SUPPORTED_FORMATS.includes(event.target.files[0].type)) {
                    imgError('Unsupported file format');
                  } else if (event.target.files[0].size > 1024 * 1024 * 10) {
                    imgError('Image size is too large');
                  } else if (event.target.files[0].size <= 1024 * 1024 * 10) {
                    const file = event.target.files[0];
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                      setFieldValue(`terms.${index}.term_uploadimage`, reader.result);
                    };
                  }
                }}
                className='hidden'
                id={`terms.${index}.term_uploadimage`}
                name={`terms.${index}.term_uploadimage`}
                type='file'
              />
            </div>

            {/* Edit/Delete Icons */}
            <div className='flex flex-col mt-5'>
              {/* Delete icon */}
              {terms.length > 1 && (
                <button type='button' className='ml-10 text-3xl ' onClick={() => handleDeleteTerm(index)}>
                  <BiSolidTrashAlt />
                </button>
              )}

              {/* Edit icon with onClick event to focus on title input */}
              <div className='ml-10 text-3xl mt-2 text-blue-500' onClick={() => focusOnTitleInput(index)}>
                <TbEdit />
              </div>
            </div>
          </div>
          </div>
        </div>
      ))}
      <div className='flex  mx-4'>
      <div className='  pt-2 text-2xl mr-2 text-blue-500'>
      <IoMdAdd />
      </div>
      <div>
      <button className='pr-4 py-2 text-blue-500 font-medium' type='button' onClick={() => push({ title: '', definition: '', term_uploadimage: null })}>
      Add More  
      </button>
      </div>
    
      </div>
    </div>
  );
};

export default TermCard;
