import React from 'react';
import web from '../src/img/gogeta2.png';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home=()=>
{
    return(
        // <section id="header" className="d-flex align-items-center">
        //     <div className="container-fluid nav_bg">
        //         <div className="row">
        //             <div className="col-10 mx-auto">
        //                <div className="row pt-4">
        //                 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
        //                     <h1><strong>Watch Anime</strong></h1>
        //                     <h2 className="my-3">
        //                         Collection of all the anime
        //                     </h2>
        //                     <div className="mt-3">
        //                         <NavLink to="/anime" className="btn btn-info get-started">Start Watching</NavLink>
        //                     </div>
        //                 </div>

        //                 <div className="col-lg-6 order-1 order-lg-2 header-img">
        //                     <img src={web} className="img-fluid" alt="home img"></img>
        //                 </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <Common name1="Watch Anime" name2=" Collection of all the anime" link="/anime" text="Start Watching" imgsrc={web}></Common>

        
    );
}


export default Home;