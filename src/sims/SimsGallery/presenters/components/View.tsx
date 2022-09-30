import styles from "./View.module.css";

interface IView {
    content: string;
}

export const View:React.FC<IView> = ({content}) => (
    <div className={styles.view}>
        {content}
    </div>
)
