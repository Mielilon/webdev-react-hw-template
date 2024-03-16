import classNames from "classnames";
import styles from "@components/PlayList/PlayList.module.css"
import PlayListItem from "../PlayListItem/PlayListItem";

export default function PlayList() {
    return (
        <div className={classNames(styles.contentPlaylist, styles.playlist)}>
            <PlayListItem />
        </div >
    )
}