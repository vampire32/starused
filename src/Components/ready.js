import React from 'react'

const Ready = () => {
  return (
    <section className="ui-section-close">
        <div className="ui-layout-container">
          <div className="ui-layout-column-6 ui-layout-column-center">
            <h2 className='text-[2rem] font-bold'>Ready to start?</h2>
            <p className="ui-text-intro">Lorem ipsum dolor sit amet consectetur.</p>
            
            <div className="ui-component-cta ui-layout-flex">
              <a href="#" role="link" aria-label="#" className="ui-component-button ui-component-button-normal ui-component-button-primary">Get Started for Free</a>
              <p className="ui-text-note"><small>30 days free trial.</small></p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Ready
