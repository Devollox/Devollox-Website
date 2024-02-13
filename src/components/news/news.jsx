import react from 'react';
import {useTheme} from "../../hook/use-theme";

const WrapperNews = (props) => {

    const {theme, setTheme} = useTheme()

    return (
        <div className="news main-container" id='body_switch_theme'>
            <div className="box-with-header" id="news-box-item">
                <div className="header">
                    <div className="left">Обновление {props.update}</div>
                    <div className="right">{props.date}</div>
                </div>
                <div className="body">
                    <div className="flex-column" dangerouslySetInnerHTML={{ __html: `${props.info}` }}>

                    </div>
                </div>
            </div>
        </div>

    )
}


export default function News() {
    return (
        <div className="news_wrapper">
                <div className="header-breadcrumb">
                    <div className="main-container">
                        <a href='/' className="main-news">
                            News
                        </a>
                    </div>
                </div>
            <WrapperNews update='Website (1.01 #2)' date="13 февраля 2024" info="
                        [+] Изменение темы в 'News'.
                        <br/>
                        [/] Обновление карточек.
            " />
            <WrapperNews update='Website (1.01)' date="13 февраля 2024" info="
                        Обновил дизайн и функционал сайта, визуально стал выглядеть приятней.
            " />
            <WrapperNews update='Website (1.00)' date="11 февраля 2024" info="
                        Обновление сайта - 1.00
                        <br/>
                        <br/>
                        Список изменений:
                        <br/>
                        [+] Добавилась новая страничка 'News', тут будут выходить все значительные изменения сайта.
                        <br/>
                        [-] Удаление страницы 'Update'.
                        <br/>
                        [-] Удаление даты последнего обновление на главной страницы сайта. И удаление куска кода связанная с плохой производительность api.github и get запросов.
                        <br/>
                        [\] Оптимизация загрузки сайта и добавление интеграцией с GitHub-ом.
            " />

        </div>
    )
};