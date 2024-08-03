import '../css/howOrder.css'

function HowOrder() {
    return(
        <>
            <div className="inputLine">
                <h className='headForLine'>Как заказать</h>
            </div>
            <div className='wrapper'>
                <div className='left'>
                    <h>Заказ по СПБ и ЛО<br></br>(до 35км. от КАД)</h>
                    <ul className='instruction'>
                        <li>Оставляете заявку на заказ</li>
                        <li>Связываемся с Вами</li>
                        <li>Уточняем все необходимые<br></br>детали</li>
                        <li>Орентируем по актуальным<br></br>срокам производства</li>
                        <li>Процесс пошива</li>
                        <li>Отправка фото готовой работы</li>
                        <li>Согласовывание доставки</li>
                        <li>Примерка (15 мин.)</li>
                        <li>Оплата (карта/наличные)</li>
                    </ul>
                </div>
                <div className='right'>
                    <h>Заказ по РФ</h>
                    <ul className='instruction'>
                        <li>Оставляете заявку на заказ</li>
                        <li>Связываемся с Вами</li>
                        <li>Уточняем все необходимые<br></br>детали</li>
                        <li>Орентируем по актуальным<br></br>срокам производства</li>
                        <li>Процесс пошива</li>
                        <li>Согласовывание доставки<br></br>(СДЕК или др. службы<br></br>доставки)</li>
                        <li>Отправка фото накладной</li>
                        <li>Примерка (15 мин.)</li>
                        <li>Оплата (карта/наличные)</li>
                    </ul>
                </div>
            </div>
            <div className="inputLine">
                <h className='headForLine'>Выбор размера</h>
            </div>
            <div className='size'>
                <p>Для того, чтобы определиться с нужным размером просим Вас ознакомиться с нашей размерной таблицей. Если в таблице нужного размера нет – при оформлении заказа просим указать Ваши параметры (обхват груди, талии и бедер + рост).</p>
                <p>Любое изделие MOONPIE можно заказать в понравившемся цвете из предложенной палитры цветов.</p>
                <table class="iksweb">
                    <tbody>
                        <tr>
                            <td>Размер</td>
                            <td>42</td>
                            <td>44</td>
                            <td>46</td>
                            <td>48</td>
                            <td>50</td>
                            <td>52</td>
                            <td>54</td>
                            <td>56</td>
                        </tr>
                        <tr>
                            <td>Обхват груди</td>
                            <td>84</td>
                            <td>88</td>
                            <td>92</td>
                            <td>96</td>
                            <td>100</td>
                            <td>104</td>
                            <td>108</td>
                            <td>112</td>
                        </tr>
                        <tr>
                            <td>Обхват талии</td>
                            <td>64</td>
                            <td>68</td>
                            <td>72</td>
                            <td>76</td>
                            <td>80</td>
                            <td>84</td>
                            <td>89</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <td>Обхват бедер</td>
                            <td>92</td>
                            <td>96</td>
                            <td>100</td>
                            <td>104</td>
                            <td>108</td>
                            <td>112</td>
                            <td>116</td>
                            <td>120</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default HowOrder;