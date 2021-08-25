import React from "react";
import * as containerStyles from './../style/card.module.css'
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function List({ links, loadLinks }) {
    const MAX_LENGTH = 26;

    return (
        <>

            <div className='card'>

                <div className={containerStyles.listheaderbg}>
                    <div className="card-header text-center">BOOKMARK LIST</div>
                </div>

                <div className={containerStyles.bglist}>

                    <Row xs={1} md={3} className="g-3 mt-1" style={{ marginLeft: 20, marginRight: 20 }}>
                        {links && links.map((elem, ind) => {

                            return <div key={ind}>

                                <Col >
                                    <Card bg='light mb-4' >
                                        <div className="card-header text-center" style={{ textTransform: 'uppercase', cursor: "pointer" }}>{elem.title}</div>

                                        <div className='mt-4 mb-4' style={{ marginLeft: 20, marginRight: 20 , minHeight:'50px' }}>
                                            <div>

                                                {elem.url.length > MAX_LENGTH ?
                                                    (
                                                        <div>
                                                            {`${elem.url.substring(0, MAX_LENGTH)}...`}<a href={elem.url}>Read more</a>
                                                        </div>
                                                    ) :
                                                    <p><a href={elem.url}>{elem.url}</a></p>
                                                }
                                            </div>
                                        </div>



                                        <div className="align-self-center mb-2">

                                            <FontAwesomeIcon color='#FF0000' icon={faTrash} size='2x'
                                                style={{ cursor: "pointer" }}
                                                onClick={async () => {
                                                    const id = elem._id;
                                                    try {
                                                        await fetch('/.netlify/functions/deleteLink', {
                                                            method: 'DELETE',
                                                            body: JSON.stringify({ id }),
                                                        });
                                                        toast.info("Deleted Succesfully", {
                                                            autoClose: 4000,
                                                        });
                                                        loadLinks();
                                                        // console.log(id)
                                                    } catch (error) {
                                                        console.error('LIST ERROR', error);
                                                    }
                                                }} />
                                            <ToastContainer />
                                        </div>
                                    </Card>
                                </Col>

                            </div>
                        })
                        }

                    </Row>
                </div>
                <div className='d-flex align-self-center mt-2'>

                    <a href='https://www.linkedin.com/in/aqib-rafiq-2a3b65213/'> <FontAwesomeIcon icon={faLinkedin} size='2x' pull="left" /></a>
                    <a href='https://github.com/MuhammadAqibRafiq'>  <FontAwesomeIcon icon={faGithub} color='black' size='2x' pull="right" /></a>
                </div>

                <div className='align-self-center mt-1'><h6><a href="http://aqib-rafiq.surge.sh/" style={{ textDecoration: 'none', color: '#708090' }}>© copyright reserved 2021</a> </h6></div>


            </div>
        </>
    );

}

export default List;

