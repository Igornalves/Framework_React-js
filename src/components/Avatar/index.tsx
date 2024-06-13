import typeAvatar from '../../global/interface/interface';
import styles from './Avatar.module.css'

export default function Avatar({ imgUri, ...props }: typeAvatar) {
    return(
        <img 
            className={props.hasBorder ? styles.avatarWithHasBorder : styles.avatar}
            src={imgUri} 
        />
    );
}