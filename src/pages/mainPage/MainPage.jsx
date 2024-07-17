import Description  from "../../components/description/Description";


function MainPage() {
    const mainPageData = {
        title: 'Title',
        description: 'description',
    }

    return (
        <div className='classes.main'>
            <Description data={mainPageData} />
        </div>
    );
}

export default MainPage;