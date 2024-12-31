import React, { useState } from 'react';
import './app.css'; 

const CommentForm = () => {
    const [commentData, setCommentData] = useState({
        comment: "",
        username: "",
    });

    const [arr, setArr] = useState([]); 

    const handleForm = (e) => {
        e.preventDefault();

       
        if (commentData.comment && commentData.username) {
           
            setArr([...arr, { text: commentData.comment, name: commentData.username, likes : 0, dislikes : 0 }]);
            
            
            setCommentData({ comment: "", username: "" });
        }
    };

    const incrementlike = (index) => {
      
        const newArr = [...arr];
        newArr[index].likes++; 
        setArr(newArr); 
    };

    const dicrementlike = (index) => {
      
        const newArr = [...arr];
        newArr[index].dislikes--; 
        setArr(newArr); 
    };

    return (
        <>
            <form onSubmit={handleForm} className='main-box'>
                <label>
                    <h4 className='Review'>Comment Review</h4>
                </label>
                <label className='form-label'>Your Name</label>
                <input 
                    className='name'
                    type="text" 
                    placeholder="Enter Your Name" 
                    value={commentData.username} 
                    onChange={(e) => setCommentData({ ...commentData, username: e.target.value })} 
                /> 
                <br /><br />
                <label className='form-label'>Your Comment</label>
                <textarea
                    className="text"
                    placeholder="Enter Your Comment Here"
                    value={commentData.comment}
                    onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })} 
                ></textarea>
                <br />
                <button type="submit" className="btn">Submit</button>
            </form>

            {/* Render the comments list */}
            {arr.length > 0 && (
                <div>
                    {arr.map((ele, index) => (
                        <div key={index}>
                            <h4>{ele.name}</h4>
                            <p>{ele.text} <br /> 
                                <i 
                                    className="fa-regular fa-thumbs-up" 
                                    onClick={() => incrementlike(index)} 
                                ></i> 
                                {ele.likes}
                                <i class="fa-regular fa-thumbs-down"  onClick={() => dicrementlike(index)}></i> 
                                {ele.dislikes}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default CommentForm;
