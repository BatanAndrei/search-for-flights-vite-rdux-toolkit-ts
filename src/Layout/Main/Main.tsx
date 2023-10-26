import style from './main.module.css';
import ButtonNavigation from './ButtonNavigation/ButtonNavigation';
import BlockFilterTransfer from './BlockFilterTransfer/BlockFilterTransfer';
import BlockFilterCompanies from './BlockFilterCompanies/BlockFilterCompanies';

function Main() {
    return (
        <main className={style.block_main}>
            <div className={style.block_filters}>
                <BlockFilterTransfer />
                <BlockFilterCompanies />
            </div>
            <div className={style.block_info}>
                <div className={style.block_info__navigation}>
                    <ButtonNavigation />
                </div>
                <div className={style.block_info__tickets}>

                </div>
            </div>
        </main>
    )
}

export default Main;