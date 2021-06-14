
import React from 'react';
import Card from './Card';
import aot from "../src/img/aot.jpg";
import broly from "../src/img/brol2.jpg";
import naruto from "../src/img/naruto.jpg";
import myhero from "../src/img/myhero.jpg";
import borutomovie from "../src/img/borutomovie.jpg";
import fullmetal from "../src/img/fullmetal.jpg";
import onepunch from "../src/img/onepunch.jpg";
import super1 from "../src/img/super.jpg";
import Boruto from '../src/img/boruto.jpg';


const Anime=()=>
{
    return(
         <>
          <div className="my-5">
              <h1 className="text-center">Anime List</h1>

          </div>
          <div className="container-fluid mb-5">
              <div className="row">
                  <div className="col-10 mx-auto">
                        <div className="row gy-5">
                            <Card imgsrc={aot} cardtitle="Attack On Titan" cardtext="IMDB : 9.5/10" cardlink="https://watchaot.online/episodes/"></Card>
                            <Card imgsrc={broly} cardtitle="DBS Broly" cardtext="IMDB : 8.5/10" cardlink="https://watchaot.online/episodes/"></Card>
                            <Card imgsrc={naruto} cardtitle="Naruto Shipuuden" cardtext="IMDB : 9.0/10" cardlink="https://watchaot.online/episodes/"></Card>
                            <Card imgsrc={myhero} cardtitle="My Hero Academia" cardtext="IMDB : 8.0/10" cardlink="https://watchaot.online/episodes/"></Card>
                            <Card imgsrc={borutomovie} cardtitle="Boruto" cardtext="IMDB : 8.2/10" cardlink="https://watchaot.online/episodes/"></Card>
                            <Card imgsrc={fullmetal} cardtitle="Full Metal Alchemist" cardtext="IMDB : 9.0/10" cardlink="https://watchaot.online/episodes/"></Card>
                            <Card imgsrc={onepunch} cardtitle="One Punch Man" cardtext="IMDB : 8.0/10" cardlink="https://watchaot.online/episodes/"></Card>
                            <Card imgsrc={super1} cardtitle="Dragon Ball Super" cardtext="IMDB : 9.5/10" cardlink="https://watchaot.online/episodes/"></Card>
                            <Card imgsrc={Boruto} cardtitle="Boruto : Naruto Next Generations" cardtext="IMDB : 9.5/10" cardlink="https://watchaot.online/episodes/"></Card>
                        </div>
                  </div>
              </div>
          </div>
         </>

    );
}


export default Anime;