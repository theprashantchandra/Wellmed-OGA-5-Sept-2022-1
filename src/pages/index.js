import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import './App.css';
import Card from '../components/Card/Card.js'
import React, { useState } from 'react'
import { Box, Grid} from "@material-ui/core";
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Box from '@mui/material/Box';


// import { Grid, Card, Typography} from '@mui/material';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// // import FrontPageNavbar from './FrontPageNavbar.js'

// import { CssBaseline } from "@mui/material";
// import { makeStyles } from '@material-ui/core/styles';

// import * as React from 'react';
// import { CardActionArea} from '@mui/material';
// import Cards from '../components/Cards.js'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}





// const useStyles = makeStyles((theme) => ({
//   root: {
//     minHeight: '100vh',
//     backgroundImage: `url(https://images2.alphacoders.com/103/1036023.jpg)`,
//     // backgroundImage: `url()`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//   },
//   root1: {
//     minHeight: '40vh',
//     backgroundImage: `url(https://images2.alphacoders.com/103/1036023.jpg)`,
//     // backgroundImage: `url()`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     background: 'none',
//     fontFamily: 'Nunito',
//     fontSize: '1.40rem',
//   },
//   font: {
//     background: 'none',
//     fontFamily: 'Nunito',
//     fontSize: '1.40rem',
//   },
//   links: {
    
//     fontFamily: 'Nunito',
//     fontSize: '1rem',
//     textCo: '#1B9107'
//   }
// }));


  


const FeatureList = [
  {
    title: '164',
    description: (
      <div className={styles.colorCodeBlack}>
       <p >Wellmed OGA India Members</p>
       {/* <a>Wellmed</a><br /> */}
      </div>
    ),
  },
  {
    
    title: '13',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      <p>India Agile Teams</p>
        {/* <ul>
        <a>Wellmed</a><br />
        </ul> */}
      </>
    ),
  },
  {
    title: '9',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        {/* <a  className={[styles.colorCodeBlack, styles.bold]}>Wellmed</a><br /> */}
        <p>Engineering Account Teams</p>

      </>
    ),
  },
  {
    title: '65%',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        {/* <a  className={[styles.colorCodeBlack, styles.bold]}>Wellmed</a><br /> */}
       <p>Software Engineers</p>
      </>
    ),
  },
  {
    title: '45+',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      
        {/* <a  className={[styles.colorCodeBlack, styles.bold]}>Wellmed</a><br /> */}
        <p>Azure Certified Members</p>

      </>
    ),
  }
];






function Feature({Svg, title, description}) {
  return (
    <div  className={clsx('col')}>

      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}

      <div className="text--center" >
        <h3 style={{textAlign: 'center', fontSize: '2.5rem'}}>{title}</h3>
        <p style={{textAlign: 'center', fontSize: '1.25rem'}}>{description}</p>
      </div>
    </div>
  );
}




export default function Home() {

 
  const [name, setName] = useState("Shri Narendra Modi")
  const [job, setJob] = useState("Job Title")
  const [about, setAbout] = useState("Tell About Yourself")
  const img1 = "https://images.axios.com/YFl4sf9FyNLBGDs4dSr7FnhzksE=/0x0:5070x2852/1920x1080/2019/02/22/1550863037060.jpg"

  const {siteConfig} = useDocusaurusContext();
  return (
    <>


    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
<br />
<br />


   





  



   








      




      <div  className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>

      


     


      <main>
        <HomepageFeatures />
        {/* <Trial/> */}

        
          {/* <Route path='/trial' element={<Trial/>} /> */}
       
      </main>

      <br />
      <br />
      
      <br />
      <hr />
      
  <div className="container" >

  {/* <Grid container justifyContent='center'>
      <Grid item sm={11}>

<Grid container sx={{mx:50}} spacing={10} my={50}>


<Grid item xs={4} md={4} lg={4}>  
               
        <Card name={name} job={job} about={about} image={img1}/>
        

</Grid>
<Grid item xs={4} md={4} lg={4}>  
                 
        <Card name={name} job={job} about={about} image={img1}/>
        

</Grid>
<Grid item xs={4} md={4} lg={4}>  
                 
        <Card name={name} job={job} about={about} image={img1}/>
        

</Grid>

</Grid></Grid></Grid> */}

<br />
<br />
<div className="text--center" >
  <h1 className={styles.blueColorFont}>Organization Chart</h1>
</div>

 <div style={{marginLeft: '522px', marginTop: '50px'}} sx={{mx:20}} className="row">
      <div style={{marginLeft: '20px'}}>
        <Card name={"Ritesh Dugar"} job={"Senior Director Quality Engineer"}  image={img1}/>
      </div>
  </div>
  <div style={{marginLeft: '400px', marginTop: '25px'}}  className="row">
      <div style={{marginLeft: '20px'}}>
        <Card name={"Ritesh Dugar"} job={"Senior Director Quality Engineer"}  image={img1}/>
      </div>
      <div style={{marginLeft: '40px'}}>
        <Card name={"Ritesh Dugar"} job={"Senior Director Quality Engineer"}  image={img1}/>
      </div>
  </div>

  <div style={{marginLeft: '230px', marginTop: '25px'}} sx={{mx:20, my:50}} className="row">
      <div style={{marginLeft: '60px'}}>
        <Card name={"Ritesh Dugar"} job={"Senior Director Quality Engineer"}  image={img1}/>
      </div>
      <div style={{marginLeft: '40px'}}>
        <Card name={"Ritesh Dugar"} job={"Senior Director Quality Engineer"}  image={img1}/>
      </div>
      <div style={{marginLeft: '40px'}}>
        <Card name={"Ritesh Dugar"} job={"Senior Director Quality Engineer"}  image={img1}/>
      </div>
  </div>
</div>

      <br />
      <br />
      <br />
    </Layout>
    </>
  );
}


// add to html files

{/* <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap" rel="stylesheet"> */}
