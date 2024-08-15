
type GridProps = {
    className?:string;
    id:string;
}

function GridProvider({id, className}:GridProps){


    return (
        <div id={id} className={"" ?? className}>
            <div className="gridItem">1</div>
            <div className="gridItem">2</div>
            <div className="gridItem">3</div>
            <div className="gridItem">4</div>
            <div className="gridItem">5</div>
            <div className="gridItem">6</div>
            <div className="gridItem">7</div>
            <div className="gridItem">8</div>
            <div className="gridItem">9</div>
            <div className="gridItem">10</div>
            <div className="gridItem">11</div>
            <div className="gridItem">12</div>
            <div className="gridItem">13</div>
            <div className="gridItem">14</div>
            <div className="gridItem">15</div>
            <div className="gridItem">16</div>
            <div className="gridItem">17</div>
            <div className="gridItem">18</div>
            <div className="gridItem">19</div>
            <div className="gridItem">20</div>
        </div>
    )
}


export default GridProvider;