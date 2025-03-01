import '../css/howOrder.css'

function HowOrder() {
    return (
        <>
            <div className="input-line">
                <h className='main-title'>Как заказать</h>
            </div>
            <section className="instructions">
                <div className="container instructions__container">
                    <div className="instructions__left-instruction instructions__instruction">
                        <h className='small-title'>Заказ по СПБ и ЛО<br></br>(до 35км. от КАД)</h>
                        <ul className='list'>
                            <li className='list__item text'>Оставляете заявку на заказ</li>
                            <li className='list__item text'>Связываемся с Вами</li>
                            <li className='list__item text'>Уточняем все необходимые<br></br>детали</li>
                            <li className='list__item text'>Орентируем по актуальным<br></br>срокам производства</li>
                            <li className='list__item text'>Процесс пошива</li>
                            <li className='list__item text'>Отправка фото готовой работы</li>
                            <li className='list__item text'>Согласовывание доставки</li>
                            <li className='list__item text'>Примерка (15 мин.)</li>
                            <li className='list__item text'>Оплата (карта/наличные)</li>
                        </ul>
                    </div>
                    <div className="instructions__right-instruction instructions__instruction">
                        <h className='small-title'>Заказ по РФ</h>
                        <ul className='list'>
                            <li className='list__item text'>Оставляете заявку на заказ</li>
                            <li className='list__item text'>Связываемся с Вами</li>
                            <li className='list__item text'>Уточняем все необходимые<br></br>детали</li>
                            <li className='list__item text'>Орентируем по актуальным<br></br>срокам производства</li>
                            <li className='list__item text'>Процесс пошива</li>
                            <li className='list__item text'>Согласовывание доставки<br></br>(СДЕК или др.
                                службы<br></br>доставки)
                            </li>
                            <li className='list__item text'>Отправка фото накладной</li>
                            <li className='list__item text'>Примерка (15 мин.)</li>
                            <li className='list__item text'>Оплата (карта/наличные)</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="input-line">
                <h className='main-title'>Выбор размера</h>
            </div>
            <section className='size'>
                <div className="size__container">
                    <div className="size__text text">Для того, чтобы определиться с нужным размером просим Вас ознакомиться с нашей
                        размерной таблицей. Если в таблице нужного размера нет – при оформлении заказа просим указать
                        Ваши параметры (обхват груди, талии и бедер + рост).
                    </div>
                    <div className="size__text text">Любое изделие MOONPIE можно заказать в понравившемся цвете из предложенной палитры цветов.
                    </div>
                    <table className="size__table">
                        <tbody>
                            <tr>
                                <td className="table__column">Размер</td>
                                <td className="table__column">42</td>
                                <td className="table__column">44</td>
                                <td className="table__column">46</td>
                                <td className="table__column">48</td>
                                <td className="table__column">50</td>
                                <td className="table__column">52</td>
                                <td className="table__column">54</td>
                                <td className="table__column">56</td>
                            </tr>
                            <tr>
                                <td className="table__column">Обхват груди</td>
                                <td className="table__column">84</td>
                                <td className="table__column">88</td>
                                <td className="table__column">92</td>
                                <td className="table__column">96</td>
                                <td className="table__column">100</td>
                                <td className="table__column">104</td>
                                <td className="table__column">108</td>
                                <td className="table__column">112</td>
                            </tr>
                            <tr>
                                <td className="table__column">Обхват талии</td>
                                <td className="table__column">64</td>
                                <td className="table__column">68</td>
                                <td className="table__column">72</td>
                                <td className="table__column">76</td>
                                <td className="table__column">80</td>
                                <td className="table__column">84</td>
                                <td className="table__column">89</td>
                                <td className="table__column">94</td>
                            </tr>
                            <tr>
                                <td className="table__column">Обхват бедер</td>
                                <td className="table__column">92</td>
                                <td className="table__column">96</td>
                                <td className="table__column">100</td>
                                <td className="table__column">104</td>
                                <td className="table__column">108</td>
                                <td className="table__column">112</td>
                                <td className="table__column">116</td>
                                <td className="table__column">120</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

export default HowOrder;