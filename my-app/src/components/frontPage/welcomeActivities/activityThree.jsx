import Image from 'next/image'

export default function ActivityThree() {

    return (
        <>
            <section className='activityContainer'>
                <h3>Moderne dans og ballet</h3>

                <div className='activityBox'> 
                    <Image src={`/modernedans.jpg`} alt="modernedans" width="500" height="500"></Image>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae dolorem asperiores voluptate modi ea quas fugiat natus ullam molestias.</p>
                </div>
            </section>
        </>
    )
}