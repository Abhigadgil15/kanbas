import BackgroundColor from "./BackgroundColor";
import ForeGroundColor from "./ForeGroundColor";
import Border from "./Border";
import "./index.css";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Position from "./Position";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIconsSampler";
import BootstrapGrid from "./BootstrapGrid";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BoostrapLists from "./BootstrapLists";
import BootstrapForms from "./BoostrapForms";
import BootstrapNavigation from "./BoostrapNavigation";

export default function Lab2() {
    return (
        <div id="container">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3>Styling with the STYLE attribute</h3>
            <div id="wd-css-document-structure">
                <div className="wd-selector-1">
                    <h3>Document structure selectors</h3>
                    <div className="wd-selector-2">
                        Selectors can be combined to refer to elements in particular places in the document. 
                        A set of selectors separated by a space can refer to elements in a hierarchy. 
                        For instance: 
                        <code>.selector1 .selector2</code> refers to an element whose class is 
                        <code>.selector2</code> and is inside some descendant of another element whose class is 
                        <code>.selector1</code>. 
                        If we use <code>&gt;</code> instead to separate the classes, then we can establish a 
                        direct parent/child relationship.
                        <p className="wd-selector-3">
                            This paragraph's red background is referenced as
                            <br />
                            <code>.wd-selector-2 .wd-selector-3</code>
                            <br />
                            meaning the descendant of some ancestor.
                            <br />
                            <span className="wd-selector-4">
                                Whereas this span is a direct child of its parent
                            </span>
                            
                            <br />
                            You can combine these relationships to create specific
                            styles depending on the document structure.
                        </p>
                    </div>
                    <ForeGroundColor/>
                    <BackgroundColor/>
                    <Border/>
                    <Padding/>
                    <Margins/>
                    <Corners/>
                    <Position/>
                    <Zindex/>
                    <Float/>
                    <GridLayout/>
                    <Flex/>
                    <ReactIconsSampler/>
                    <BootstrapGrid/>
                    <ScreenSizeLabel/>
                    <BootstrapTables/>
                    <BoostrapLists/>
                    <BootstrapForms/>
                    <BootstrapNavigation/>
                </div>
            </div>
        </div>
    );
}
