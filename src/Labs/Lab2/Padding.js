export default function Padding() {
    return (
        <div id="wd-css-paddings">
            <h2>Padding</h2>
            
            {/* Padded top left */}
            <div className="wd-padding-top wd-padding-left wd-border-fat wd-border-red wd-bg-color-yellow">
                Padded top left
            </div>

            {/* Padded bottom right */}
            <div className="wd-padding-bottom wd-padding-right wd-border-fat wd-border-blue wd-bg-color-yellow">
                Padded bottom right
            </div>

            {/* Padded all around */}
            <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-bg-color-blue wd-fg-color-white">
                Padded all around
            </div>
        </div>
    );
}
