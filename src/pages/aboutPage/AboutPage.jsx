import Description from "../../components/description/Description";

 function AboutPage() {

    const aboutPageData = {
         title: 'Title 2',
         description: 'description 2',
     };

     return (
         <div>
             <Description data={aboutPageData} />
         </div>
     );
 }

 export default AboutPage