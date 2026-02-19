import Image from 'next/image'

export default function ActivityOne() {

    return (
        <>
            <section className='activityContainer'>
                <h3>Børnehold</h3>

                <div className='activityBox'>
                    <Image src={`/boernedans.jpg`} alt="boernedans" width="500" height="500"></Image>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae dolorem asperiores voluptate modi ea quas fugiat natus ullam molestias.</p>
                </div>
            </section>
        </>
    )
}