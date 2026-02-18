import Image from 'next/image'

export default function ActivityTwo() {

    return (
        <>
            <section className='activityContainer'>
                <h3>Selskabs- pg seniordans</h3>

                <div className='activityBox'>
                    <Image src={`/seniordans.jpg`} alt="seniordans" width="500" height="500"></Image>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae dolorem asperiores voluptate modi ea quas fugiat natus ullam molestias.</p>
                </div>
            </section>
        </>
    )
}