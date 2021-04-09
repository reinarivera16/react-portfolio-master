import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <h3>Experience and Background</h3>
			<p>Reina is a Whole Home Expert for a Tech Company in Houston, with experience in account management, enhancing customer experience,
									strategic thinking and relationship building. Her backbround in customer focus and account management inform her mindful but competitive approach.</p>

			<p>She is fueled by her passion for understanding the nuances of cross-cultural customer competency. She considers herself a "forever student,"
									eager to both build on her academic foundations in business management to stay in tune with the latest through 
									continued coursework and professional development. Reina is currently attending University of Texas Coding bootcamp and is currently 
									working as a whole home IT expert and is always interested in a challenge. Reach out to reinarivera@outlook.com to connect!</p>

								<hr />
            </Content>
        </div>
    );

}

export default AboutPage;