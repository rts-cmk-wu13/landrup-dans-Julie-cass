
import "./ActivityDetail.css"

export default function ActivityDetail({ ACTIVITY }) {

    return (
        <>
            <section className="DetailSec">
                <div className="DetailDiv" key={ACTIVITY.id}>

                    <div className="ImageWrapper">
                        <img className="DetailImage" src={ACTIVITY.asset.url} alt="" />

                        <div className="DetailBtnBox">
                            <button className="DetailBtn">Tilmeld</button>
                        </div>
                    </div>

                    <div className="DetailInfomationCon">
                        <h2 className="DetailTitle">{ACTIVITY.name}</h2>
                        <p className="DetailMinAge">{ACTIVITY.minAge}+ år</p>

                        <div className="DetailDesBox">
                            <p className="DetailDes">{ACTIVITY.description}</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}