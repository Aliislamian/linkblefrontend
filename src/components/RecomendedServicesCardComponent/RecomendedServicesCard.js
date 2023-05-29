import React from 'react';
import '../RecomendedServicesCardComponent/RecomendedServicesCard.css';
import CardServices from '../ServicesCard/Card';
import RightIcon from '../../images/righticom.png';
import one from '../../images/one.png';
import two from '../../images/two.png';
import three from '../../images/three.png';
import four from '../../images/four.png';
import five from '../../images/five.png';

const RecomendedServicesCard = ({title}) => {


    const Services = [
        {
          subject: 'Develops Mobile Apps for Android and IOS',
          image: one
        },
        {
          subject: 'Mobile Application  UI/UX XD or Figma Design',
          image: two
        }, 
        {
          subject: 'Machine Learning Projects in Python',
          image: three
        }, 
        {
          subject: 'Design & develop Modern Website',
          image: four
        },
        {
          subject: 'Native iOS Development',
          image: five
        }, 
    ]

    const RightSlide = () => {

    }


  return (
    <div className='recomendedServicesCard_main'>
        <div className='recomendedServicesCard_sub_main'>
            {title}
        </div>
        <div className='services_card'> 
        {
            Services.map((item) => {
            return  <CardServices data= {item} />
          })
        }
        </div>
        <div className='just_right_icon' onClick={RightSlide}>
          <img src={RightIcon} alt="Right Icon" className='just_Right_icon_inside' />
        </div>
    </div>
  )
}

export default RecomendedServicesCard