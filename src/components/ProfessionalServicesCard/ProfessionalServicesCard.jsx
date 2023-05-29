import React from 'react'
import '../ProfessionalServicesCard/ProfessionalServicesCard.css';
import ProfessionalCard from './ProfessionalCard';
import MachineLearning from '../../images/MachineLearning.png';
import ProgrammingServices from '../../images/ProgrammingServices.png';
import Artificial from '../../images/Artificial.png';
import BlockChain from '../../images/BlockChain.png';
import Database from '../../images/Database.png';
import LeftIcon from '../../images/lefticon.png'
import RightIcon from '../../images/righticom.png'



const ProfessionalServicesCard = () => {

  const services = [
    {
      subject: 'Machine Learning',
      image: MachineLearning
    },
    {
      subject: 'Programming Services',
      image: ProgrammingServices
    },
    {
      subject: 'Artificial Intelligence',
      image: Artificial
    },
    {
      subject: 'Block Chain',
      image: BlockChain
    },
    {
      subject: 'Database',
      image: Database
    },
    // {
    //   subject: 'Machine Learning',
    //   image: MachineLearning
    // },
  ]

  const RightSlide = () => {

  }

  const LeftSlide = () => {

  }


  return (
    <div className='main_professional_card'>
       <div className='left__icon' onClick={LeftSlide}>
        <img src={LeftIcon} alt="Left Icon" className='icon_inside'  />
      </div>
        <div className='top_rated_services_main'>
            <text className='top_rated_services_text'>
            Top rated Professional Services on Linkeble
            </text>
            <div className='view_all_text_'>
                View All
            </div>
        </div>
        <div className='professional_card'>
          {
            services.map((item) => {
              return  <ProfessionalCard data = {item} /> 
            })
          }
        </div>
        <div className='right__icon' onClick={RightSlide}>
          <img src={RightIcon} alt="Right Icon" className='icon_inside' />
      </div>
    </div>
  )
}

export default ProfessionalServicesCard