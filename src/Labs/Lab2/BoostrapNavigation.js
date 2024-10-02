export default function BootstrapNavigation() {
  return (
      <div id="wd-css-navigating-with-tabs">
          <h2>Tabs</h2>
          <ul className="nav nav-tabs">
              <li className="nav-item">
                  <a className="nav-link active" href="#active">Active</a> {/* Valid href */}
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#link1">Link</a> {/* Valid href */}
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#link2">Link</a> {/* Valid href */}
              </li>
              <li className="nav-item">
                  <a className="nav-link disabled" href="#disabled" aria-disabled="true">Disabled</a> {/* Valid href and aria-disabled */}
              </li>
          </ul>
          <br />
          <div id="wd-css-navigating-with-cards">
              <h2>Cards</h2>
              <div className="card" style={{ width: "18rem" }}>
                  <img src="stacked.jpg" className="card-img-top" alt="Stacked Starship" /> {/* Added alt attribute */}
                  <div className="card-body">
                      <h5 className="card-title">Stacking Starship</h5>
                      <p className="card-text">
                          Stacking the most powerful rocket in history. Mars or bust!
                      </p>
                      <a href="#boldly-go" className="btn btn-primary">Boldly Go</a> {/* Valid href */}
                  </div>
              </div>
          </div>
      </div>
  );
}
