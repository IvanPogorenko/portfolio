

function Contacts() {
    return(
        <>
            <div className="inputLine">
                <h className='headForLine'>Контакты</h>
            </div>
            <div className="ml-25">
                <p className="text"><b>E-mail : </b>цвоицув@mail.ru</p>
                <p className="text"><b>Телефон : </b>897908906096</p>
                <p className="text"><b>График работы : </b>9:00 - 21:00</p>
                <h1><b>Наши соцсети</b></h1>
                <div className="horizontal">
                    <div className="plcHolder"></div>
                    <div className="plcHolder"></div>
                    <div className="plcHolder"></div>
                </div>
            </div>
        </>
    );
}

export default Contacts;