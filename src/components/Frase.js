import styles from './Frase.module.css' //importante o css especifico

function Frase()
{
    return(
        <div className ={styles.FraseContainer}>
        <p className = {styles.FraseContent}> Este é um componente com uma frase!</p>
        </div>
        
    )
}

export default Frase

