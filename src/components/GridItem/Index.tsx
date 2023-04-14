import { Level } from "../../helpers/imc"
import styles from './Index.module.css'
import magrezaImage from '../../assets/magreza.png'
import normalImage from '../../assets/normal.png'
import sobrepesoImage from '../../assets/sobrepeso.png'
import obesidadeImage from '../../assets/obesidade.png'

type Props = {
    item: Level
}

export const GridItem = ({item}:Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                {item.icon == 'magreza' && <img src={magrezaImage} alt="" width="50" />}
                {item.icon == 'normal' && <img src={normalImage} alt="" width="50" />}
                {item.icon == 'sobrepeso' && <img src={sobrepesoImage} alt="" width="50" />}
                {item.icon == 'obesidade' && <img src={obesidadeImage} alt="" width="50" />}
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>
            
            {item.yourIMC &&
                <div className={styles.yourIMC}>Seu IMC é de: {parseFloat(item.yourIMC.toFixed(2))} Kg/m²</div>
            }
            
            <div className={styles.gridInfo}>
                <>
                    IMC está entre {item.imc[0]} e {item.imc[1]}
                </>
            </div>
        </div>
    )
}