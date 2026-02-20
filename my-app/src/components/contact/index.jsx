import "./contactForm.css"

export default function ContactForm() {

    return (
        <>
            <section className="ContactFPcontainer">
                <h2 className="ContactFPtitle">Kontakt os</h2>
                <div className="ContactFPbox">
                    <form className="ContactFPform" action="">

                        <div className="ContactFPinputbox">
                            <input className="ContactFPinput" type="text" name="name" placeholder="Navn" />
                        </div>

                        <div className="ContactFPinputbox">
                            <input className="ContactFPinput" type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="ContactFPinputbox">
                            <input className="ContactFPinput messageInput" type="textArea" name="message" placeholder="Besked" />
                        </div>
                        <button className="ContactFPbtn" type="submit">Send besked</button>
                    </form>


                        <img className="ContactFPimage" src={`/miniLogo.png`} alt="" />
                        <h3 className="ContactFPcomp">Landrup Dans</h3>
                        <p className="ContactFPaddresse">Pulsen 8. 4000 Roskilde</p>
                        <p className="ContactFPphone">Tlf. 3540 4550</p>

                </div>
            </section>
        </>
    )
}