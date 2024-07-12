import styles from './Loading.module.css'
import {BatteryLoader } from 'react-loaders-kit'

const Loading = () => {
    const loaderProps = {
        loading: true,
        size: 100,
        duration: 1,
    }

    return (
        <div className={styles.loadingContainer}>
            <BatteryLoader{...loaderProps}/>
            <h2>Cargando...</h2>
        </div>
    )
}

export default Loading

