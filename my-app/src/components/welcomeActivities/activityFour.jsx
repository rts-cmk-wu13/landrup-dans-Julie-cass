import Image from 'next/image'

export default function ActivityFour() {

    return (
        <>
            <section className='activityContainer'>
                <h3>Streetdance og kiphop</h3>

                <div className='activityBox'>
                    <Image src={`/streethiphop.jpg`} alt="streethiphop" width="500" height="500"></Image>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae dolorem asperiores voluptate modi ea quas fugiat natus ullam molestias.</p>
                </div>
            </section>
        </>
    )
}