export default function UsingBootstrapComponent() {
    return (
        <div classNameName="accordion" id="accordionExample">
            <div classNameName="accordion-item">
                <h2 classNameName="accordion-header" id="headingOne">
                <button classNameName="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" classNameName="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div classNameName="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNameNamees that we use to style each element. These classNameNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div classNameName="accordion-item">
                <h2 classNameName="accordion-header" id="headingTwo">
                <button classNameName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" classNameName="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div classNameName="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNameNamees that we use to style each element. These classNameNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div classNameName="accordion-item">
                <h2 classNameName="accordion-header" id="headingThree">
                <button classNameName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" classNameName="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div classNameName="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNameNamees that we use to style each element. These classNameNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>

            <button type="button" classNameName="btn btn-primary">Primary</button>
            <button type="button" classNameName="btn btn-danger">Danger</button>

            <div classNameName="modal-body">
                <h5>Popover in a modal</h5>
                <p>This <a href="#" role="button" classNameName="btn btn-secondary popover-test" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
                <hr></hr>
                <h5>Tooltips in a modal</h5>
                <p><a href="#" classNameName="tooltip-test" title="Tooltip">This link</a> and <a href="#" classNameName="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
            </div>

            
        </div>
    )
}