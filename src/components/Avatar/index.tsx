import typeAvatar from '../../global/interface/interface';
import styles from './Avatar.module.css'

export default function Avatar({ ...props }: typeAvatar) {
    return(
        <img 
            className={props.hasBorder ? styles.avatarWithHasBorder : styles.avatar}
            {...props}
        />
    );
}