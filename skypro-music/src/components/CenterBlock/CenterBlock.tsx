import classNames from "classnames";
import styles from "@components/CenterBlock/CenterBlock.module.css"
import FilterBlock from "../FilterBlock/FilterBlock";
import PlayList from "../PlayList/PlayList";

export default function CenterBlock() {
    return (
        <div className={classNames(styles.mainCenterBlock, styles.centerBlock)}>
            <div className={classNames(styles.centerBlockSearch, styles.search)}>
                <svg className={styles.searchSvg}>
                    <use href="img/icon/sprite.svg#icon-search"></use>
                </svg>
                <input
                    className={styles.searchText}
                    type="search"
                    placeholder="Поиск"
                    name="search"
                />
            </div>
            <h2 className={styles.centerBlockH2}>Треки</h2>

            <FilterBlock />

            <div className={classNames(styles.centerBlockContent, styles.playlistContent)}>
                <div className={classNames(styles.contentTitle, styles.playlistTitle)}>
                    <div className={classNames(styles.playlistTitleCol, styles.col01)}>Трек</div>
                    <div className={classNames(styles.playlistTitleCol, styles.col02)}> Исполнитель</div >
                    <div className={classNames(styles.playlistTitleCol, styles.col03)}>Альбом</div>
                    <div className={classNames(styles.playlistTitleCol, styles.col04)}>
                        <svg className={styles.playlistTitleSvg}>
                            <use href="img/icon/sprite.svg#icon-watch"></use>
                        </svg>
                    </div>
                </div >

                <PlayList />
                
            </div >
        </div >
    )
}