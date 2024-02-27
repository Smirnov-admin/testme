import { useState } from 'react';
import './ViewLargePost.css'
import { Post } from '../../../../interface/interfacePosts';

function ViewLargePost({date, title, text, image}: Post) {

  const [countBiLike, setCountBiLike] = useState(0)
    const [countDisLike, setCountDisLike] = useState(0)

    const countClickBiLike = () => {
        setCountBiLike(countBiLike + 1);
    }

    const countClickDisLike = () => {
        setCountDisLike(countDisLike + 1);
    }

  return (
    <>
        <div className="largePost_card">
            <div className="largePost_content">
                <div className="largePost_information">
                    <div className="largePost_description">
                        <p className='largePost_date'>{date}</p>
                        <h2 className='largePost_title'>{title}</h2>
                        <p className='largePost_text'>{text}</p>
                    </div>
                    <div className="largePost_image">
                        <img src={image} alt="image" />
                    </div>
                </div>
                <div className="largePost_reaction_list">
                    <div className="largePost_reaction_elements_biLikeAndDisLike">
                        <div className="largePost_reaction_biLike">
                            <button onClick={countClickBiLike} className='largePost_btnBiLike'>
                                <svg width="21" height="21" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.292 19.65C18.218 20.136 17.794 20.5 17.292 20.5H17.28H7V10.712L10.608 2.594C11.415 2.852 12 3.608 12 4.5V8.5C12 9.052 12.447 9.5 13 9.5H18.674C18.728 9.502 18.78 9.503 18.832 9.511C19.097 9.551 19.33 9.692 19.488 9.907C19.646 10.122 19.712 10.385 19.672 10.648L18.292 19.65ZM5 20.5H3C2.449 20.5 2 20.051 2 19.5V12.5C2 11.948 2.449 11.5 3 11.5H5V20.5ZM21.099 8.72C20.623 8.075 19.925 7.654 19.132 7.533C18.972 7.509 18.814 7.504 18.66 7.5H14V4.5C14 2.294 12.206 0.5 10 0.5C9.605 0.5 9.247 0.733 9.086 1.093L5.35 9.5H3C1.346 9.5 0 10.845 0 12.5V19.5C0 21.154 1.346 22.5 3 22.5H17.269H17.304C18.776 22.5 20.048 21.409 20.269 19.951L21.648 10.95C21.77 10.157 21.574 9.366 21.099 8.72Z" fill="#313037" />
                                </svg>
                            </button>
                            <p className='count_like_item'>{countBiLike}</p>
                        </div>
                        <div className="largePost_reaction_disLike">
                            <button onClick={countClickDisLike} className='largePost_btnDisLike'>
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="#000" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3664 10.4239C20.2534 11.0519 19.6964 11.5129 19.0364 11.5009H17.3664V2.50088H19.0544C19.6964 2.45188 20.2524 2.94788 20.3664 3.57688V10.4239ZM15.3664 12.2879L11.7584 20.4059C10.9514 20.1479 10.3664 19.3909 10.3664 18.5009V14.5009C10.3664 13.9479 9.91841 13.5009 9.36641 13.5009H3.69741C3.65141 13.4979 3.59041 13.4989 3.53341 13.4899C2.98841 13.4069 2.61241 12.8959 2.69441 12.3519L4.07541 3.35088C4.14941 2.86088 4.60141 2.52188 5.08641 2.50088H15.3664V12.2879ZM22.3574 3.36588C22.1354 1.72288 20.7304 0.499878 19.0944 0.499878C19.0754 0.499878 19.0554 0.499878 19.0364 0.500878H5.09741C3.61041 0.510878 2.32041 1.58088 2.09841 3.04888L0.717409 12.0509C0.470409 13.6859 1.59841 15.2179 3.23041 15.4659C3.39041 15.4909 3.55341 15.5029 3.70641 15.5009H8.36641V18.5009C8.36641 20.7069 10.1604 22.5009 12.3664 22.5009C12.7624 22.5009 13.1194 22.2679 13.2804 21.9069L17.0154 13.5009H19.0184C20.6884 13.5059 22.1324 12.2979 22.3574 10.6349C22.3634 10.5909 22.3664 10.5459 22.3664 10.5009V3.50088C22.3664 3.45588 22.3634 3.41088 22.3574 3.36588Z" fill="#313037" />
                                </svg>
                            </button>
                            <p className='count_like_item'>{countDisLike}</p>
                        </div>
                    </div>
                    <div className="largePost_reaction_elements_bookmarkAndOther">
                        <div className="largePost_reaction_bookmark">
                            <button className='largePost_btnBookmark'>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 13C8.204 13 8.407 13.062 8.581 13.187L14 17.057V3C14 2.449 13.552 2 13 2H3C2.449 2 2 2.449 2 3V17.057L7.419 13.187C7.593 13.062 7.796 13 8 13ZM15 20C14.795 20 14.592 19.937 14.419 19.813L8 15.229L1.581 19.813C1.277 20.032 0.875 20.062 0.542 19.89C0.209 19.718 0 19.375 0 19V3C0 1.346 1.346 0 3 0H13C14.654 0 16 1.346 16 3V19C16 19.375 15.791 19.718 15.458 19.89C15.313 19.963 15.156 20 15 20Z" fill="#313037" />
                                </svg>
                            </button>
                        </div>
                        <div className="largePost_reaction_other">
                            <button className='largePost_btnOther'>
                                <svg width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                </svg>
                            </button>
                            <p className='count_like_item'></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ViewLargePost