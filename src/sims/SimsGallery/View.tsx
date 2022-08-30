import styles from "./SimsGallery.module.css";

interface IView {
    content: string;
}

export const View:React.FC<IView> = ({content}) => (
    <div className={styles.view}>
        {content}
    </div>
)
