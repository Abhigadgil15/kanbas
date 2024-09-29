export default function Flex() {
    return (
        <div id="wd-css-flex">
            <h2>Flex 1</h2>
            <div className="wd-flex-row-container">
                <div className="wd-bg-color-yellow">Column 1</div>
                <div className="wd-bg-color-blue">Column 2</div>
                <div className="wd-bg-color-red">No flex</div>
            </div>

            <h2>Flex 2</h2>
            <div className="wd-flex-row-container">
                <div className="wd-bg-color-yellow">Column 1</div>
                <div className="wd-bg-color-blue">Column 2</div>
                <div className="wd-bg-color-red wd-flex-grow-2">Column 3 (flex-grow: 1)</div>
            </div>

            <h2>Flex 3</h2>
            <div className="wd-flex-row-container">
                <div className="wd-bg-color-yellow wd-width-75px">Column 1 (fixed width)</div>
                <div className="wd-bg-color-blue">Column 2</div>
                <div className="wd-bg-color-red wd-flex-grow-3">Column 3 (flex-grow: 1 and width 50)</div>
            </div>
        </div>
    );
}
