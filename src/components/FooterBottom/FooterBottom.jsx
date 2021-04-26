import {Link} from 'react-router-dom';
import {ArrowDown} from '../../assets/icons/icons';
import './FooterBottom.scss';

const FooterBottom = () => {
    return (
        <div className="FooterBottom">
            <div className="footer-bottom-inner container">
                <div className="footer-bottom__links">

                    <div className="line">
                        <div className="top">
                            <h4 className="link-title red">Автомобили</h4>
                            <ul>
                                <Link>
                                    <li className="link">Легковые авто</li>
                                </Link>
                                <Link>
                                    <li className="link">Мото</li>
                                </Link>
                                <Link>
                                    <li className="link">Автобусы</li>
                                </Link>
                                <Link>
                                    <li className="link">Грузовые авто</li>
                                </Link>
                                <Link>
                                    <li className="link">Сельхозтехника</li>
                                </Link>
                                <Link>
                                    <li className="link">Прицепы и Спецтехника</li>
                                </Link>
                                <Link>
                                    <li className="link">Водный и Другой транспортa</li>
                                </Link>
                            </ul>
                        </div>

                        <div className="bottom">
                            <h4 className="link-title green">Дом и Сад</h4>
                            <ul>
                                <Link>
                                    <li className="link">Товары для интерьера</li>
                                </Link>
                                <Link>
                                    <li className="link">Товары для сада</li>
                                </Link>
                                <Link>
                                    <li className="link">Растения</li>
                                </Link>
                                <Link>
                                    <li className="link">Продукты питания</li>
                                </Link>
                                <Link>
                                    <li className="link">Посуда и Кухонная утварь</li>
                                </Link>
                                <Link>
                                    <li className="link">Хоз.инвентарь и Бытовая химия</li>
                                </Link>
                                <Link>
                                    <li className="link">Канцтовары и Расходные</li>
                                </Link>
                                <Link>
                                    <li className="link">Прочие товары для дома</li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <div className="line">
                        <div className="top">
                            <h4 className="link-title yellow">Недвижимость</h4>
                            <ul>
                                <Link>
                                    <li className="link">Легковые авто</li>
                                </Link>
                                <Link>
                                    <li className="link">Аренда квартир</li>
                                </Link>
                                <Link>
                                    <li className="link">Аренда домов</li>
                                </Link>
                                <Link>
                                    <li className="link">Аренда гаражей и Стоянок</li>
                                </Link>
                                <Link>
                                    <li className="link">Продажа квартир</li>
                                </Link>
                                <Link>
                                    <li className="link">Продажа домов</li>
                                </Link>
                                <Link>
                                    <li className="link">Продажа земли</li>
                                </Link>
                                <Link>
                                    <li className="link">Продажа гаражей/Стоянок</li>
                                </Link>
                                <Link>
                                    <li className="link">Аренда помещений</li>
                                </Link>
                                <Link>
                                    <li className="link">Продажа помещений</li>
                                </Link>
                                <Link>
                                    <li className="link">Прочая недвижимость</li>
                                </Link>
                                <Link>
                                    <li className="link">Обмен недвижимости</li>
                                </Link>
                                <Link>
                                    <li className="link">Коммерческая недвижимость</li>
                                </Link>
                            </ul>
                        </div>

                        <div className="bottom">
                            <h4 className="link-title purple">Товары стройки и ремонта</h4>
                            <ul>
                                <Link>
                                    <li className="link">Двери и окна</li>
                                </Link>
                                <Link>
                                    <li className="link">Сантехника</li>
                                </Link>
                                <Link>
                                    <li className="link">Стройматериалы</li>
                                </Link>
                                <Link>
                                    <li className="link">Инструменты</li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <div className="line">
                        <div className="top">
                            <h4 className="link-title red">Электроника</h4>
                            <ul>
                                <Link>
                                    <li className="link">Телефоны</li>
                                </Link>
                                <Link>
                                    <li className="link">Компьютеры</li>
                                </Link>
                                <Link>
                                    <li className="link">Ноутбуки, планшеты</li>
                                </Link>
                                <Link>
                                    <li className="link">Оргтехника и расходники</li>
                                </Link>
                                <Link>
                                    <li className="link">ТВ,Фото,Видео и Аудио</li>
                                </Link>
                                <Link>
                                    <li className="link">Игры и Приставки</li>
                                </Link>
                                <Link>
                                    <li className="link">Техника для дома и Для себя</li>
                                </Link>
                                <Link>
                                    <li className="link">Климатическое оборудование</li>
                                </Link>
                                <Link>
                                    <li className="link">Аксессуары и Комплектующие</li>
                                </Link>
                                <Link>
                                    <li className="link">Техника для наблюдения</li>
                                </Link>
                                <Link>
                                    <li className="link">Прочая электроника</li>
                                </Link>
                            </ul>
                        </div>

                        <div className="bottom">
                            <h4 className="link-title">Хобби, Отдых и Спорт</h4>
                            <ul>
                                <Link>
                                    <li className="link">Антиквариат и Коллекции</li>
                                </Link>
                                <Link>
                                    <li className="link">Музыкальные инструменты</li>
                                </Link>
                                <Link>
                                    <li className="link">Велосипеды</li>
                                </Link>
                                <Link>
                                    <li className="link">Товары для спорта и отдыха</li>
                                </Link>
                                <Link>
                                    <li className="link">Книги/Журналы</li>
                                </Link>
                                <Link>
                                    <li className="link">CD/DVD/Пластинки/Кассеты</li>
                                </Link>
                                <Link>
                                    <li className="link">Билеты и путешествия</li>
                                </Link>
                                <Link>
                                    <li className="link">Охота и рыбалка</li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <div className="line">
                        <div className="top">
                            <h4 className="link-title">Личные вещи</h4>
                            <ul>
                                <Link>
                                    <li className="link">Одежда, обувь, аксессуары</li>
                                </Link>
                                <Link>
                                    <li className="link">Детская одежда и обувь</li>
                                </Link>
                                <Link>
                                    <li className="link">Детские товары и Игрушки</li>
                                </Link>
                                <Link>
                                    <li className="link">Школьникам</li>
                                </Link>
                                <Link>
                                    <li className="link">Часы и украшения</li>
                                </Link>
                                <Link>
                                    <li className="link">Товары для красоты и здоровья</li>
                                </Link>
                                <Link>
                                    <li className="link">Разные вещи</li>
                                </Link>
                            </ul>
                        </div>

                        <div className="bottom">
                            <h4 className="link-title">Бизнес и услуги</h4>
                            <ul>
                                <Link>
                                    <li className="link">Сырьё и материалы</li>
                                </Link>
                                <Link>
                                    <li className="link">Оборудование и аренда</li>
                                </Link>
                                <Link>
                                    <li className="link">Производство и обработка</li>
                                </Link>
                                <Link>
                                    <li className="link">Продажа бизнеса и партнерство</li>
                                </Link>
                                <Link>
                                    <li className="link">Финансовые услуги/Бухгалтерия</li>
                                </Link>
                                <Link>
                                    <li className="link">Услуги для красоты и здоровья</li>
                                </Link>
                                <Link>
                                    <li className="link">Услуги курьера и доставки</li>
                                </Link>
                                <Link>
                                    <li className="link">Реклама, Полиграфия и Маркетинг</li>
                                </Link>
                                <Link>
                                    <li className="link">Няни, Сиделки и Домработницы</li>
                                </Link>
                                <Link>
                                    <li className="link">Обучение, курсы и репетиторы</li>
                                </Link>
                                <Link>
                                    <li className="link">Фото, видео, искусство и дизайн</li>
                                </Link>
                                <Link>
                                    <li className="link">Перевод и Набор текста</li>
                                </Link>
                                <Link>
                                    <li className="link">Юридические услуги</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>

                <Link to="/" className="link-down">
                    <span>Покозать еще</span>
                    <ArrowDown/>
                </Link>

                <div className="last-links">
                    <ul>
                        <Link>
                            <li className="link">Подать объявление</li>
                        </Link>
                        <Link>
                            <li className="link">Объявления</li>
                        </Link>
                        <Link>
                            <li className="link">Магазины</li>
                        </Link>
                        <Link>
                            <li className="link">Помощь</li>
                        </Link>
                        <Link>
                            <li className="link">Безопасность</li>
                        </Link>
                        <Link>
                            <li className="link">Реклама на сайте</li>
                        </Link>
                        <Link>
                            <li className="link">О компании</li>
                        </Link>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default FooterBottom;