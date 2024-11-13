import React from 'react'

const Carusel = () => {
  return (
    <section className="carusel-section">
        <div className="container2">
            <h2>How Does It Work</h2>

            <div className="carusel">
                <div className="carusel-item1">
                    <img src="/bilder/iphoneleft.svg" alt="graphe iphone" />
                </div>
                <div className="carusel-item2">
                    <img src="/bilder/iPhonecenter.svg" alt="iphone med kredit" />
                </div>
                <div className="carusel-item3">
                    <img src="/bilder/iphoneright.svg" alt="iphone med pengar" />
                </div>
        </div>

            <div className="history">
                <h3>Latest transction history</h3>
                <p className="space">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
            </div>
          <div className="mobile-first">
                <h3>Transfers to people from
                    your contact list</h3>
                <p className="space">Proin volutpat mollis egestas. Nam luctus facilisis
                    ultrices. Pellentesque volutpat ligula est. Mattis
                    fermentum, at nec lacus.</p>
            </div>

            <div className="tablet">
                <h3>Step 3. Transfers to people from your
                    contact list</h3>
                <p className="space">Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
                    Pellentesque volutpat ligula est. Mattis fermentum, at nec
                    lacus.</p>
            </div>
        </div>

    </section>
  )
}

export default Carusel