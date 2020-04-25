import styles from './ImgContainer.module.css';
interface ImgContainer {
    children: React.ReactNode,
    width: number,
}

const ImgContainer: React.FC<ImgContainer> = ({children, width}) => (
    <div style={{width: width}} className={`${styles.img_container}`}>
        {children}
    </div>
);

export default ImgContainer;