import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import EggRoundedIcon from '@mui/icons-material/EggRounded';
import { IconButton } from '@mui/material';

const FeatureList = [
  {
    title: 'Risk Platform',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      {/*   ✔*/}
        <h4  className="text--center" style={{textAlign: 'left'}}>Wellmed</h4>
        <a  className={styles.colorCodeYellow} href='/pages/Org-Wellmed/Wellmed-OGA'>o EPRS Provider Portal</a><br />
        <a  className={styles.colorCodeYellow} href='/pages/Org-Wellmed/Wellmed-OGA'>o Zephyr Point of Care Portal</a><br />
        <a  className={styles.colorCodeGrey} href='/pages/Org-Wellmed/Wellmed-OGA'>o DataRAP</a><br />
        <a  className={styles.colorCodeOrange} href='/pages/Org-Wellmed/Wellmed-OGA'>o TCoE</a><br />
        
      </>
    ),
  },
  {
    
    title: (<p>Clinical Care Enablement</p>),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <h4  className="text--center" style={{textAlign: 'left'}}>Wellmed</h4>
        
        <a  className={styles.colorCodeOrange} href='/pages/Org-Wellmed/Wellmed-OGA'>o Care Delivery Support System</a><br />
        <a  className={styles.colorCodeOrange} href='/pages/Org-Wellmed/Wellmed-OGA'>o WellMed Directory</a><br />
        <a  className={styles.colorCodeOrange} href='/pages/Org-Wellmed/Wellmed-OGA'>o Enterprise Clinic Bonus Tool</a><br />
        <a  className={styles.colorCodeOrange} href='/pages/Org-Wellmed/Wellmed-OGA'>o Sensitive Code Suppression Depository</a><br />
        <a  className={styles.colorCodeOrange} href='/pages/Org-Wellmed/Wellmed-OGA'>o One Source / Cares ACI</a><br />
        <a  className={styles.colorCodeOrange} href='/pages/Org-Wellmed/Wellmed-OGA'>o PTG Cost and Care App</a><br />
        <a  className={styles.colorCodeOrange} href='/pages/Org-Wellmed/Wellmed-OGA'>o Jotform</a><br />
        <a  className={styles.colorCodeGrey} href='/pages/Org-Wellmed/Wellmed-OGA'>o TripSpark (Vendor)</a><br />
        <a  className={styles.colorCodeGrey} href='/pages/Org-Wellmed/Wellmed-OGA'>o eClinical Works (Vendor)</a><br />
        <a  className={styles.colorCodeGreen} href='/pages/Org-Wellmed/Wellmed-OGA'>o Payer Grid Expansion</a><br />
        <a  className={styles.colorCodeGreen} href='/pages/Org-Wellmed/Wellmed-OGA'>o Bexar Imaging (Vendor)</a><br />
        <a  className={styles.colorCodeGreen} href='/pages/Org-Wellmed/Wellmed-OGA'>o Home Care Dimension (Vendor)</a><br />
        
      </>
    ),
  },
  {
    title: 'Delegated Platform',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <h4  className="text--center" style={{textAlign: 'left'}}>Wellmed</h4>
         <a  className={styles.colorCodeGrey} href='/pages/Org-Wellmed/Wellmed-OGA'>o IKA Claims (Biztalk, Edifecs, Database)</a><br />
         <a  className={styles.colorCodeGrey} href='/pages/Org-Wellmed/Wellmed-OGA'>o Case Management - Salesforce</a><br />
         <a  className={styles.colorCodeGreen} href='/pages/Org-Wellmed/Wellmed-OGA'>o Utilization Management Trucare - Tech Audit</a><br />

      </>
    ),
  },
  {
    title: 'Infrastructure Operations',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <h4  className="text--center" style={{textAlign: 'left'}}>Wellmed</h4>
        <a  className={styles.colorCodeGrey} href='/pages/Org-Wellmed/Wellmed-OGA'>o Infra Ops (Database, Server & Storage)</a><br />
       
      </>
    ),
  },
  {
    title: (<p>Admin/Arch./Info.<br/>/sec./Audit/ITSM</p>),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      
        <h4  className="text--center" style={{textAlign: 'left'}}>Wellmed</h4>
        <a  className={styles.colorCodeYellow} href='/pages/Org-Wellmed/Wellmed-OGA'>o Service-Now</a><br />
        <a  className={styles.colorCodeGrey} href='/pages/Org-Wellmed/Wellmed-OGA'>o Access Management Ops</a><br />
        <a  className={styles.colorCodeGrey} href='/pages/Org-Wellmed/Wellmed-OGA'>o Audit, Risk Management</a><br />
        <a  className={styles.colorCodeGrey} href='/pages/Org-Wellmed/Wellmed-OGA'>o Information Security </a><br />
        <a  className={styles.colorCodeGreen} href='/pages/Org-Wellmed/Wellmed-OGA'>o Finance Ops</a><br />
        <a  className={styles.colorCodeGreen} href='/pages/Org-Wellmed/Wellmed-OGA'>o Cloud CCoE</a><br /><br />
        
        <h4 className="text--center" style={{textAlign: 'left'}}>USMD</h4>
        <a  className={styles.colorCodeGrey} href='/pages/Org-Wellmed/Wellmed-OGA'>o Infra Ops, Desktop</a><br />
        <a  className={styles.colorCodeGrey} href='/pages/Org-Wellmed/Wellmed-OGA'>o SQL, Reporting Migration</a><br />

      </>
    ),
  },
  {
    title: 'Data Services',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <h4  className="text--center" style={{textAlign: 'left'}}>Wellmed</h4>

        <a  className={styles.colorCodeYellow} href='/pages/Org-Wellmed/Wellmed-OGA'>o Integration Services Development; EDW Monitoring</a><br />
        <a  className={styles.colorCodeGreen} href='/pages/Org-Wellmed/Wellmed-OGA'>o Cloud Operations</a><br />
       
      </>
    ),
  }
];







function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col')}>

      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}

      <div className="text--center" >
        <h3 style={{textAlign: 'left'}}>{title}</h3>
        <p style={{textAlign: 'left'}}>{description}</p>
      </div>
    </div>
  );
}




// function Feature() {
//   return (
//     <div  className="container">
//     <div className="row">
//       {FeatureList.map((props, idx) => (
//         <Feature key={idx} {...props} />
//       ))}
//     </div>
//   </div>
//   );
// }



export default function HomepageFeatures() {
  return (
    <>

<section>
    <div className={styles.gettingStartedSection}>
      
    <div className="container padding-vert--x1 text--left">
    {/* <br/><br/><img  src={'img/top-layer-data.png'}/> */}
    <br/><br/><br/><br/>

        <div className="row">
            <div className="col col--5 col--offset-1">
              
              <ul>
              <h2 className={styles.blueColorFont}>Get started...</h2>
              <li>
              WellMed OGA started as a direct <strong>engagement in 2015</strong>, with provider portal and data services teams. Since then, the team expanded into all LoBs for WellMed - Clinical, Risk Platforms, Business corporate systems, Delegated Platforms, Architecture, Admin, Infra and services

                {/* Whether you’re using React or another library, Create React App
                lets you <strong>focus on code, not build tools</strong>. */}
                
              </li><br/>
              <li>
              India te<strong>accountability</strong> along with leading development on custom <strong>core / strategic applications</strong> as well as managing vendor IT assets and their integrationsams have stood up multiple modern technology based <strong>greenfield applications</strong> with <strong>full engineering</strong>


                {/* Whether you’re using React or another library, Create React App
                lets you <strong>focus on code, not build tools</strong>. */}
                
              </li>
              <br/>
              <li>
              <strong>Cloud re-engineering</strong> and modernization of current application areas
                {/* Whether you’re using React or another library, Create React App
                lets you <strong>focus on code, not build tools</strong>. */}
              </li><br/>
              
              </ul>
            </div>
            <div className="col col--4 col--offset-1">
              <img
                className={styles.featureMapImage}
                alt="Easy to get started in seconds"
                // src={
                //   'https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667'
                // }
                src={'img/map.png'}
              />
            </div>
          </div>
        {/* <div className="container padding-vert--x5 text--left">

              
          <div className="row">
              <div className="col col--6 col--offset-1">
          <h2>Key Roles</h2>
                
                <ul>
                <li>Engineering Managers</li> 
                <li>Engineering Managers</li> 
                <li>Engineering Managers</li> 
                <li>Engineering Managers</li> 
                <li>Engineering Managers</li> 
                <li>Engineering Managers</li> 
                <li>Engineering Managers</li> 
                </ul>
              </div>
              </div>
              </div> */}
        </div>
      </div>
      
    </section>



    <br/><br/>

    <section>
    <div className={styles.gettingStartedSection}>
      
    <div className="container padding-vert--x1 text--left">

        <div className="row">
            <div className="col col--3 col--offset-1">
              
              <ul>
                <h2 className={styles.blueColorFont}>Key Roles</h2>
                {/* <li><strong>Engineering Managers</strong></li>  */}
                <li>Engineering Managers</li> 

                <li>Architects – Cloud Solution, Database, Infra</li> 
                <li>Agile Coaches</li> 
                <li>Engineers – Full Stack, UX, Database, Infra, SRE, ETL, Reporting, Salesforce, Edifecs, Service-Now</li> 
              </ul>
            </div>
            <div className="col col--3 col--offset-1">
            <br/>
            <br/>
              <ul>
                <li>Clinical Implementation consultants, Product Owners</li> 
                <li>Quality – Application, Performance, UAT, DevOps</li> 
                <li>Operations, ITSM</li> 
              </ul>
            </div>
          </div>
        
        </div>
      </div>
      
    </section>

    <br/><br/><br/>



    <hr></hr><br/><br/>
    {/* sx={{color:'#0bb30b'}} */}



    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
        


        
      
    </section>

    <div className="container">
      <div className="row">
      <EggRoundedIcon className={styles.colorCodeOrange} fontSize='medium'/>
      <p  className={styles.colorCodeOrange}>Engineering Accountability</p>
      <EggRoundedIcon className={styles.colorCodeYellow} fontSize='medium'/>
      <p  className={styles.colorCodeYellow}>Shared Engineering Accountability</p>
      <EggRoundedIcon className={styles.colorCodeGreen} fontSize='medium'/>
      <p  className={styles.colorCodeGreen}>Upcoming Teams Hiring</p>
      <EggRoundedIcon className={styles.colorCodeGrey} fontSize='medium'/>
      <p  className={styles.colorCodeGrey}>Ops Support/ Staff Augmentation</p>
    </div>
    </div>
    </>
  );

  
}
