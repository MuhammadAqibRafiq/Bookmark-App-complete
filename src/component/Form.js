import React, { useState } from 'react';
import * as containerStyles from './../style/card.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FORM({ loadLinks }) {

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const resetForm = () => {
        setTitle('');
        setUrl('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { title, url };
        if (!title) {
            toast.error("Title is empty.", { autoClose: 4000, });
        }
        else if (!url) {
            toast.error("URL is empty.", { autoClose: 4000, });
        }
        else {
            try {
                const res = await fetch('/.netlify/functions/createLink', {
                    method: 'POST',
                    body: JSON.stringify(body),
                });
                toast.success("Bookmark Succesfully added.", { position: "top-center", autoClose: 4000, });
                resetForm();
                loadLinks();
            } catch (error) { console.error(error); }
        }
    };

    return (


        <div className="card mb-3">

            <div className={containerStyles.formheaderbg}>

                <div className="card-header text-center">BOOKMARK</div>
            </div>

            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input className="form-control" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <br />
                    <div className="form-group">
                        <input className="form-control" placeholder='https://' value={url} onChange={(e) => setUrl(e.target.value)} />
                    </div>
                    <br />

                    <button className="btn btn-primary" onClick={handleSubmit}>ADD</button>


                </form> <ToastContainer />
            </div>
            <br />
        </div>

        // </div>



    )
}

export default FORM;

